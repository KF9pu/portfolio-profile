import { PerspectiveCamera } from "three";
import { cm1 } from "../common";
import { ISetCameraResult } from "../../interface";

const SetCamera = (): ISetCameraResult => {
  console.log("*** SetCamera Start");
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const camera2 = camera.clone();

  camera.position.x = -4;
  camera.position.y = 19;
  camera.position.z = 14;

  camera2.position.y = 0;
  camera2.lookAt(0, 1, 0);

  cm1.scene.add(camera, camera2);
  return { camera, camera2 };
};

export default SetCamera;
