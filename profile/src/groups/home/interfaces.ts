import { Scene, TextureLoader } from "three";
import { ThemeCodeType } from "../theme/Interfaces";

export interface MainProps {
  canvas: HTMLCanvasElement | null;
  ThemeCode: ThemeCodeType;
}
