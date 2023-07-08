import { cls } from "@/libs/common";
import type { FC, RefObject } from "react";

interface MainCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
}

const MainCanvas: FC<MainCanvasProps> = ({ canvasRef }) => {
  return <canvas ref={canvasRef} className={cls("fixed", "w-screen h-screen")}></canvas>;
};
export default MainCanvas;
