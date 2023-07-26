import { Color } from "three";
import { cm1, cm2 } from "../common";

export const SetSceneBackgroundColor = () => {
  console.log("*** SetSceneBackgroundColor Start");
  cm1.scene.background = new Color(cm2.backgroundColor);
};
