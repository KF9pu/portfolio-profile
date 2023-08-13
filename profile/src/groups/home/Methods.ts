import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { Player } from "../threeHome/meshes/Player";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ThemeCodeType } from "../theme/Interfaces";
import { ColorKeys, Colors, IColor, colorEnum } from "../threeHome/constants";
class Methods {
  scene: Scene = new Scene();
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  ambientLight: AmbientLight;
  orbitControls: OrbitControls;
  // dragControls: DragControls;
  BearMe: Player;
  meshes: Mesh<any, any>[];

  constructor(canvas: HTMLCanvasElement, ThemeCode: ThemeCodeType) {
    this.renderer = this.SetRenderer(canvas);
    this.camera = this.SetCamera();
    this.ambientLight = this.SetLight();
    this.orbitControls = this.SetOrbitControls();

    const { BearMe, meshes } = this.CreateMeshes(ThemeCode);
    this.BearMe = BearMe;

    this.meshes = meshes;
    // this.dragControls = this.SetDragControls();
  }

  private SetRenderer(canvas: HTMLCanvasElement) {
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio > 1 ? 2 : 1);
    // renderer shadow set
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    return renderer;
  }
  private SetCamera() {
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 4);
    this.scene.add(camera);
    return camera;
  }
  private SetLight() {
    const ambientLight = new AmbientLight(0x404040, 0.8); // soft white light
    this.scene.add(ambientLight);

    const directionalLight = new DirectionalLight("white", 1);
    directionalLight.position.x = 1;
    directionalLight.position.z = 2;
    this.scene.add(directionalLight);

    return ambientLight;
  }
  private SetOrbitControls() {
    const orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.update();
    return orbitControls;
  }

  // private SetDragControls() {
  //   const dragControls = new DragControls(this.meshes, this.camera, this.renderer.domElement);
  //   return dragControls;
  // }

  private CreateMeshes(ThemeCode: ThemeCodeType) {
    const colors = Colors[colorEnum[ThemeCode]];
    const colorKeys = Object.keys(colors);

    const gltfLoader = new GLTFLoader();
    // Mesh
    const geometry = new SphereGeometry(0.02, 64, 32);
    const meshes = [];
    let mesh;
    let material;
    for (let i = 0; i < 1000; i++) {
      material = new MeshStandardMaterial({
        color: colors[colorKeys[Math.floor(Math.random() * 4)] as (typeof ColorKeys)[number]],
      });
      mesh = new Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 30;
      mesh.position.y = (Math.random() - 0.3) * 30;
      mesh.position.z = (Math.random() - 0.5) * 30;
      mesh.name = `box-${i}`;
      this.scene.add(mesh);

      meshes.push(mesh);
    }

    const BearMe = new Player({
      scene: this.scene,
      gltfLoader,
      modelSrc: "/models/BearMe.glb",
    });

    return { BearMe, meshes };
  }
}

export default Methods;
