import {
  bgColorHandler,
  borderColorHandler,
  shadowColorHandler,
  textColorHandler,
} from "../colorHandlers/ColorHandler";
import defaultThemeColors from "../constant/defaultThemeColors";
import { IReturnThemeColors, ThemeCodeKeys } from "../interfaces";

const getColorCodesByTheme = (ThemeCode: (typeof ThemeCodeKeys)[number]): IReturnThemeColors => {
  const ReturnThemeColors: IReturnThemeColors = defaultThemeColors;
  ReturnThemeColors.bg = bgColorHandler(ThemeCode);
  ReturnThemeColors.border = borderColorHandler(ThemeCode);
  ReturnThemeColors.text = textColorHandler(ThemeCode);
  ReturnThemeColors.shadow = shadowColorHandler(ThemeCode);
  return {
    ...ReturnThemeColors,
  };
};

export default getColorCodesByTheme;
