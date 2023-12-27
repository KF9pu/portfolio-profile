"use client";

import { E_testTypes } from "@/enums/testTypes";
import I_questionAnswer from "@/interface/I_questionAnswer";
import I_questionWithIndex from "@/interface/I_questionWithIndex";
import I_AnalyzedResults from "@/interface/I_AnalyzedResults";
import { RecoilRoot, atom } from "recoil";

export default function RecoidContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export const _red = atom<number>({
  key: `red${Math.random()}`,
  default: 120,
});

export const _green = atom<number>({
  key: `green${Math.random()}`,
  default: 120,
});

export const _blue = atom<number>({
  key: `blue${Math.random()}`,
  default: 120,
});

export const _isVisible = atom<boolean>({
  key: `_isVisible${Math.random()}`,
  default: false,
});

export const _floatingFlipped = atom<boolean>({
  key: `_floatingFlipped${Math.random()}`,
  default: false,
});

export const _menuFlipped = atom<boolean>({
  key: `_menuFlipped${Math.random()}`,
  default: true,
});

export const _isLoading = atom<boolean>({
  key: `_isLoading${Math.random()}`,
  default: false,
});

export const _selectedTestType = atom<E_testTypes>({
  key: "_selectedTestType",
  default: E_testTypes.none,
});

export const _questions = atom<I_questionWithIndex[]>({
  key: "_questions",
  default: [],
});

export const _currentQuestion = atom<number | undefined>({
  key: "_currentQuestion",
  default: undefined,
});

export const _questionAnswers = atom<I_questionAnswer[]>({
  key: "_questionAnswers",
  default: [],
});

export const _testResult = atom<I_AnalyzedResults>({
  key: "_testResult",
  default: {},
});

export const _isOpenTestEndModal = atom<boolean>({
  key: "_isOpenTestEndModal",
  default: false,
});
export const _inspectionCompleted = atom<boolean>({
  key: "_inspectionCompleted",
  default: false,
});
