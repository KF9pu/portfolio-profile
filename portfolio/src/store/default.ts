import { ThemeCodeType } from "@/theme/interfaces";
import { atom } from "recoil";

export const _ThemeCode = atom<ThemeCodeType>({
  key: "ThemeCode", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
