import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import { _sectionIsOpen, _sectionNum } from "@/store/default";
import { gsap } from "gsap";
import { useState, type FC, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface TopSectionProps {}

const TopSection: FC<TopSectionProps> = ({}) => {
  const pageNum = useRecoilValue(_sectionNum);
  const [isOpen, SetIsOpen] = useRecoilState(_sectionIsOpen);
  const { ThemeCode } = useTheme();

  useEffect(() => {
    // if (isOpen) gsap.set(".box", { height: window.innerHeight - 100, duration: 0.5 });
    // else gsap.set(".box", { height: 24, duration: 0.5 });
  }, [isOpen]);

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center",
        "w-screen md:w-[80vw] h-full",
        "relative",
        "font-DNF",
        isOpen ? "h-max-[calc(100vh-295px)]" : "overflow-hidden",
        `theme-${ThemeCode}`
      )}
    >
      <div
        className={cls(
          pageNum !== 0 ? "slide-fade-in-dropdown" : "translate-x-[100%] duration-200",
          "flex flex-col justify-center",
          "fixed right-0 top-[65px]",
          "w-screen md:w-[50vw]",
          isOpen ? "rounded-xl md:translate-x-[-10vw] md:w-[80vw]" : "",
          "border border-primary md:rounded-l-xl ",
          "bg-secondary hover:bg-tertiary",
          "cursor-pointer",
          "text-quaternary hover:text-primary",
          "py-[10px]",
          "select-none",
          "transition-all duration-500"
        )}
        onClick={() => {
          SetIsOpen(prev => !prev);
        }}
      >
        <p className="text-center">{isOpen ? "닫기" : "열기"}</p>
      </div>
      <div
        className={cls(
          "flex flex-col",
          "absolute top-0",
          "bg-tertiary",
          "w-screen md:w-[80vw] h-[calc(100vh-160px)] md:h-[calc(100vh-295px)]",
          "border border-primary rounded-xl",
          "transition-all duration-500",
          "md:translate-x-[10vw]",
          "px-[24px] py-[24px]",
          "overflow-y-scroll",
          "break-all",
          isOpen ? "translate-y-[120px] opacity-100" : "translate-y-[-1000px] opacity-0"
        )}
      >
        <p className="">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
    </div>
  );
};
export default TopSection;
