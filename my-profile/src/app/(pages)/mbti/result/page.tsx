"use client";

import { _testResult } from "@/app/recoilContextProvider";
import type { NextPage } from "next";
import { useRecoilValue } from "recoil";

const Page: NextPage = () => {
  const testResult = useRecoilValue(_testResult);
  return <>result</>;
};

export default Page;
