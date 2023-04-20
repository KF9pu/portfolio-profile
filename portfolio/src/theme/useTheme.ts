import { useEffect, useState } from "react";
import { getColorCodesByTheme } from "./modules";
import { IReturnThemeColors, ThemeCodeType } from "./interfaces";
import { defaultThemeColors } from "./constant";
import { useRecoilState, useRecoilValue } from "recoil";
import { _ThemeCode } from "@/store/default";

const useTheme = (): IReturnThemeColors => {
  const [ReturnThemeColors, setReturnThemeColors] = useState<IReturnThemeColors>(defaultThemeColors);
  const ThemeCode = useRecoilValue(_ThemeCode);

  useEffect(() => {
    setReturnThemeColors(getColorCodesByTheme(ThemeCode));
  }, [ThemeCode]);
  return { ...ReturnThemeColors };
};

export default useTheme;
