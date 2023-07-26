import MainCanvas from "@/components/three/MainCanvas";
import { Main } from "@/groups/bridge/lib/main";
import { cls } from "@/libs/common";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

const Bridge: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      new Main({ canvas: canvasRef.current });
    };
  }, []);
  return <MainCanvas canvasRef={canvasRef} />;
};

export default Bridge;
