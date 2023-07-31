import { cls } from "@/libs/common";
import { FC } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { _ThemeCode, _isDropDown } from "@/store/default";
import useDropDownCloseByOutSide from "./hooks/useDropDownCloseByOutSide";
import MenuIcon from "./components/MenuIcon";
import DropBox from "./components/DropBox";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { outside } = useDropDownCloseByOutSide();

  const ThemeCode = useRecoilState(_ThemeCode);
  return (
    <nav className={cls("z-[20]", "fixed left-0 top-0", "flex justify-end items-center", "w-full", "select-none")}>
      <div
        ref={outside}
        className={cls("relative", "flex flex-col justify-center items-center", "h-full", "p-[20px]", "cursor-pointer")}
      >
        <MenuIcon />
        <DropBox />
      </div>
    </nav>
  );
};
export default Header;
