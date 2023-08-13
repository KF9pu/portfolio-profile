import { AnimationAction, AnimationMixer, Mesh, Object3D, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface PlayerProps {
  scene: Scene;
  meshes?: Mesh[];
  gltfLoader: GLTFLoader;
  modelSrc: string;
}

export class Player {
  moving: boolean;
  mesh?: any;
  actions?: AnimationAction[];
  mixer?: AnimationMixer;

  constructor({ gltfLoader, modelSrc, scene, meshes }: PlayerProps) {
    this.moving = false;

    gltfLoader.load(modelSrc, glb => {
      glb.scene.traverse(child => {
        if (child instanceof Mesh) {
          child.castShadow = true;
        }
      });

      this.mesh = glb.scene.children[0];
      this.mesh.position.y = 0.1;
      this.mesh.name = "BearMe";
      scene.add(this.mesh);
      if (meshes) meshes.push(this.mesh);

      this.actions = [];

      this.mixer = new AnimationMixer(this.mesh);
      this.actions[0] = this.mixer.clipAction(glb.animations[0]);
      this.actions[1] = this.mixer.clipAction(glb.animations[1]);
      this.actions[0].play();
    });
  }
}
