import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import { _sectionNum } from "@/store/default";
import type { FC } from "react";
import { useRecoilValue } from "recoil";

interface TopSectionProps {}

const TopSection: FC<TopSectionProps> = ({}) => {
  const pageNum = useRecoilValue(_sectionNum);
  const { ThemeCode } = useTheme();

  return (
    <div
      className={cls(
        pageNum !== 0 ? "slide-fade-in-dropdown" : "translate-x-[100%] duration-200",
        "flex justify-center",
        "fixed right-0 top-[65px]",
        "w-screen h-max-[calc(100vh-195px)] md:hover:w-screen",
        "border border-primary md:rounded-l md:hover:rounded-none",
        "bg-secondary hover:bg-tertiary",
        "cursor-pointer",
        "text-quaternary hover:text-primary",
        "py-[10px]",
        "select-none",
        "w-screen md:w-[50vw]",
        "transition-all duration-500",
        `theme-${ThemeCode}`
      )}
    >
      열기
    </div>
  );
};
export default TopSection;
