import { cls } from "@/libs/common";
import { FC } from "react";
import { ThemeCodeKeys, ThemeCodeType } from "./interfaces";
import { useRecoilState, useSetRecoilState } from "recoil";
import { _ThemeCode } from "@/store/default";
import useTheme from "./useTheme";

interface SetColorButtonProps {
  ThemeCode: typeof ThemeCodeKeys[number];
  children: React.ReactNode;
}
const SetColorButton: FC<SetColorButtonProps> = ({ ThemeCode, children }) => {
  const [themeCode, setThemeCode] = useRecoilState<typeof ThemeCodeKeys[number]>(_ThemeCode);

  const {
    default: { bg, text, border, shadow },
    hover: { bgHover, textHover, borderHover, shadowHover },
    active: { bgActive, borderActive, shadowctive, textActive },
  } = useTheme();

  return (
    <button
      className={cls(
        "min-w-[200px]",
        "rounded-lg",
        "py-[10px]",
        `${bg.secondary} ${bgHover.quinary} ${bgActive.primary}`,
        `${text.quinary} ${textHover.primary}`,
        `shadow-lg ${shadow.tertiary} ${shadowHover.quaternary}`,
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
