import { Object3D, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface HouseProps {
  x: number;
  y: number;
  z: number;
  gltfLoader: GLTFLoader;
  scene: Scene;
  modelSrc: string;
}

export class House {
  x: number;
  y: number;
  z: number;
  visible: boolean;
  modelMesh?: Object3D<THREE.Event>;
  constructor(info: HouseProps) {
    this.x = info.x;
    this.y = info.y;
    this.z = info.z;

    this.visible = false;

    info.gltfLoader.load(info.modelSrc, glb => {
      this.modelMesh = glb.scene.children[0];
      this.modelMesh.castShadow = true;
      this.modelMesh.position.set(this.x, this.y, this.z);
      info.scene.add(this.modelMesh);
    });
  }
}
