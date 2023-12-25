"use client";

import { _testResult } from "@/app/recoilContextProvider";
import useEndLoading from "@/hooks/useEndLoading";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

/**
 * 
 *  type: E_criterion;
    per: number;
    weakness: boolean;
 */
const Page: NextPage = () => {
  const testResult = useRecoilValue(_testResult);
  useEndLoading();
  useEffect(() => {
    console.log("🚀 ~ file: page.tsx:17 ~ testResult:", testResult);
    // if (Object.keys(testResult).length === 0) window.location.href = "/mbti";
  }, [testResult]);

  return (
    <main className="flex flex-col">
      <section>
        <div>
          <p>{testResult.PreferredWorld?.type[0]}</p>
        </div>
        <div>
          <p>{testResult.PerceptualMode?.type[0] === "I" ? "N" : "S"}</p>
        </div>
        <div>
          <p>{testResult.JudgmentCriteria?.type[0]}</p>
        </div>
        <div>
          <p>{testResult.LifestylePattern?.type[0]}</p>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Page;
