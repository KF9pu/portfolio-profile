import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import { _sectionIsOpen, _sectionNum } from "@/store/default";
import { gsap } from "gsap";
import { useState, type FC, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PageByNumber from "./PageByNumber";

interface TopSectionProps {}

const TopSection: FC<TopSectionProps> = ({}) => {
  const pageNum = useRecoilValue(_sectionNum);
  const [isOpen, SetIsOpen] = useRecoilState(_sectionIsOpen);
  const { ThemeCode } = useTheme();

  return (
    <div className={cls("relative", "font-DNF", `theme-${ThemeCode}`)}>
      <button
        className={cls(
          pageNum === 0 ? "translate-x-[100%]" : "translate-x-[-5vw] md:translate-x-0",
          "fixed right-0 top-[65px]",
          "w-[90vw] md:w-[30vw]",
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
    </div>
  );
};
export default TopSection;
