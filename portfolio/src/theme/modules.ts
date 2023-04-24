import {
  bgActiveColorHandler,
  bgColorHandler,
  bgHoverColorHandler,
  borderActiveColorHandler,
  borderColorHandler,
  borderHoverColorHandler,
  shadowActiveColorHandler,
  shadowColorHandler,
  shadowHoverColorHandler,
  textActiveColorHandler,
  textColorHandler,
  textHoverColorHandler,
} from "./colorHandlers/ColorHandler";
import defaultThemeColors from "./constant/defaultThemeColors";
import { IReturnThemeColors, ThemeCodeKeys } from "./interfaces";

export const getColorCodesByTheme = (ThemeCode: typeof ThemeCodeKeys[number]): IReturnThemeColors => {
  const ReturnThemeColors: IReturnThemeColors = defaultThemeColors;
  ReturnThemeColors.default.bg = bgColorHandler(ThemeCode);
  ReturnThemeColors.default.border = borderColorHandler(ThemeCode);
  ReturnThemeColors.default.text = textColorHandler(ThemeCode);
  ReturnThemeColors.default.shadow = shadowColorHandler(ThemeCode);

  ReturnThemeColors.hover.bg = bgHoverColorHandler(ThemeCode);
  ReturnThemeColors.hover.text = textHoverColorHandler(ThemeCode);
  ReturnThemeColors.hover.border = borderHoverColorHandler(ThemeCode);
  ReturnThemeColors.hover.shadow = shadowHoverColorHandler(ThemeCode);

  ReturnThemeColors.active.bg = bgActiveColorHandler(ThemeCode);
  ReturnThemeColors.active.text = textActiveColorHandler(ThemeCode);
  ReturnThemeColors.active.border = borderActiveColorHandler(ThemeCode);
  ReturnThemeColors.active.shadow = shadowActiveColorHandler(ThemeCode);
  return {
    ...ReturnThemeColors,
  };
};
