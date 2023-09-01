import { ThemeCodeType, ColorCodeType, LightOrDarkType } from "@/groups/theme/Interfaces";
import { atom } from "recoil";

export const _ThemeCode = atom<ThemeCodeType>({
  key: `ThemeCode${Math.random()}`,
  default: "default",
});

export const _isDropDown = atom<boolean>({
  key: `isDropDown${Math.random()}`,
  default: undefined,
});

export const _sidevarTabStatus = atom<number>({
  key: `sidevarTabStatus${Math.random()}`,
  default: 0,
});

export const _sectionNum = atom<number>({
  key: `_sectionNum${Math.random()}`,
  default: 0,
});

export const _sectionIsOpen = atom<boolean>({
  key: `_sectionIsOpen${Math.random()}`,
  default: false,
});

export const _historyIsOpen = atom<boolean>({
  key: `_historyIsOpen${Math.random()}`,
  default: false,
});

export const _selfIntroductionIsOpen = atom<boolean>({
  key: `_selfIntroductionIsOpen${Math.random()}`,
  default: false,
});

export const _careerIsOpen = atom<boolean>({
  key: `_careerIsOpen${Math.random()}`,
  default: false,
});
