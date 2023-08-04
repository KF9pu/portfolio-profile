import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import { cls } from "@/libs/common";
import Layout from "@/groups/layout";
import { useEffect, useRef } from "react";
import Main from "@/groups/home/Main";
import MainCanvas from "@/groups/common/MainCanvas";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    new Main({ canvas: canvasRef.current, ThemeCode });
  }, []);
  return (
    <Layout title="Home" hasHeader>
      {/* <main
        className={cls(
          "flex flex-col items-center justify-center gap-10",
          "w-screen h-screen",
          "transition-all",
          "bg-primary",
          `theme-${ThemeCode}`
        )}
      >
        <h1 className={cls("")}>Choose Theme Color</h1>
      </main> */}
      <MainCanvas canvasRef={canvasRef} />
    </Layout>
  );
}
