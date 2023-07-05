import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface HouseInfoProps {
  x: number;
  z: number;
  height: number;
  modelSrc: string;
  gltfLoader: GLTFLoader;
  scene: THREE.Scene;
}

export class House {
  x: number;
  z: number;
  height: number;
  mesh?: THREE.Object3D;

  constructor(info: HouseInfoProps) {
    this.x = info.x;
    this.z = info.z;

    this.height = info.height || 2;

    info.gltfLoader.load(info.modelSrc, glb => {
      this.mesh = glb.scene.children[0];
      this.mesh.castShadow = true;
      this.mesh.position.set(this.x, this.height / 2, this.z);
      info.scene.add(this.mesh);
    });
  }
}
