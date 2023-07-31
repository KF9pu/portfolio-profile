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
        "absolute",
        "w-[calc(50%)] h-[calc(100%)]",
        "rounded-md",
        "bg-primary",
        `theme-${ThemeCode}`,
        tabStatus === 0 ? "left-[0%]" : "left-[calc(50%)]"
      )}
    />
  );
};
export default MoveBoxInTab;
