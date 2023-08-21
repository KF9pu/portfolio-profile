import { IPosition } from "@/common/constants";
import { Mesh, Object3D, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface StandProps {
  position: IPosition;
  gltfLoader: GLTFLoader;
  scene: Scene;
  modelSrc: string;
  name: string;
}

export class Stand {
  x: number;
  y?: number;
  z: number;
  visible: boolean;
  mesh?: Object3D<THREE.Event>;

  constructor({ name, scene, gltfLoader, modelSrc, position: { x, y, z } }: StandProps) {
    console.log("*** stand start :", name);
    this.x = x;
    this.y = y;
    this.z = z;

    this.visible = false;

    gltfLoader.load(modelSrc, glb => {
      glb.scene.traverse(child => {
        if (child instanceof Mesh) {
          child.castShadow = true; // glb 모델 그림자 설정
        }
      });
      this.mesh = glb.scene.children[0];
      if (this.y !== undefined) this.mesh.position.set(this.x, this.y, this.z);
      this.mesh.name = name;
      if (name === "Me") this.mesh.scale.set(2, 2, 2);
      if (name === "Board") this.mesh.scale.set(0.7, 0.7, 0.7);
      if (name === "Skill") this.mesh.scale.set(6, 6, 6);

      scene.add(this.mesh);
    });
  }
}
