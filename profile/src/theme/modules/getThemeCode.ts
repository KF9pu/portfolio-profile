import { ThemeCodeType, ColorCodeType, LightOrDarkType } from "../interfaces";

const getThemeCode = (colorCode: ColorCodeType, LightOrDark: LightOrDarkType): ThemeCodeType => {
  return colorCode.includes("default")
    ? (colorCode as ThemeCodeType)
    : (`${LightOrDark}-${colorCode}` as ThemeCodeType);
};

export default getThemeCode;
