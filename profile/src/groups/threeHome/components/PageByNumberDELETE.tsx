import { cls } from "@/common/libs";
import { _isDropDown, _sectionIsOpen, _sectionNum } from "@/store/default";
import type { FC, HtmlHTMLAttributes } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import IntroPage from "./IntroPage";
import MePage from "./MePage";
import SkillPage from "./SkillPage";
import PreparationPage from "./PreparationPage";

interface PageByNumberDELETEProps {}

const PageByNumberDELETE: FC<PageByNumberDELETEProps> = ({}) => {
  const [isOpen, setIsOpen] = useRecoilState(_sectionIsOpen);
  const pageNum = useRecoilValue(_sectionNum);
  const [IsDropDown, setIsDropDown] = useRecoilState(_isDropDown);

  return (
    <div
      className={cls(
        "flex flex-col",
        "fixed top-0 right-0",
        "w-screen h-screen",
        "transition-all duration-500",
        "break-all"
      )}
      style={{
        clipPath: isOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)",
      }}
      onClick={() => {
        setIsOpen((prev) => !prev);
        setIsDropDown((prev) => !prev);
      }}
    >
      {pageNum === 1 ? <Test>Product Info</Test> : null}
      {pageNum === 2 ? <Test>Community</Test> : null}
      {/* TODO: {pageNum === 3 ? <BoardPage /> : null} */}
      {pageNum === 3 ? <Test>How to Cook</Test> : null}
      {pageNum === 4 ? <Test>Event</Test> : null}
      {/* TODO: {pageNum === 5 ? <AdminPage /> : null} */}
      {/* {pageNum === 5 ? <Test>55555</Test> : null} */}
    </div>
  );
};
export default PageByNumberDELETE;

const Test = ({ children, ...rest }: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cls(
        "flex justify-center items-center",
        "w-full h-full",
        "bg-tertiary",
        "px-[8px] py-[8px]",
        "transition-all",
        rest.className ?? ""
      )}
    >
      <div className={cls("w-full h-full", "border-2", "px-[8px] py-[8px]")}>
        {children}
      </div>
    </div>
  );
};
