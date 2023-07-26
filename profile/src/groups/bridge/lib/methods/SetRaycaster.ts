import { Raycaster, Vector2 } from "three";
import { cm1, cm2 } from "../common";
import { ISetRaycasterResult } from "../../interface";

const SetRaycaster = (): ISetRaycasterResult => {
  console.log("*** SetRaycaster Start");
  const raycaster = new Raycaster();
  const mouse = new Vector2();

  return { mouse, raycaster };
};

export default SetRaycaster;
