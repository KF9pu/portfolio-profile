import { FC, useEffect } from "react";
import Title from "./scrollcanvas/Title";
import { cls } from "@/libs/common";

interface ScrollCanvasProps {}

const ScrollCanvas: FC<ScrollCanvasProps> = ({}) => {
  useEffect(() => {}, []);
  return (
    <>
      <canvas id="three-canvas" className={cls("fixed", "w-screen h-screen")}></canvas>
      <div className={cls("relative")}>
        <Title>01</Title>
        <Title>02</Title>
        <Title>03</Title>
        <Title>04</Title>
        <Title>05</Title>
      </div>
    </>
  );
};
export default ScrollCanvas;
