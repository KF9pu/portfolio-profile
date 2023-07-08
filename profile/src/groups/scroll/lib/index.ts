import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { House } from "../class/House";
import gsap from "gsap";

/**
 * 0. 캔버스 지정
 * 1. Renderer set
 * 2. Scene set
 * 3. Camera set
 * 4. Light set
 * 5. Controls set
 * 6. Loader set
 * 7. mesh set
 * 8. draw 캔버스에 그리기
 */

const ThreeScroll = () => {
  const canvas = document.querySelector("#three-canvas");
  // 0. 캔버스 지정
  console.log("*** ThreeScroll 시작 ");

  if (!canvas) return;
  // 1. Renderer set
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 그림자를 부드럽게 만들어줌

  // 2. Scene set
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("white");

  // 3. Canera set
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-5, 2, 25);
  scene.add(camera);

  // 4. light set
  const ambientLight = new THREE.AmbientLight("white", 0.5);
  scene.add(ambientLight);

  const spotLight = new THREE.SpotLight("white", 0.7);
  spotLight.position.set(0, 150, 100);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 200;
  scene.add(spotLight);

  // 6. Loader
  const gltfLoader = new GLTFLoader();

  // 7. mesh set
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({ color: "white" })
  );
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);

  const houses: House[] = [];
  houses.push(new House({ gltfLoader, scene, modelSrc: "/models/house.glb", x: -5, z: 20, height: 2 }));
  houses.push(new House({ gltfLoader, scene, modelSrc: "/models/house.glb", x: 7, z: 10, height: 2 }));
  houses.push(new House({ gltfLoader, scene, modelSrc: "/models/house.glb", x: -10, z: 0, height: 2 }));
  houses.push(new House({ gltfLoader, scene, modelSrc: "/models/house.glb", x: 10, z: -10, height: 2 }));
  houses.push(new House({ gltfLoader, scene, modelSrc: "/models/house.glb", x: -5, z: -20, height: 2 }));

  // 8. draw 캔버스에 그리기
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  let currentSection = 0;
  function setSection() {
    // window.pageYOffset
    const newSection = Math.round(window.scrollY / window.innerHeight); // 0 ~ 4

    if (currentSection !== newSection) {
      console.log("animation!!");
      gsap.to(camera.position, {
        duration: 1,
        x: houses[newSection].x,
        z: houses[newSection].z + 5,
      });
      currentSection = newSection;
    }
  }

  function setSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("scroll", setSection);
  window.addEventListener("resize", setSize);

  draw();
};
export default ThreeScroll;
