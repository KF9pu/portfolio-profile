import { cls } from "@/libs/common";
import { FC } from "react";
import { ThemeCodeKeys } from "../interfaces";
import { useRecoilState } from "recoil";
import { _ThemeCode } from "@/store/default";

interface SetColorButtonProps {
  ThemeCode: (typeof ThemeCodeKeys)[number];
  children: React.ReactNode;
}
const SetColorButton: FC<SetColorButtonProps> = ({ ThemeCode, children }) => {
  const [themeCode, setThemeCode] = useRecoilState<(typeof ThemeCodeKeys)[number]>(_ThemeCode);

  return (
    <button
      className={cls(
        "min-w-[200px]",
        "rounded-lg",
        "py-[10px]",
        "select-none",
        "bg-tertiary",
        "shadow-lg shadow-tertiary",
        themeCode === ThemeCode ? "border border-quaternary" : "",
        `theme-${themeCode}`
      )}
      onClick={() => setThemeCode(ThemeCode)}
      disabled={themeCode === ThemeCode}
    >
      {children}
    </button>
  );
};
export default SetColorButton;
