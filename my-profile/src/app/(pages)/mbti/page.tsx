"use client";

import {
  _blue,
  _currentQuestion,
  _green,
  _isLoading,
  _questionAnswers,
  _red,
} from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";
import useEndLoading from "@/hooks/useEndLoading";
import { E_testTypes } from "@/enums/testTypes";
import TestCard from "./components/TestCard";
import AnswerBox from "./components/AnswerBox";
import TestBox from "./components/TestBox";

const Page: NextPage = () => {
  useEndLoading();

  return (
    <main
      className={cls(
        "flex items-center justify-center",
        "w-screen h-screen",
        "transition-all",
        "overflow-hidden"
      )}
    >
      <AnswerBox />
      <TestBox>
        <TestCard testTypes={E_testTypes.quick}>빠른 검사</TestCard>
        <TestCard testTypes={E_testTypes.normal}>일반 검사</TestCard>
        <TestCard testTypes={E_testTypes.thorough}>정밀 검사</TestCard>
      </TestBox>
    </main>
  );
};

export default Page;
