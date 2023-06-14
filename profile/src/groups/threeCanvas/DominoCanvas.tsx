import { cls } from "@/libs/common";
import ThreeDomino from "@/libs/three/main/Domino";
import { FC, useEffect } from "react";

interface ThreeCanvasProps {}

const ThreeCanvas: FC<ThreeCanvasProps> = ({}) => {
  useEffect(() => {
    ThreeDomino();
  }, []);
  return <canvas id="three-canvas" className={cls("fixed", "w-screen h-screen")}></canvas>;
};
export default ThreeCanvas;
