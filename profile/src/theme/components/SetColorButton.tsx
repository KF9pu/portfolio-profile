import { cls } from "@/libs/common";
import { FC } from "react";
import { ColorCodeType } from "../interfaces";
import { _ThemeCode } from "@/store/default";
import useTheme from "../hooks/useTheme";
import getThemeCode from "../modules/getThemeCode";

interface SetColorButtonProps {
  colorCode: ColorCodeType;
  children: React.ReactNode;
}
const SetColorButton: FC<SetColorButtonProps> = ({ colorCode, children }) => {
  const { ThemeCode, LightOrDark, setThemeCode } = useTheme(colorCode);

  return (
    <button
      className={cls(
        "w-[80%]",
        "rounded-lg",
        "py-[10px]",
        "select-none",
        "border",
        "bg-secondary",
        "hover:text-primary",
        getThemeCode(colorCode, LightOrDark) === ThemeCode
          ? cls("border-primary", "text-tertiary")
          : cls("border-transparent", "hover:bg-quinary", "active:bg-quaternary"),
        `theme-${ThemeCode}`
      )}
      onClick={() => setThemeCode()}
      disabled={getThemeCode(colorCode, LightOrDark) === ThemeCode}
    >
      {children}
    </button>
  );
};
export default SetColorButton;
