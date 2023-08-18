import { cls } from "@/common/libs";
import { _sectionIsOpen, _sectionNum } from "@/store/default";
import type { FC } from "react";
import { useRecoilValue } from "recoil";
import IntroPage from "./IntroPage";
import MePage from "./MePage";
import BoardPage from "./BoardPage";
import SkillPage from "./SkillPage";
import AdminPage from "./AdminPage";
import PreparationPage from "./PreparationPage";

interface PageByNumberProps {}

const PageByNumber: FC<PageByNumberProps> = ({}) => {
  const isOpen = useRecoilValue(_sectionIsOpen);
  const pageNum = useRecoilValue(_sectionNum);

  return (
    <div
      className={cls(
        "flex flex-col",
        "fixed top-0 right-0",
        "bg-tertiary",
        "w-[90vw] md:w-[30vw] h-[calc(100vh-160px)] md:h-[calc(100vh-295px)]",
        "border border-primary rounded-xl",
        "transition-all duration-500",
        "pl-[24px] py-[24px] md:px-[24px]",
        "overflow-y-scroll",
        "break-all",
        "translate-x-[-5vw] md:translate-x-0",
        isOpen ? "translate-y-[120px] opacity-100" : "translate-y-[-1000px] opacity-0"
      )}
    >
      {pageNum === 1 ? <IntroPage /> : null}
      {pageNum === 2 ? <MePage /> : null}
      {/* TODO: {pageNum === 3 ? <BoardPage /> : null} */}
      {pageNum === 3 ? <PreparationPage /> : null}
      {pageNum === 4 ? <SkillPage /> : null}
      {/* TODO: {pageNum === 5 ? <AdminPage /> : null} */}
      {pageNum === 5 ? <PreparationPage /> : null}
    </div>
  );
};
export default PageByNumber;
