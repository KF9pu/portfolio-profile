import { cls } from "@/libs/common";
import { _isDropDown } from "@/store/default";
import type { FC, RefObject } from "react";
import { useRecoilState } from "recoil";

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
