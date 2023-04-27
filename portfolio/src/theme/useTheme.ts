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
    ...ReturnThemeColors,
  };
};

export default useTheme;
