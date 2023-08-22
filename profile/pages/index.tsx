import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode, _sectionIsOpen, _sectionNum } from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef } from "react";
import Main from "@/groups/home/Main";
import BottomSection from "@/groups/home/components/BottomSection";
import MainCanvas from "@/common/componenets/MainCanvas";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setPageNum = useSetRecoilState(_sectionNum);
  const SetIsOpen = useSetRecoilState(_sectionIsOpen);

  useEffect(() => {
    new Main({ canvas: canvasRef.current, ThemeCode });
  }, [ThemeCode]);

  useEffect(() => {
    setPageNum(0);
    SetIsOpen(false);
  }, []);

  return (
    <Layout title="Home" hasHeader>
      <MainCanvas canvasRef={canvasRef} />
      <BottomSection />
    </Layout>
  );
}
