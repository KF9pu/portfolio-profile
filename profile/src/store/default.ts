import { ThemeCodeKeys } from "@/theme/interfaces";
import { atom } from "recoil";

export const _ThemeCode = atom<(typeof ThemeCodeKeys)[number]>({
  key: `ThemeCode${Math.random()}`, // unique ID (with respect to other atoms/selectors)
  default: "default", // default value (aka initial value)
});

export const _isDropDown = atom<boolean>({
  key: `isDropDown${Math.random()}`, // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const _sidevarTabStatus = atom<number>({
  key: `sidevarTabStatus${Math.random()}`, // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
