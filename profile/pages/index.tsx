import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef, useState } from "react";
import Main from "@/groups/home/Main";
import MainCanvas from "@/groups/common/MainCanvas";
import { cls } from "@/libs/common";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    new Main({ canvas: canvasRef.current, ThemeCode, setPageNum });
  }, []);

  useEffect(() => {
    console.log("pageNum : ", pageNum);
    if (pageNum !== 0) {
    }
  }, [pageNum]);

  return (
    <Layout title="Home" hasHeader>
      <MainCanvas canvasRef={canvasRef} />
      <div
        className={cls(
          pageNum !== 0 ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown",
          "flex justify-center",
          "fixed right-0 top-[65px]",
          "w-screen h-max-[calc(100vh-195px)]",
          "border border-primary rounded-l",
          "bg-secondary",
          "text-quaternary",
          "py-[10px]",
          "select-none",
          "md:w-[50%]",
          "hover:bg-tertiary",
          `theme-${ThemeCode}`
        )}
      >
        열기
      </div>
    </Layout>
  );
}
