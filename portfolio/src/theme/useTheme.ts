import { useEffect, useState } from "react";
import { getColorCodesByTheme } from "./modules";
import { defaultThemeColors } from "./constant";
import { useRecoilValue } from "recoil";
import { _ThemeCode } from "@/store/default";
import { IReturnThemeColors } from "./interfaces";

const useTheme = () => {
  const [ReturnThemeColors, setReturnThemeColors] = useState<IReturnThemeColors>(defaultThemeColors);
  const ThemeCode = useRecoilValue(_ThemeCode);

  useEffect(() => {
    setReturnThemeColors(getColorCodesByTheme(ThemeCode));
  }, [ThemeCode]);
  return {
    default: { ...ReturnThemeColors.default },
    hover: {
      bgHover: ReturnThemeColors.hover.bg,
      textHover: ReturnThemeColors.hover.text,
      borderHover: ReturnThemeColors.hover.border,
      shadowHover: ReturnThemeColors.hover.shadow,
    },
    active: {
      bgActive: ReturnThemeColors.active.bg,
      textActive: ReturnThemeColors.active.text,
      borderActive: ReturnThemeColors.active.border,
      shadowctive: ReturnThemeColors.active.shadow,
    },
  };
};

export default useTheme;
