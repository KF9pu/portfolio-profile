import type { FC, HTMLProps } from "react";
import AnswerRadio from "./AnswerRadio";
import { cls } from "hsh-utils-string";
import { useRecoilState } from "recoil";
import { _currentQuestion } from "@/app/recoilContextProvider";
import AnswerRadioBox from "./AnswerRadioBox";
import I_questionWithIndex from "@/interface/I_questionWithIndex";

interface AnswerCardProps extends HTMLProps<HTMLDivElement> {
  index: number;
  questionInfo: I_questionWithIndex;
}

const AnswerCard: FC<AnswerCardProps> = ({ index, questionInfo, ...props }) => {
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);

  return (
    <div
      className={cls(
        "flex flex-col gap-[24px]",
        "absolute",
        "transition-all duration-500 ease-in-out",
        currentQuestion === index
          ? "opacity-100 translate-x-0"
          : currentQuestion === undefined
          ? "opacity-0 translate-x-[100vw]"
          : currentQuestion > index
          ? "opacity-0 translate-x-[-100vw]"
          : "opacity-0 translate-x-[100vw]"
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
        <p>Q.{questionInfo.index}</p>
        <p className={cls("break-keep text-center")}>{questionInfo.question}</p>
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
