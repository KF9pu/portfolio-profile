import {
  AnimationAction,
  AnimationMixer,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  Scene,
} from "three";
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
  mesh?: Object3D<THREE.Event>;

  constructor({ name, scene, gltfLoader, modelSrc, position: { x, y, z } }: StandProps) {
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
      this.mesh.position.set(this.x, this.y, this.z);
      this.mesh.name = name;
      if (name === "me") this.mesh.scale.set(2, 2, 2);
      if (name === "board") this.mesh.scale.set(0.7, 0.7, 0.7);
      if (name === "skill") this.mesh.scale.set(6, 6, 6);

      scene.add(this.mesh);
    });
  }
}
