import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as CANNON from "cannon-es";
import { Domino } from "../mash/Domino";
import { PreventDragClick } from "../utils/PreventDragClick";

/**
 * 0. 캔버스 지정
 * 1. Renderer set
 * 2. Scene set
 * 3. Camera set
 * 4. Light set
 * 5. Controls set
 * 6. Loader set
 * 7. Cannon(물리 엔진) set
 * 8. draw 캔버스에 그리기
 */

export default () => {
  const canvas = document.querySelector("#three-canvas");
  // console.log("캔버스", canvas);
  console.log("*** 캔버스 생성 시작");
  if (!canvas) return;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("white");

  // Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.y = 1.5;
  camera.position.z = 4;
  scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight("white", 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight("white", 1);
  directionalLight.position.x = 1;
  directionalLight.position.z = 2;
  scene.add(directionalLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Loader
  const gltfLoader = new GLTFLoader();

  // Cannon(물리 엔진)
  const cannonWorld = new CANNON.World();
  cannonWorld.gravity.set(0, -10, 0);

  // 성능을 위한 세팅
  cannonWorld.allowSleep = true;
  cannonWorld.broadphase = new CANNON.SAPBroadphase(cannonWorld);

  // Contact Material
  const defaultMaterial = new CANNON.Material("default");
  const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
    friction: 0.01,
    restitution: 0.9,
  });
  cannonWorld.defaultContactMaterial = defaultContactMaterial;

  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 0, 0),
    shape: floorShape,
    material: defaultMaterial,
  });
  floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2);
  cannonWorld.addBody(floorBody);

  // Mesh
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
      color: "slategray",
    })
  );
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);

  // 도미노 생성
  // const dominos: Domino[] = [];
  // let domino;
  // for (let i = -3; i < 17; i++) {
  //   domino = new Domino({
  //     index: i,
  //     scene,
  //     cannonWorld,
  //     gltfLoader,
  //     z: -i * 0.8,
  //   });
  //   dominos.push(domino);
  // }

  // 그리기
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();

    // 도미노 생성
    // dominos.forEach(item => {
    //   if (item.cannonBody && item.modelMesh) {
    //     item.modelMesh.position.copy(
    //       new THREE.Vector3(item.cannonBody.position.x, item.cannonBody.position.y, item.cannonBody.position.z)
    //     );
    //     item.modelMesh.quaternion.copy(
    //       new THREE.Quaternion(item.cannonBody.quaternion.x, item.cannonBody.quaternion.y, item.cannonBody.quaternion.z)
    //     );
    //   }
    // });
    cannonWorld.step(1 / 60, delta, 3);

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // Raycaster
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function checkIntersects() {
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    for (const item of intersects) {
      const object3D = item.object as THREE.Object3D & { cannonBody?: CANNON.Body };
      if (object3D.cannonBody) {
        object3D.cannonBody.applyForce?.(new CANNON.Vec3(0, 0, -50), new CANNON.Vec3(0, 0, 0));
        break;
      }
    }
  }

  // 이벤트
  window.addEventListener("resize", setSize);
  canvas.addEventListener("click", (e: any) => {
    if (preventDragClick.mouseMoved) return;

    mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);

    checkIntersects();
  });

  const preventDragClick = new PreventDragClick(canvas);

  draw();
};
