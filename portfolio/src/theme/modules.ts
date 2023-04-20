import { defaultThemeColors } from "./constant";
import { IReturnThemeColors, ThemeCodeType } from "./interfaces";

export const getColorCodesByTheme = (ThemeCode: ThemeCodeType): IReturnThemeColors => {
  // console.log("theme : ", theme);
  const ReturnThemeColors: IReturnThemeColors = defaultThemeColors;
  ReturnThemeColors.bgColor = bgColorHandler(ThemeCode);
  return {
    ...ReturnThemeColors,
  };
};

const bgColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "bg-theme-light-red-6";
    case "light-blue":
      return "bg-theme-light-blue-6";
    case "light-green":
      return "bg-theme-light-green-6";
    case "light-pink":
      return "bg-theme-light-pink-6";
    case "dark-red":
      return "bg-theme-dark-red-6";
    case "dark-green":
      return "bg-theme-dark-green-6";
    case "dark-blue":
      return "bg-theme-dark-blue-6";
    case "dark-pupple":
      return "bg-theme-dark-pupple-6";
    case "dark-gold":
      return "bg-theme-dark-gold-7";
    default:
      return "bg-theme-default-6";
  }
};
