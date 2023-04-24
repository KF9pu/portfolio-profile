import {
  themeBgActiveColorMap,
  themeBgColorMap,
  themeBgHoverColorMap,
  themeBorderColorMap,
  themeTextColorMap,
} from "../constant";
import themeBorderActiveColorMap from "../constant/themeBorderActiveColorMap";
import themeBorderHoverColorMap from "../constant/themeBorderHoverColorMap";
import themeShadowActiveColorMap from "../constant/themeShadowActiveColorMap";
import themeShadowColorMap from "../constant/themeShadowColorMap";
import themeShadowHoverColorMap from "../constant/themeShadowHoverColorMap";
import themeTextActiveColorMap from "../constant/themeTextActiveColorMap";
import themeTextHoverColorMap from "../constant/themeTextHoverColorMap";
import { ColorType, ThemeCodeKeys, ThemeCodeType } from "../interfaces";

export const bgColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBgColorMap };
  return themeColorMap[ThemeCode];
};
export const bgHoverColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBgHoverColorMap };
  return themeColorMap[ThemeCode];
};
export const bgActiveColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBgActiveColorMap };
  return themeColorMap[ThemeCode];
};
export const textColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeTextColorMap };
  return themeColorMap[ThemeCode];
};
export const textHoverColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeTextHoverColorMap };
  return themeColorMap[ThemeCode];
};
export const textActiveColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeTextActiveColorMap };
  return themeColorMap[ThemeCode];
};
export const borderColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBorderColorMap };
  return themeColorMap[ThemeCode];
};
export const borderHoverColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBorderHoverColorMap };
  return themeColorMap[ThemeCode];
};
export const borderActiveColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeBorderActiveColorMap };
  return themeColorMap[ThemeCode];
};
export const shadowColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeShadowColorMap };
  return themeColorMap[ThemeCode];
};
export const shadowHoverColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeShadowHoverColorMap };
  return themeColorMap[ThemeCode];
};
export const shadowActiveColorHandler = (ThemeCode: typeof ThemeCodeKeys[number]): ColorType => {
  const themeColorMap: ThemeCodeType = { ...themeShadowActiveColorMap };
  return themeColorMap[ThemeCode];
};
