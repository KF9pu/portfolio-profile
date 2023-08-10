import { Mesh, Object3D, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface StandProps {
  position: { x: number; y: number; z: number };
  gltfLoader: GLTFLoader;
  scene: Scene;
  modelSrc: string;
  name: string;
}

export class Stand {
  x: number;
  y: number;
  z: number;
  visible: boolean;
  modelMesh?: Object3D<THREE.Event>;

  constructor({ name, scene, gltfLoader, modelSrc, position: { x, y, z } }: StandProps) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.visible = false;

    gltfLoader.load(modelSrc, glb => {
      this.modelMesh = glb.scene.children[0];

      // glb 모델 그림자 설정
      glb.scene.traverse(child => {
        if (child instanceof Mesh) {
          child.castShadow = true;
        }
      });
      this.modelMesh.position.set(this.x, this.y, this.z);
      this.modelMesh.name = name;
      if (name === "Me") this.modelMesh.scale.set(2, 2, 2);
      scene.add(this.modelMesh);
    });
  }
}
