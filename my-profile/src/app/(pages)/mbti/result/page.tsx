"use client";

import { _testResult } from "@/app/recoilContextProvider";
import MBTIResultType from "@/constants/MBTIResultType";
import useEndLoading from "@/hooks/useEndLoading";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const Page: NextPage = () => {
  const testResult = useRecoilValue(_testResult);
  const [resultMBTI, setResultMBTI] = useState("");
  useEndLoading();

  useEffect(() => {
    console.log("🚀 ~ file: page.tsx:17 ~ testResult:", testResult);
    // if (Object.keys(testResult).length === 0) window.location.href = "/mbti";
    setResultMBTI(
      testResult.PreferredWorld?.type[0] +
        (testResult.PerceptualMode?.type[0] === "I" ? "N" : "S") +
        testResult.JudgmentCriteria?.type[0] +
        testResult.LifestylePattern?.type[0]
    );
  }, [testResult]);

  return (
    <main
      className={cls(
        "flex flex-col justify-center items-center gap-[12px]",
        "w-screen h-screen",
        "p-[12px]"
      )}
      style={{
        backgroundColor: `${
          MBTIResultType.find(({ type }) => type === resultMBTI)?.color
        }`,
      }}
    >
      <section
        className={cls(
          "flex flex-col justify-center items-center",
          "w-full",
          "p-[12px]",
          "shadow-bold",
          "rounded-[12px]",
          "bg-white bg-opacity-50"
        )}
      >
        <p>{resultMBTI}</p>
        <p>{MBTIResultType.find(({ type }) => type === resultMBTI)?.name}</p>
      </section>
      <section
        className={cls(
          "grid grid-cols-2 gap-[8px]",
          "w-full",
          "shadow-bold",
          "p-[12px]",
          "rounded-[12px]",
          "bg-white bg-opacity-50"
        )}
      >
        <p>{testResult.PreferredWorld?.type[0]}</p>
        <p>{testResult.PreferredWorld?.per} %</p>
        <p>{testResult.PerceptualMode?.type[0] === "I" ? "N" : "S"}</p>
        <p>{testResult.PerceptualMode?.per} %</p>
        <p>{testResult.JudgmentCriteria?.type[0]}</p>
        <p>{testResult.JudgmentCriteria?.per} %</p>
        <p>{testResult.LifestylePattern?.type[0]}</p>
        <p>{testResult.LifestylePattern?.per} %</p>
      </section>
      <section></section>
    </main>
  );
};

export default Page;
