import { defaultThemeColors } from "./constant";
import { IReturnThemeColors, ThemeCodeType } from "./interfaces";

export const getColorCodesByTheme = (ThemeCode: ThemeCodeType): IReturnThemeColors => {
  // console.log("theme : ", theme);
  const ReturnThemeColors: IReturnThemeColors = defaultThemeColors;
  ReturnThemeColors.bgColor = bgColorHandler(ThemeCode);
  ReturnThemeColors.bgHoverColor = bgHoverColorHandler(ThemeCode);
  ReturnThemeColors.bgClickColor = bgClickColorHandler(ThemeCode);
  ReturnThemeColors.textColor = textColorHandler(ThemeCode);
  ReturnThemeColors.textHoverColor = textHoverColorHandler(ThemeCode);
  ReturnThemeColors.textClickColor = textClickColorHandler(ThemeCode);
  ReturnThemeColors.borderColor = borderColorHandler(ThemeCode);
  ReturnThemeColors.borderHoverColor = borderHoverColorHandler(ThemeCode);
  ReturnThemeColors.borderClickColor = borderClickColorHandler(ThemeCode);
  return {
    ...ReturnThemeColors,
  };
};

const bgColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "bg-theme-light-red-primary";
    case "light-blue":
      return "bg-theme-light-blue-primary";
    case "light-green":
      return "bg-theme-light-green-primary";
    case "light-pink":
      return "bg-theme-light-pink-primary";
    case "dark-red":
      return "bg-theme-dark-red-primary";
    case "dark-green":
      return "bg-theme-dark-green-primary";
    case "dark-blue":
      return "bg-theme-dark-blue-primary";
    case "dark-pupple":
      return "bg-theme-dark-pupple-primary";
    case "dark-gold":
      return "bg-theme-dark-gold-primary";
    default:
      return "bg-theme-default-primary";
  }
};
const bgHoverColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "hover:bg-theme-light-red-secondary";
    case "light-blue":
      return "hover:bg-theme-light-blue-secondary";
    case "light-green":
      return "hover:bg-theme-light-green-secondary";
    case "light-pink":
      return "hover:bg-theme-light-pink-secondary";
    case "dark-red":
      return "hover:bg-theme-dark-red-secondary";
    case "dark-green":
      return "hover:bg-theme-dark-green-secondary";
    case "dark-blue":
      return "hover:bg-theme-dark-blue-secondary";
    case "dark-pupple":
      return "hover:bg-theme-dark-pupple-secondary";
    case "dark-gold":
      return "hover:bg-theme-dark-gold-secondary";
    default:
      return "hover:bg-theme-default-secondary";
  }
};
const bgClickColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "active:bg-theme-light-red-tertiary";
    case "light-blue":
      return "active:bg-theme-light-blue-tertiary";
    case "light-green":
      return "active:bg-theme-light-green-tertiary";
    case "light-pink":
      return "active:bg-theme-light-pink-tertiary";
    case "dark-red":
      return "active:bg-theme-dark-red-tertiary";
    case "dark-green":
      return "active:bg-theme-dark-green-tertiary";
    case "dark-blue":
      return "active:bg-theme-dark-blue-tertiary";
    case "dark-pupple":
      return "active:bg-theme-dark-pupple-tertiary";
    case "dark-gold":
      return "active:bg-theme-dark-gold-tertiary";
    default:
      return "active:bg-theme-default-tertiary";
  }
};
const textColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "text-[#FFFFF0]";
    case "light-blue":
      return "text-black";
    case "light-green":
      return "text-black";
    case "light-pink":
      return "text-black";
    case "dark-red":
      return "text-[#FFFFF0]";
    case "dark-green":
      return "text-[#D3D3D3]";
    case "dark-blue":
      return "text-[#FFFFF0]";
    case "dark-pupple":
      return "text-[#FFFFF0]";
    case "dark-gold":
      return "text-[#D3D3D3]";
    default:
      return "text-[#fff]";
  }
};
const textHoverColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "hover:text-black";
    case "light-blue":
      return "hover:text-black";
    case "light-green":
      return "hover:text-black";
    case "light-pink":
      return "hover:text-black";
    case "dark-red":
      return "hover:text-white";
    case "dark-green":
      return "hover:text-white";
    case "dark-blue":
      return "hover:text-white";
    case "dark-pupple":
      return "hover:text-white";
    case "dark-gold":
      return "hover:text-white";
    default:
      return "hover:text-black";
  }
};
const textClickColorHandler = (ThemeCode: ThemeCodeType) => {
  switch (ThemeCode) {
    case "light-red":
      return "active:text-black";
    case "light-blue":
      return "active:text-black";
    case "light-green":
      return "active:text-black";
    case "light-pink":
      return "active:text-black";
    case "dark-red":
      return "active:text-white";
    case "dark-green":
      return "active:text-white";
    case "dark-blue":
      return "active:text-white";
    case "dark-pupple":
      return "active:text-white";
    case "dark-gold":
      return "active:text-white";
    default:
      return "active:text-black";
  }
};
const borderColorHandler = (ThemeCode: ThemeCodeType) => {
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
const borderHoverColorHandler = (ThemeCode: ThemeCodeType) => {
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
const borderClickColorHandler = (ThemeCode: ThemeCodeType) => {
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
