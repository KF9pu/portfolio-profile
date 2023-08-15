import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode, _sectionIsOpen, _sectionNum } from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef } from "react";
import Main from "@/groups/threeHome/Main";
import MainCanvas from "@/common/componenets/MainCanvas";
import { useSetRecoilState } from "recoil";
import TopSection from "@/groups/threeHome/components/TopSection";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setPageNum = useSetRecoilState(_sectionNum);
  const SetIsOpen = useSetRecoilState(_sectionIsOpen);

  useEffect(() => {
    new Main({
      canvas: canvasRef.current,
      ThemeCode,
      spotEvent: {
        open: setPageNum,
        close: () => {
          setPageNum(0);
          SetIsOpen(false);
        },
      },
    });
  }, [ThemeCode]);

  return (
    <Layout title="Home" hasHeader>
      <MainCanvas canvasRef={canvasRef} />
      <TopSection />
    </Layout>
  );
}
