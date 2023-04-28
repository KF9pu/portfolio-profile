import { themeBgColorMap, themeBorderColorMap, themeShadowColorMap, themeTextColorMap } from "../constant";
import { ColorType, ThemeCodeKeys, ThemeCodeType } from "../interfaces";

export const bgColorHandler = (ThemeCode: (typeof ThemeCodeKeys)[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBgColorMap };
  return themeColorMap[ThemeCode];
};
export const textColorHandler = (ThemeCode: (typeof ThemeCodeKeys)[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeTextColorMap };
  return themeColorMap[ThemeCode];
};
export const borderColorHandler = (ThemeCode: (typeof ThemeCodeKeys)[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBorderColorMap };
  return themeColorMap[ThemeCode];
};
export const shadowColorHandler = (ThemeCode: (typeof ThemeCodeKeys)[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeShadowColorMap };
  return themeColorMap[ThemeCode];
};
