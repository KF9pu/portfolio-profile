export const ThemeCodeKeys = [
  "",
  "light-red",
  "light-blue",
  "light-green",
  "light-pink",
  "dark-red",
  "dark-blue",
  "dark-green",
  "dark-pupple",
  "dark-gold",
] as const;

export const colorKeys = ["primary", "secondary", "tertiary", "quaternary", "quinary"] as const;

export const ApplyColorKeys = [
  "bg",
  "text",
  "border",
  "shadow",
  "hover:bg",
  "hover:text",
  "hover:border",
  "active:bg",
  "active:text",
  "active:border",
] as const;

export type ColorType = {
  [key in typeof colorKeys[number]]: string;
};

export type ThemeCodeType<T = ColorType> = {
  [key in typeof ThemeCodeKeys[number]]: T;
};

export type ApplyColorType<T = ColorType> = {
  [key in Extract<typeof ApplyColorKeys[number], "bg" | "text" | "border" | "shadow">]: T;
};

export interface IReturnThemeColors<T = ColorType> {
  default: ApplyColorType<T>;
  hover: ApplyColorType<T>;
  active: ApplyColorType<T>;
}
