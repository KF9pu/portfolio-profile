import { ThemeCodeKeys } from "@/theme/interfaces";
import { atom } from "recoil";

export const _ThemeCode = atom<typeof ThemeCodeKeys[number]>({
  key: `ThemeCode${Math.random()}`, // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
