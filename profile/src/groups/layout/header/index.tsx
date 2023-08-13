import { cls } from "@/common/libs";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { _ThemeCode, _isDropDown } from "@/store/default";
import MenuIcon from "./components/MenuIcon";
import DropBox from "./components/DropBox";
import useDropDownvar from "@/groups/layout/header/hooks/useDropDownvar";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const ThemeCode = useRecoilState(_ThemeCode);
  const { outside } = useDropDownvar();

  return (
    <header
      ref={outside}
      className={cls("z-[20]", "fixed left-0 top-0", "flex justify-end items-center", "w-full", "select-none")}
    >
      <div className={cls("relative", "flex flex-col justify-center items-center", "h-full", "p-[20px]")}>
        <MenuIcon />
        <DropBox />
      </div>
    </header>
  );
};
export default Header;
