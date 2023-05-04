import { cls } from "@/libs/common";
import { FC } from "react";
import { ThemeCodeKeys, ThemeCodeType } from "../interfaces";
import { useRecoilState, useSetRecoilState } from "recoil";
import { _ThemeCode } from "@/store/default";
import useTheme from "../hooks/useTheme";

interface SetColorButtonProps {
  ThemeCode: (typeof ThemeCodeKeys)[number];
  children: React.ReactNode;
}
const SetColorButton: FC<SetColorButtonProps> = ({ ThemeCode, children }) => {
  const [themeCode, setThemeCode] = useRecoilState<(typeof ThemeCodeKeys)[number]>(_ThemeCode);

  const { bg, text, border, shadow } = useTheme();

  return (
    <button
      className={cls(
        "w-[80%]",
        "rounded-lg",
        "py-[10px]",
        "select-none",
        "border",
        bg.secondary,
        text.hover.primary,
        themeCode === ThemeCode
          ? cls(border.primary, text.primary)
          : cls("border-transparent", bg.hover.quinary, bg.active.quaternary)
      )}
      onClick={() => setThemeCode(ThemeCode)}
      disabled={themeCode === ThemeCode}
    >
      {children}
    </button>
  );
};
export default SetColorButton;
