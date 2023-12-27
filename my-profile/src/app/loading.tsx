"use client";

import { NoneProps } from "@/interface";
import { type FC } from "react";
import { useRecoilValue } from "recoil";
import { _isLoading } from "./recoilContextProvider";
import { cls } from "hsh-utils-string";
import { SpotLoading } from "hsh-components-tailwind";

const Loading: FC<NoneProps> = () => {
  const isLoading = useRecoilValue(_isLoading);

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center",
        "fixed",
        "w-screen h-screen",
        "bg-black",
        isLoading ? "translate-y-[0]" : "translate-y-[-100vh]",
        "transition-all duration-1000 ease-in-out",
        "text-white"
      )}
    >
      <div
        className={cls(
          "flex flex-col justify-center items-center gap-[8px]",
          "w-[90%]",
          "bg-white",
          "rounded-[12px]",
          "px-[12px] py-[32px]"
        )}
      >
        <div className={cls("flex gap-[4px]", "text-[20px] text-black")}>
          Loading . . .
        </div>
        <SpotLoading />
      </div>
    </div>
  );
};
export default Loading;
