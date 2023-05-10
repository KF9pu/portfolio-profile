import { ThemeCodeType, ColorCodeType, LightOrDarkType } from "@/theme/interfaces";
import { atom } from "recoil";

export const _ThemeCode = atom<ThemeCodeType>({
  key: `ThemeCode${Math.random()}`,
  default: "default",
});

export const _isDropDown = atom<boolean>({
  key: `isDropDown${Math.random()}`,
  default: false,
});

export const _sidevarTabStatus = atom<number>({
  key: `sidevarTabStatus${Math.random()}`,
  default: 0,
});
