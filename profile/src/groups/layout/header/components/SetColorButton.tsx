import { cls } from "@/libs/common";
import { FC } from "react";
import { _ThemeCode } from "@/store/default";
import { ColorCodeType } from "@/groups/theme/Interfaces";
import useTheme from "@/groups/theme/useTheme";
import getThemeCode from "@/groups/theme/getThemeCode";

interface SetColorButtonProps {
  colorCode: ColorCodeType;
  children: React.ReactNode;
}
const SetColorButton: FC<SetColorButtonProps> = ({ colorCode, children }) => {
  const { ThemeCode, LightOrDark, setThemeCode } = useTheme(colorCode);

  return (
    <button
      className={cls(
        "w-full",
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
