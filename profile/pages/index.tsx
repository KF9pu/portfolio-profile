import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef, useState } from "react";
import Main from "@/groups/home/Main";
import MainCanvas from "@/groups/common/MainCanvas";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    new Main({ canvas: canvasRef.current, ThemeCode, setPageNum });
  }, []);

  useEffect(() => {
    console.log("pageNum : ", pageNum);
  }, [pageNum]);
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
