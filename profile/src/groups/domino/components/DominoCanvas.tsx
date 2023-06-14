import { cls } from "@/libs/common";
import ThreeDomino from "@/groups/domino/lib";
import { FC, useEffect } from "react";

interface DominoCanvasProps {}

const DominoCanvas: FC<DominoCanvasProps> = ({}) => {
  useEffect(() => {
    ThreeDomino();
  }, []);
  return <canvas id="three-canvas" className={cls("fixed", "w-screen h-screen")}></canvas>;
};
export default DominoCanvas;
