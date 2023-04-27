import { cls } from "@/libs/common";
import { FC } from "react";
import { ThemeCodeKeys, ThemeCodeType } from "./interfaces";
import { useRecoilState, useSetRecoilState } from "recoil";
import { _ThemeCode } from "@/store/default";
import useTheme from "./useTheme";

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
        "min-w-[200px]",
        "rounded-lg",
        "py-[10px]",
        `${bg.secondary} ${bg.hover.quinary} ${bg.active.primary}`,
        `${text.quinary} ${text.hover.primary}`,
        `shadow-lg ${shadow.tertiary} ${shadow.hover.quaternary}`,
        themeCode === ThemeCode ? `border ${border.quinary}` : ""
      )}
      onClick={() => setThemeCode(ThemeCode)}
      disabled={themeCode === ThemeCode}
    >
      {children}
    </button>
  );
};
export default SetColorButton;
