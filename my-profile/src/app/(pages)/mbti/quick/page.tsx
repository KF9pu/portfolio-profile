"use client";

import { _blue, _green, _red } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";

const Page: NextPage = () => {
  const [red, serRed] = useRecoilState(_red);
  const [green, setGreen] = useRecoilState(_green);
  const [blue, setBlue] = useRecoilState(_blue);

  return (
    <main
      className={cls(
        "flex items-center justify-center",
        "w-screen h-screen",
        "transition-all"
      )}
      style={{
        backgroundColor: `rgba(${red},${green},${blue},.5)`,
      }}
    >
      Quick
    </main>
  );
};

export default Page;
