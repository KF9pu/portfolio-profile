import type { FC, HTMLProps } from "react";
import AnswerRadio from "./AnswerRadio";
import { I_questions } from "@/constants/selfReportQuestions";
import { cls } from "hsh-utils-string";
import { useRecoilState } from "recoil";
import { _currentQuestion } from "@/app/recoilContextProvider";
import QuestionBox from "./QuestionBox";
import AnswerRadioBox from "./AnswerRadioBox";

interface AnswerCardProps extends HTMLProps<HTMLDivElement> {
  index: number;
  question: I_questions;
}

const AnswerCard: FC<AnswerCardProps> = ({
  index,
  question: { question },
  ...props
}) => {
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);
  return (
    <div
      className={cls(
        "flex flex-col gap-[12px]",
        "absolute",
        "p-[12px]",
        currentQuestion === index
          ? "opacity-100 translate-x-0"
          : currentQuestion === undefined
          ? "opacity-0 translate-x-[100vw]"
          : currentQuestion > index
          ? "opacity-0 translate-x-[-100vw]"
          : "opacity-0 translate-x-[100vw]",
        "transition-all duration-500 ease-in-out"
      )}
      {...props}
    >
      <div
        className={cls(
          "flex flex-col justify-center items-center gap-[4px]",
          "shadow-bold",
          "rounded-[12px]",
          "py-[12px] px-[8px]"
        )}
      >
        <p>Q.</p>
        <p className={cls("break-keep text-center")}>{question}</p>
      </div>
      <AnswerRadioBox>
        {Array.from({ length: 5 }).map((_, idx) => (
          <AnswerRadio
            key={`AnswerRadio${idx}${index}`}
            typeIndex={idx}
            keyIndex={index}
          />
        ))}
      </AnswerRadioBox>
    </div>
  );
};
export default AnswerCard;
