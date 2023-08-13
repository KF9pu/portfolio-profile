import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef, useState } from "react";
import MainCanvas from "@/groups/common/MainCanvas";
import { cls } from "@/libs/common";
import Main from "@/groups/home/Main";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    new Main({ canvas: canvasRef.current, ThemeCode });
  }, [ThemeCode]);

  return (
    <Layout title="Home" hasHeader>
      <MainCanvas canvasRef={canvasRef} />
    </Layout>
  );
}
