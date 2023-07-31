import { cls } from "@/libs/common";
import { _sidevarTabStatus } from "@/store/default";
import useTheme from "@/groups/theme/useTheme";
import type { FC } from "react";
import { useRecoilValue } from "recoil";

interface MoveBoxInTabProps {}

const MoveBoxInTab: FC<MoveBoxInTabProps> = ({}) => {
  const tabStatus = useRecoilValue(_sidevarTabStatus);
  const { ThemeCode } = useTheme();
  return (
    <div
      className={cls(
        "transition-all duration-300",
        "absolute top-0",
        "w-[calc(50%-4px)] h-[calc(100%-4px)]",
        "rounded-md",
        "m-[4px]",
        "z-[3]",
        // "opacity-50",
        "bg-secondary",
        `theme-${ThemeCode}`,
        tabStatus === 0 ? "left-[0%]" : "left-[calc(50%-4px)]"
      )}
    />
  );
};
export default MoveBoxInTab;
