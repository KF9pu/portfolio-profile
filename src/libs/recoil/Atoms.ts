import { atom } from "recoil";

export const _hashmapTest = atom<Map<string, any[]>>({
  key: "hashmapTest",
  default: new Map([
    ["moon_color", []],
    ["moon_phase", []],
    ["premium_nft", []],
    ["crystal_color", []],
  ]),
});
