export type ThemeCodeType =
  | ""
  | "light-red"
  | "light-blue"
  | "light-green"
  | "light-pink"
  | "dark-red"
  | "dark-blue"
  | "dark-green"
  | "dark-pupple"
  | "dark-gold";
export interface IReturnThemeColors {
  bgColor: string;
  bgHoverCColor: string;
  bgClickColor: string;
  textColor: string;
  textHoverColor: string;
  textClickColor: string;
  borderColor: string;
  borderHoverColor: string;
  borderClickColor: string;
}
