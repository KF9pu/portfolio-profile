import { ThemeCodeType } from "../theme/Interfaces";
import { Dispatch, SetStateAction } from "react";

export interface MainProps {
  canvas: HTMLCanvasElement | null;
  ThemeCode: ThemeCodeType;
  setPageNum: Dispatch<SetStateAction<number>>;
}
