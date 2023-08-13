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
  }, [ThemeCode]);

  useEffect(() => {
    // console.log("pageNum : ", pageNum);
    if (pageNum !== 0) {
    }
  }, [pageNum]);

  return (
    <Layout title="Home" hasHeader>
      hi
    </Layout>
  );
}
