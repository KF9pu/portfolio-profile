"use client";
import { transformWinningNumberJson } from "@/libs/rest";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div>
      <button onClick={() => transformWinningNumberJson()}>aaa</button>
    </div>
  );
};

export default Page;
