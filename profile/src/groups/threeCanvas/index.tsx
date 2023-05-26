import threeMain from "@/libs/three/threeMain";
import { FC, useEffect } from "react";

interface ThreeCanvasProps {}

const ThreeCanvas: FC<ThreeCanvasProps> = ({}) => {
  useEffect(() => {
    threeMain();
  }, []);
  return <canvas id="three-canvas"></canvas>;
};
export default ThreeCanvas;
