import ColorChangeButtonLlist from "@/groups/layout/header/components/ColorChangeButtonLlist";
import { cls } from "@/libs/common";
import { _ThemeCode, _isDropDown, _sidevarTabStatus } from "@/store/default";
import { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Tab from "./Tab";
import OtherPageList from "./OtherPageList";
import MoveBoxInTab from "./MoveBoxInTab";
import useTheme from "@/groups/theme/useTheme";

interface DropBoxProps {}

const DropBox: FC<DropBoxProps> = ({}) => {
  const tabStatus = useRecoilValue(_sidevarTabStatus);
  const [isDropDown, setIsDropDown] = useRecoilState(_isDropDown);
  const [repeat, setRepeat] = useState<NodeJS.Timeout>();
  const { ThemeCode } = useTheme();

  useEffect(() => {
    if (isDropDown) {
      clearTimeout(repeat);
      setIsDropDown(true);
    } else {
      if (!(isDropDown === undefined))
        setRepeat(
          setTimeout(() => {
            setIsDropDown(false);
          }, 400)
        );
    }
  }, [isDropDown]);

  return (
    <div
      className={cls(
        isDropDown ? "slide-fade-in-dropdown" : "translate-x-[100%] duration-200",
        "absolute",
        "w-[calc(100vw)] md:max-w-[300px]",
        "h-[calc(100vh-100px) md:max-h-full]",
        "cursor-default",
        "rounded-md",
        "top-full right-0",
        "transition-all",
        "bg-tertiary",
        "border border-primary",
        "divide-y divide-primary",
        "bg-primary",
        `theme-${ThemeCode}`
      )}
      onClick={e => e.stopPropagation()}
    >
      <div className={cls("w-full", "flex flex-col justify-between", "p-[4px]")}>
        <div className={cls("relative", "flex justify-between items-center", "w-full")}>
          <Tab propsTabStatus={0}>Theme</Tab>
          <Tab propsTabStatus={1}>Other Pages</Tab>
          <MoveBoxInTab />
        </div>
      </div>
      <div className={cls("w-full h-full", "flex flex-col items-center justify-between gap-[8px]", "p-[8px]")}>
        {tabStatus === 0 ? <ColorChangeButtonLlist /> : null}
        {tabStatus === 1 ? <OtherPageList /> : null}
      </div>
    </div>
  );
};
export default DropBox;
