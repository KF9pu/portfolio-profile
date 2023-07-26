import { Material, World } from "cannon-es";
import { AnimationMixer, PerspectiveCamera, Raycaster, Scene, Vector2, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SideLight } from "./class/SideLight";
export type soundsType = { normal: HTMLAudioElement; strong: HTMLAudioElement };
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
  sounds?: soundsType;
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

export interface IBridgeMain {
  canvas: HTMLCanvasElement | null;
}
export interface ISetCameraResult {
  camera: PerspectiveCamera;
  camera2: PerspectiveCamera;
}

export interface IControlsSet {
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
}
export interface ISetStructures {
  glassUnitSize: number;
  numberOfGlass: number;
}
export interface ISetStructuresResult {
  objects: any[];
  glassZ: number[];
  sideLights: SideLight[];
}

export interface ISetRaycasterResult {
  mouse: Vector2;
  raycaster: Raycaster;
}
