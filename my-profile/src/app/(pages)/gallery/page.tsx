"use client";

import { _isLoading } from "@/app/recoilContextProvider";
import type { NextPage } from "next";
import useEndLoading from "@/hooks/useEndLoading";

const Route: NextPage = () => {
  useEndLoading();
  return <>dd</>;
};

export default Route;
