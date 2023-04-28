export const ThemeCodeKeys = [
  "default",
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

export type ThemeCodeType = {
  [key in (typeof ThemeCodeKeys)[number]]: ColorType;
};

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

export type ColorInterfaceKeys =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary"
  | "hover"
  | "active"
  | "focus";

type ColorMap<T> = T extends "primary" | "secondary" | "tertiary" | "quaternary" | "quinary"
  ? string
  : { [key in Extract<ColorInterfaceKeys, "primary" | "secondary" | "tertiary" | "quaternary" | "quinary">]: string };

export type ColorType = { [P in ColorInterfaceKeys]: ColorMap<P> };

export interface IReturnThemeColors<T = ColorType> {
  bg: T;
  text: T;
  border: T;
  shadow: T;
}
