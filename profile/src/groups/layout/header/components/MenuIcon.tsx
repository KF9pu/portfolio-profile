import { cls } from "@/libs/common";
import { _isDropDown } from "@/store/default";
import { useEffect, type FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface MenuIconProps {}

const MenuIcon: FC<MenuIconProps> = () => {
  const setIsDropDown = useSetRecoilState(_isDropDown);

  return (
    <label
      htmlFor="checkbox"
      className={cls("flex flex-col justify-between", "w-[35px] h-[25px]", "cursor-pointer")}
      onClick={() => setIsDropDown(prev => !prev)}
    >
      <Line lineNum={1} />
      <Line lineNum={2} />
      <Line lineNum={3} />
    </label>
  );
};
export default MenuIcon;

interface LineProps {
  lineNum: number;
}

const Line: FC<LineProps> = ({ lineNum }) => {
  const isDropDown = useRecoilValue(_isDropDown);
  return (
    <span
      className={cls(
        "w-full h-[5px]",
        "bg-black",
        "rounded-[10px]",
        lineNum === 1 ? cls("origin-[10%]", isDropDown ? "rotate-45" : "") : "",
        lineNum === 2 && isDropDown ? "scale-y-0" : "",
        lineNum === 3 ? cls("origin-[10%]", isDropDown ? "-rotate-45" : "") : "",
        "transition-transform ease-in-out duration-200"
      )}
    />
  );
};
