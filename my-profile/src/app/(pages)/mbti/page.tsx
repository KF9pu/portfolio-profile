"use client";

import { _blue, _green, _red } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main
      className={cls(
        "flex items-center justify-center",
        "w-screen h-screen",
        "transition-all"
      )}
    >
      {/* TODO: 검사 유형 선택 페이지 [빠른 검사 (40질문), 일반 검사 (80질문), 정밀 검사 (120개 질문)] */}
      <div className={cls("flex gap-2 justify-center items-center")}></div>
    </main>
  );
};

export default Page;
