import { cls } from "hsh-utils-string";
import type { FC } from "react";
import AnswerStartCard from "./AnswerStartCard";
import AnswerCard from "./AnswerCard";
import { useRecoilValue } from "recoil";
import { _questions } from "@/app/recoilContextProvider";

interface AnswerSliderProps {}

const AnswerSlider: FC<AnswerSliderProps> = ({}) => {
  const questions = useRecoilValue(_questions);
  return (
    <div
      className={cls(
        "flex justify-center items-start",
        "relative",
        "w-full h-full min-h-[440px]",
        "text-black"
      )}
    >
      <AnswerStartCard />
      {questions.map((question, index) => {
        return (
          <AnswerCard
            key={`questions${index}`}
            index={index}
            questionInfo={question}
          />
        );
      })}
    </div>
  );
};
export default AnswerSlider;
