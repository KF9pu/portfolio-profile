import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { IControlsSet } from "../../interface";

const SetControls = ({ camera, renderer }: IControlsSet): OrbitControls => {
  console.log("*** SetControls Start");
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  return controls;
};

export default SetControls;
