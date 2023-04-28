import { cls } from "@/libs/common";
import useTheme from "@/theme/hooks/useTheme";
import type { FC } from "react";
import { useRecoilState } from "recoil";
import { _isDropDown } from "@/store/default";
import BarsArrowDown from "./components/BarsArrowDown";
import DropBox from "./components/DropBox";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { bg, text } = useTheme();
  const [isDropDown, setIsDropDown] = useRecoilState(_isDropDown);
  return (
    <nav
      className={cls(
        "z-[20]",
        "fixed left-0 top-0",
        "flex justify-end items-center",
        "w-full",
        "select-none",
        text.quinary
      )}
    >
      <div
        className={cls("relative", "flex flex-col justify-center items-center", "h-full", "p-[20px]", "cursor-pointer")}
        onClick={() => setIsDropDown(prev => !prev)}
      >
        <BarsArrowDown />
        {isDropDown ? <DropBox /> : null}
      </div>
    </nav>
  );
};
export default Header;
