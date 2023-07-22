import { Material, World } from "cannon-es";
import { AnimationMixer, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface StuffProps {
  name: string;
  x?: number;
  y?: number;
  z?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
  mass?: number;
  cannonMaterial?: any;
  type?: "strong" | "normal";
  step?: number;
}

export interface SideLightProps {
  container: any;
  name: string;
  x?: number;
  y?: number;
  z: number;
}

export interface ICm1 {
  scene: Scene;
  gltfLoader: GLTFLoader;
  mixer: AnimationMixer | undefined;
  world: World;
  defaultMaterial: Material;
  glassMaterial: Material;
  playerMaterial: Material;
}
