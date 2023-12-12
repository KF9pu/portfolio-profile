import { _currentQuestion } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";
import { useRecoilState } from "recoil";

interface AnswerStartCardProps {}

const AnswerStartCard: FC<AnswerStartCardProps> = ({}) => {
  const searchParams = useSearchParams()!;
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);

  const testText: { [key: string]: string } = {
    quick: "빠른 검사",
    normal: "일반 검사",
    thorough: "정밀 검사",
  };

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center gap-[12px]",
        "absolute",
        "w-full h-full",
        "transition-all duration-500 ease-in-out",
        currentQuestion === undefined
          ? "opacity-100"
          : currentQuestion >= 0
          ? "opacity-0 translate-x-[-100vw]"
          : ""
      )}
    >
      <button
        className={cls(
          "flex flex-col justify-center items-center gap-[16px]",
          "px-[24px] py-[20px]",
          "rounded-[12px]",
          "shadow-bold"
        )}
        onClick={() => setCurrentQuestion(0)}
      >
        <p className="text-[1.2rem]">
          {testText[searchParams.get("type") as string]}
        </p>
        <p className={cls("p-[8px]", "rounded-[12px]", "")}>START !</p>
      </button>
    </div>
  );
};
export default AnswerStartCard;
