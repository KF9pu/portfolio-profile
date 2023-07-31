import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { _ThemeCode } from "@/store/default";
import { ColorCodeType, LightOrDarkType, ThemeCodeType } from "./Interfaces";
import getThemeCode from "./getThemeCode";

const useTheme = (colorCode?: ColorCodeType) => {
  const [ThemeCode, setThemeCode] = useRecoilState<ThemeCodeType>(_ThemeCode);
  const [LightOrDark, setLightOrDark] = useState<LightOrDarkType>("light");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) setLightOrDark("dark");
  }, []);

  return {
    ThemeCode,
    LightOrDark,
    setThemeCode: () => {
      if (!colorCode) return;
      setThemeCode(getThemeCode(colorCode, LightOrDark));
    },
  };
};

export default useTheme;
