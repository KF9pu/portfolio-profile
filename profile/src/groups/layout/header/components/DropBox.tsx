import ColorChangeButtonLlist from "@/groups/layout/header/components/ColorChangeButtonLlist";
import { cls } from "@/libs/common";
import { _ThemeCode, _isDropDown, _sidevarTabStatus } from "@/store/default";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Tab from "./Tab";
import OtherPageList from "./OtherPageList";
import MoveBoxInTab from "./MoveBoxInTab";
import InnerBorder from "./InnerBorder";

interface DropBoxProps {}

const DropBox: FC<DropBoxProps> = ({}) => {
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
        "w-[calc(100vw-8px)] h-0",
        "py-[8px] px-[8px]",
        "transition-all",
        "cursor-default",
        "rounded-md",
        "mx-[4px]",
        "bg-tertiary",
        isDropDown ? "animate-open" : "",
        "md:max-w-[300px]"
      )}
      onClick={e => e.stopPropagation()}
    >
      {isDropDownDelay ? (
        <div className={cls("flex flex-col", "relative", "w-full h-full", "animate-fadeIn")}>
          <InnerBorder>
            <div
              className={cls(
                "w-full",
                "flex flex-col justify-between",
                "pb-[4px] border-b border-quaternary mb-[8px]",
                "sticky"
              )}
            >
              <div className={cls("flex justify-between items-center", "relative", "w-full")}>
                <Tab propsTabStatus={0}>Theme</Tab>
                <Tab propsTabStatus={1}>Other Pages</Tab>
                <MoveBoxInTab />
              </div>
            </div>
            <div
              className={cls(
                "h-full",
                "flex flex-col items-center justify-between gap-[4px]",
                "py-[8px]",
                "overflow-y-scroll"
              )}
            >
              {tabStatus === 0 ? <ColorChangeButtonLlist /> : null}
              {tabStatus === 1 ? <OtherPageList /> : null}
            </div>
          </InnerBorder>
        </div>
      ) : null}
    </div>
  );
};
export default DropBox;
