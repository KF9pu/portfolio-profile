import { FC, useEffect } from "react";
import Title from "./Title";
import { cls } from "@/libs/common";
import ThreeScroll from "../lib";

interface ScrollCanvasProps {}

const ScrollCanvas: FC<ScrollCanvasProps> = ({}) => {
  useEffect(() => {
    ThreeScroll();
  }, []);
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
