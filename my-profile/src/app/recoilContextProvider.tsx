"use client";

import { E_testTypes } from "@/enums/testTypes";
import I_questionAnswer from "@/interface/I_questionAnswer";
import I_questionWithIndex from "@/interface/I_questionWithIndex";
import I_testResult from "@/interface/I_testResult";
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

export const _scrollSectionNum = atom<number>({
  key: `_scrollSectionNum${Math.random()}`,
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

export const _testResult = atom<I_testResult>({
  key: "_testResult",
  default: {},
});
