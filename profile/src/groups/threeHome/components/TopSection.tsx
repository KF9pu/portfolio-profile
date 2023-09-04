import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import { _historyIsOpen, _sectionIsOpen, _sectionNum, _selfIntroductionIsOpen } from "@/store/default";
import { useEffect, type FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PageByNumber from "./PageByNumber";
import MyPageIntroduction from "./MyPageIntroduction";
import MyPageHistory from "./MyPageHistory";

interface TopSectionProps {}

const TopSection: FC<TopSectionProps> = ({}) => {
  const pageNum = useRecoilValue(_sectionNum);
  const [isOpen, SetIsOpen] = useRecoilState(_sectionIsOpen);
  const historyIsOpen = useRecoilValue(_historyIsOpen);
  const selfIntroductionIsOpen = useRecoilValue(_selfIntroductionIsOpen);
  const { ThemeCode } = useTheme();

  useEffect(() => {
    console.log("historyIsOpen : ", historyIsOpen);
  }, [historyIsOpen]);

  useEffect(() => {
    console.log("selfIntroductionIsOpen : ", selfIntroductionIsOpen);
  }, [selfIntroductionIsOpen]);

  return (
    <div className={cls("relative", "font-DNF", "select-none", `theme-${ThemeCode}`)}>
      <button
        className={cls(
          pageNum === 0 ? "translate-x-[calc(100%+20px)]" : "translate-x-[-5vw] md:translate-x-0",
          "fixed right-0 top-[65px] md:right-[20px] z-[100]",
          "w-[90vw] md:w-[30vw] md:min-w-[320px] md:max-w-[420px]",
          "border border-primary rounded-xl",
          "bg-secondary hover:bg-tertiary",
          "text-quaternary hover:text-primary",
          "py-[10px]",
          "select-none",
          "transition-all duration-500"
        )}
        onClick={() => {
          SetIsOpen(prev => !prev);
        }}
      >
        {isOpen ? "닫기" : "열기"}
      </button>
      <PageByNumber />
      {historyIsOpen ? <MyPageHistory /> : null}
      {selfIntroductionIsOpen ? <MyPageIntroduction /> : null}
    </div>
  );
};
export default TopSection;
