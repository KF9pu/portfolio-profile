import { AnimationAction, AnimationMixer, Mesh, Object3D, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface PlayerProps {
  scene: Scene;
  meshes: Mesh[];
  gltfLoader: GLTFLoader;
  modelSrc: string;
}

export class Player {
  moving: boolean;
  modelMesh?: any;
  actions?: AnimationAction[];
  mixer?: AnimationMixer;
  constructor(info: PlayerProps) {
    this.moving = false;

    info.gltfLoader.load(info.modelSrc, glb => {
      glb.scene.traverse(child => {
        if (child instanceof Mesh) {
          child.castShadow = true;
        }
      });

      this.modelMesh = glb.scene.children[0];
      this.modelMesh.position.y = 0.1;
      this.modelMesh.name = "BearMe";
      info.scene.add(this.modelMesh);
      info.meshes.push(this.modelMesh);

      this.actions = [];

      this.mixer = new AnimationMixer(this.modelMesh);
      this.actions[0] = this.mixer.clipAction(glb.animations[0]);
      this.actions[1] = this.mixer.clipAction(glb.animations[1]);
      this.actions[0].play();
    });
  }
}