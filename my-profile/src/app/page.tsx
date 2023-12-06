"use client";

import { cls } from "hsh-utils-string";
import { useRecoilState } from "recoil";
import { _blue, _green, _red } from "./recoilContextProvider";

export default function Home() {
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
      <div className={cls("flex gap-2 justify-center items-center")}>
        <button
          className={cls("p-10", "border")}
          onClick={() => serRed(prev => prev + 3)}
        >
          +
        </button>
        <p className={cls("p-10", "border")}>red</p>
        <button
          className={cls("p-10", "border")}
          onClick={() => serRed(prev => prev - 3)}
        >
          {" "}
          -{" "}
        </button>
      </div>
    </main>
  );
}
