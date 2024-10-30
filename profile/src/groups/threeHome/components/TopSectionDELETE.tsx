import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import {
  _careerIsOpen,
  _historyIsOpen,
  _isDropDown,
  _sectionIsOpen,
  _sectionNum,
  _selfIntroductionIsOpen,
} from "@/store/default";
import { useEffect, type FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import MyPageIntroduction from "./MyPageIntroduction";
import MyPageHistory from "./MyPageHistory";
import MyPageCarrer from "./MyPageCarrer";
import PageByNumberDELETE from "./PageByNumberDELETE";
import { useRouter } from "next/router";

interface TopSectionDELETEProps {}

const TopSectionDELETE: FC<TopSectionDELETEProps> = ({}) => {
  const pageNum = useRecoilValue(_sectionNum);
  const router = useRouter();
  const { ThemeCode } = useTheme();
  const [isOpen, SetIsOpen] = useRecoilState(_sectionIsOpen);
  const historyIsOpen = useRecoilValue(_historyIsOpen);
  const selfIntroductionIsOpen = useRecoilValue(_selfIntroductionIsOpen);
  const careerIsOpen = useRecoilValue(_careerIsOpen);
  const [IsDropDown, setIsDropDown] = useRecoilState(_isDropDown);

  useEffect(() => {
    console.log("historyIsOpen : ", historyIsOpen);
  }, [historyIsOpen]);

  useEffect(() => {
    console.log("selfIntroductionIsOpen : ", selfIntroductionIsOpen);
  }, [selfIntroductionIsOpen]);

  return (
    <div
      className={cls(
        "relative",
        "font-DNF",
        "select-none",
        `theme-${ThemeCode}`
      )}
    >
      <button
        className={cls(
          pageNum === 0
            ? "translate-x-[calc(100%+20px)]"
            : !IsDropDown
            ? "translate-x-[-5vw] md:translate-x-0"
            : "translate-x-[calc(100%+20px)]",
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
          if (pageNum === 5) {
            window.open("https://oceanshalo.com/", "_blank");
          } else {
            SetIsOpen((prev) => !prev);
            setIsDropDown((prev) => !prev);
          }
        }}
      >
        {isOpen ? "Close" : pageNum === 5 ? "Go to Homepage !" : "Open"}
      </button>
      <PageByNumberDELETE />
      {historyIsOpen ? <MyPageHistory /> : null}
      {selfIntroductionIsOpen ? <MyPageIntroduction /> : null}
      {careerIsOpen ? <MyPageCarrer /> : null}
    </div>
  );
};
export default TopSectionDELETE;
