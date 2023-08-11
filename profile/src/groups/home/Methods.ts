import { Stand } from "./meshes/Stand";
import { Player } from "./meshes/Player";
import { gsap } from "gsap";
import {
  AmbientLight,
  CircleGeometry,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  OrthographicCamera,
  PCFSoftShadowMap,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from "three";
import SpotMesh from "./meshes/SpotMesh";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Dispatch, SetStateAction } from "react";
import { TextMesh } from "./meshes/TextMesh";

interface MeshInOutprops {
  mesh: Stand;
  spotMesh: Mesh<CircleGeometry, MeshStandardMaterial>;
  player: Player;
  camera: OrthographicCamera;
  meshShowPositionY: number;
  spotEvent: Dispatch<SetStateAction<number>>;
  spotNum: number;
}

class Methods {
  public SetRenderer(canvas: HTMLCanvasElement) {
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio > 1 ? 2 : 1);
    // renderer shadow set
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    return renderer;
  }
  public SetCamera(scene: Scene) {
    // 카메라의위치에 따라 동일한 크기를 보여주는 카메라
    const camera = new OrthographicCamera(
      -(window.innerWidth / window.innerHeight), // left
      window.innerWidth / window.innerHeight, // right,
      1, // top
      -1, // bottom
      -1000,
      1000
    );

    const cameraPosition = new Vector3(1, 5, 5);
    camera.position.x = cameraPosition.x;
    camera.position.y = cameraPosition.y;
    camera.position.z = cameraPosition.z;
    camera.zoom = 0.2; // 카메라 원근 조절
    camera.updateProjectionMatrix(); // 카메라 투영 매트릭스를 업데이트합니다. 파라미터 변경 후에 반드시 호출해야합니다.
    scene.add(camera);

    return { camera, cameraPosition };
  }
  public SetLight(scene: Scene) {
    const ambientLight = new AmbientLight("white", 0.7);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight("white", 0.5);
    const directionalLightOriginPosition = new Vector3(1, 1, 1);
    directionalLight.position.x = directionalLightOriginPosition.x;
    directionalLight.position.y = directionalLightOriginPosition.y;
    directionalLight.position.z = directionalLightOriginPosition.z;
    directionalLight.castShadow = true;

    // mapSize 세팅으로 그림자 퀄리티 설정
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    // 그림자 범위
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.near = -100;
    directionalLight.shadow.camera.far = 100;
    scene.add(directionalLight);

    return { ambientLight, directionalLight };
  }
  public CreateMeshes(scene: Scene) {
    const textureLoader = new TextureLoader();
    const gltfLoader = new GLTFLoader();

    const floorTexture = textureLoader.load("/images/floor.jpg");
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.x = 5;
    floorTexture.repeat.y = 5;

    const meshes: Mesh[] = [];

    const floorMesh = new Mesh(
      new PlaneGeometry(30, 30),
      new MeshStandardMaterial({
        map: floorTexture,
      })
    );
    floorMesh.name = "floor";
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);
    meshes.push(floorMesh);

    const pointerMesh = new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({
        color: "crimson",
        transparent: true,
        opacity: 0.5,
      })
    );
    pointerMesh.rotation.x = -Math.PI / 2;
    pointerMesh.position.y = 0.01;
    pointerMesh.receiveShadow = true;
    scene.add(pointerMesh);

    const introSpot = new SpotMesh({
      name: "introSpotMesh",
      scene,
      position: { x: -3, z: -3 },
    });

    const introText = new TextMesh({
      text: "Intro !",
      position: { x: introSpot.mesh.position.x, z: introSpot.mesh.position.z },
      scene,
      size: 1,
    });

    const introStand = new Stand({
      gltfLoader,
      scene,
      modelSrc: "/models/house.glb",
      position: { x: introSpot.mesh.position.x, y: -1.3, z: introSpot.mesh.position.x - 2 },
      name: "house",
    });

    const meSpot = new SpotMesh({
      name: "MeSpotMesh",
      scene,
      position: { x: -3, z: 3 },
    });

    const meText = new TextMesh({
      text: "It's Me !",
      position: { x: meSpot.mesh.position.x, z: meSpot.mesh.position.z },
      scene,
      size: 1,
    });

    const meStand = new Stand({
      gltfLoader,
      scene,
      modelSrc: "/models/ReadyPlayerMeGlb.glb",
      position: { x: meSpot.mesh.position.x, y: -4, z: meSpot.mesh.position.z - 2 },
      name: "me",
    });

    const gearSpot = new SpotMesh({
      name: "gearSpotMesh",
      scene,
      position: { x: 6, z: -3 },
    });

    const gearText = new TextMesh({
      text: "It's Me !",
      position: { x: meSpot.mesh.position.x, z: meSpot.mesh.position.z },
      scene,
      size: 1,
    });

    const gearStand = new Stand({
      gltfLoader,
      scene,
      modelSrc: "/models/gears.glb",
      position: { x: meSpot.mesh.position.x + 9, y: -4, z: meSpot.mesh.position.z - 8 },
      name: "gear",
    });

    const boardSpot = new SpotMesh({
      name: "gearSpotMesh",
      scene,
      position: { x: 6, z: 3 },
    });

    const boardText = new TextMesh({
      text: "It's Me !",
      position: { x: meSpot.mesh.position.x, z: meSpot.mesh.position.z },
      scene,
      size: 1,
    });

    const boardStand = new Stand({
      gltfLoader,
      scene,
      modelSrc: "/models/bulletin_board.glb",
      position: { x: meSpot.mesh.position.x + 9, y: -4, z: meSpot.mesh.position.z - 2 },
      name: "board",
    });

    // const workExperienceText = new TextMesh({
    //   text: "Work Experience",
    //   position: { x: houseSpot.mesh.position.x, z: houseSpot.mesh.position.x },
    //   scene,
    //   size: 1,
    // });

    const player = new Player({
      scene,
      meshes,
      gltfLoader,
      modelSrc: "/models/BearMe.glb",
    });

    return {
      floorMesh,
      pointerMesh,
      introSpot,
      introText,
      introStand,
      meSpot,
      meText,
      meStand,
      gearSpot,
      gearText,
      gearStand,
      boardSpot,
      boardText,
      boardStand,
      player,
      meshes,
    };
  }
  public MeshShowHide({ mesh, spotMesh, player, camera, meshShowPositionY, spotEvent, spotNum }: MeshInOutprops) {
    if (mesh.mesh) {
      if (
        Math.abs(spotMesh.position.x - player.mesh.position.x) < 1.5 &&
        Math.abs(spotMesh.position.z - player.mesh.position.z) < 1.5
      ) {
        if (!mesh.visible) {
          console.log("나와");
          mesh.visible = true;
          spotMesh.material.color.set("seagreen");
          gsap.to(mesh.mesh.position, {
            duration: 1,
            y: meshShowPositionY,
            ease: "Bounce.easeOut",
          });
          gsap.to(camera.position, {
            duration: 1,
            y: 3,
          });
          spotEvent(spotNum);
        }
      } else if (mesh.visible) {
        console.log("들어가");
        mesh.visible = false;
        spotMesh.material.color.set("yellow");
        gsap.to(mesh.mesh.position, {
          duration: 0.5,
          y: mesh.y,
        });
        gsap.to(camera.position, {
          duration: 1,
          y: 5,
        });
        spotEvent(0);
      }
    }
  }
}

export default Methods;
