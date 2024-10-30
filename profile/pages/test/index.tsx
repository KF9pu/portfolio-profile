import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode, _sectionIsOpen, _sectionNum } from "@/store/default";
import Layout from "@/groups/layout";
import { useEffect, useRef } from "react";
import MainCanvas from "@/common/componenets/MainCanvas";
import { useSetRecoilState } from "recoil";
import MainDELETE from "@/groups/threeHome/MainDELETE";
import TopSectionDELETE from "@/groups/threeHome/components/TopSectionDELETE";

export default function Home() {
  const { ThemeCode } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const setPageNum = useSetRecoilState(_sectionNum);
  const SetIsOpen = useSetRecoilState(_sectionIsOpen);

  useEffect(() => {
    new MainDELETE({
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
    <Layout title="Home">
      <MainCanvas canvasRef={canvasRef} />
      <TopSectionDELETE />
    </Layout>
  );
}
