import ColorChangeButtonLlist from "@/groups/home/ColorChangeButtonLlist";
import { cls } from "@/libs/common";
import { _isDropDown, _sidevarTabStatus } from "@/store/default";
import useTheme from "@/theme/hooks/useTheme";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Tab from "./Tab";
import OtherPageList from "./OtherPageList";
import MoveBoxInTab from "./MoveBoxInTab";

interface DropBoxProps {}

const DropBox: FC<DropBoxProps> = ({}) => {
  const { bg } = useTheme();
  const [isDropDownDelay, setIsDropDownDelay] = useState(false);
  const tabStatus = useRecoilValue(_sidevarTabStatus);
  const isDropDown = useRecoilValue(_isDropDown);

  useEffect(() => {
    if (isDropDown)
      setTimeout(() => {
        setIsDropDownDelay(true);
      }, 200);
  }, [isDropDown]);

  return (
    <div
      className={cls(
        "flex",
        "absolute top-full right-0",
        "flex-col items-center justify-center",
        "w-[300px] h-0",
        "py-[8px] px-[8px]",
        "transition-all",
        "cursor-default",
        "rounded-md",
        bg.tertiary,
        isDropDown ? "animate-open" : ""
      )}
      onClick={e => e.stopPropagation()}
    >
      {isDropDownDelay ? (
        <div className={cls("flex flex-col", "w-full h-full", "animate-fadeIn")}>
          <div className={cls("w-full", "flex flex-col gap-20 justify-start items-start")}>
            <div className={cls("flex justify-between items-center", "relative", "w-full")}>
              <Tab propsTabStatus={0}>Theme</Tab>
              <Tab propsTabStatus={1}>Other Pages</Tab>
              <MoveBoxInTab />
            </div>
          </div>
          <div
            className={cls(
              "h-full",
              "flex flex-col gap-2 items-center justify-center",
              "border border-t-0 rounded-b-md",
              "py-[8px]"
            )}
          >
            {tabStatus === 0 ? <ColorChangeButtonLlist /> : null}
            {tabStatus === 1 ? <OtherPageList /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default DropBox;
