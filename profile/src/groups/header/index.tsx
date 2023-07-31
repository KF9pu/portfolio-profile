import { cls } from "@/libs/common";
import useTheme from "@/groups/theme/useTheme";
import { FC, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { _ThemeCode, _isDropDown } from "@/store/default";
import MenuIcon from "./components/MenuIcon";
import DropBox from "./components/DropBox";
import useDropDownCloseByOutSide from "./hooks/useDropDownCloseByOutSide";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isDropDown, setIsDropDown] = useRecoilState(_isDropDown);
  const { outside } = useDropDownCloseByOutSide();
  const ThemeCode = useRecoilState(_ThemeCode);
  return (
    <nav className={cls("z-[20]", "fixed left-0 top-0", "flex justify-end items-center", "w-full", "select-none")}>
      <div
        ref={outside}
        className={cls("relative", "flex flex-col justify-center items-center", "h-full", "p-[20px]", "cursor-pointer")}
        onClick={() => setIsDropDown(prev => !prev)}
      >
        <MenuIcon />
        {isDropDown ? <DropBox /> : null}
      </div>
    </nav>
  );
};
export default Header;
