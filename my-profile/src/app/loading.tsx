"use client";

import { NoneProps, OnlyChildrenProps } from "@/interface";
import type { FC } from "react";
import { useRecoilValue } from "recoil";
import { _isLoading } from "./recoilContextProvider";
import { cls } from "hsh-utils-string";

const Loading: FC<NoneProps> = () => {
  const isLoading = useRecoilValue(_isLoading);
  return (
    <div
      className={cls(
        "fixed",
        "w-screen h-screen",
        "bg-black",
        isLoading ? "translate-y-[0]" : "translate-y-[-100vh]",
        "transition-all duration-1000 ease-in-out"
      )}
    >
      Loading ....
    </div>
  );
};
export default Loading;
