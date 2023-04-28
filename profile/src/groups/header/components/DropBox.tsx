import ColorChangeButtonLlist from "@/groups/home/ColorChangeButtonLlist";
import { cls } from "@/libs/common";
import { _isDropDown } from "@/store/default";
import SetColorButton from "@/theme/components/SetColorButton";
import useTheme from "@/theme/hooks/useTheme";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

interface DropBoxProps {}

const DropBox: FC<DropBoxProps> = ({}) => {
  const { bg } = useTheme();
  const [isDropDownDelay, setIsDropDownDelay] = useState(false);
  const isDropDown = useRecoilValue(_isDropDown);

  useEffect(() => {
    if (isDropDown)
      setTimeout(() => {
        setIsDropDownDelay(true);
      }, 100);
  }, [isDropDown]);

  return (
    <div
      className={cls(
        "flex",
        "absolute top-full right-0",
        "flex-col items-center justify-center",
        "w-[300px] h-0",
        "p-[20px]",
        "transition-all",
        "cursor-default",
        bg.tertiary,
        isDropDown ? "animate-open" : ""
      )}
      onClick={e => e.stopPropagation()}
    >
      {isDropDownDelay ? (
        <div className={cls("w-full h-full", "flex flex-col gap-20 justify-start items-start")}>
          <div className={cls("flex justify-around", "w-full")}>
            <p>Theme</p>
            <p>Other Pages</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default DropBox;
