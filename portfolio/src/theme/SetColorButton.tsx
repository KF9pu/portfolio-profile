import { cls } from "@/libs/common";
import { FC } from "react";
import { ThemeCodeType } from "./interfaces";
import { useSetRecoilState } from "recoil";
import { _ThemeCode } from "@/store/default";

interface SetColorButtonProps {
  ThemeCode: ThemeCodeType;
  children: React.ReactNode;
}
const SetColorButton: FC<SetColorButtonProps> = ({ ThemeCode, children }) => {
  const setThemeCode = useSetRecoilState(_ThemeCode);
  return (
    <button
      className={cls("min-w-[200px]", "bg-black", "rounded-lg", "py-[10px]", "text-white")}
      onClick={() => setThemeCode(ThemeCode)}
    >
      {children}
    </button>
  );
};
export default SetColorButton;
