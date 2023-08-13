import { _isDropDown } from "@/store/default";
import type { FC, RefObject } from "react";
import { useRecoilState } from "recoil";
import { cls } from "../libs";

interface MainCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
}

const MainCanvas: FC<MainCanvasProps> = ({ canvasRef }) => {
  const [IsDropDown, setIsDropDown] = useRecoilState(_isDropDown);
  return (
    <canvas
      ref={canvasRef}
      className={cls("fixed", "w-screen h-screen", "mt-[64px]")}
      onClick={() => {
        if (IsDropDown) setIsDropDown(false);
      }}
    ></canvas>
  );
};
export default MainCanvas;
