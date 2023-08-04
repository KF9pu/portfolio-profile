import { WebGLRenderer } from "three";

export const SetRenderer = (canvas: HTMLCanvasElement): WebGLRenderer => {
  console.log("*** SetRenderer Start");
  const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio > 1 ? 2 : 1);

  return renderer;
};
