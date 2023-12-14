import { useEffect, type FC } from "react";
import QuestionArrow from "./QuestionArrow";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  _blue,
  _currentQuestion,
  _green,
  _questionAnswers,
  _questions,
  _red,
} from "@/app/recoilContextProvider";
import { limitAddNum, limitSubtractNum } from "hsh-utils-math";
import { cls } from "hsh-utils-string";

interface QuestionNavProps {}

const QuestionNav: FC<QuestionNavProps> = ({}) => {
  const questions = useRecoilValue(_questions);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center gap-[12px]",
        "w-full",
        "transition-all duration-500 ease-in-out",
        "p-[12px]",
        currentQuestion === undefined ? "opacity-0" : ""
      )}
    >
      <div className={cls("flex justify-center items-center gap-[8px]")}>
        <QuestionArrow
          left
          onClick={() =>
            setCurrentQuestion(prev =>
              prev === undefined ? 0 : limitSubtractNum(0, 1, prev)
            )
          }
        />
        <p className="text-[12px]">
          {currentQuestion !== undefined ? currentQuestion + 1 : 0}/
          {questions.length}
        </p>
        <QuestionArrow
          onClick={() =>
            setCurrentQuestion(prev =>
              prev === undefined
                ? 0
                : limitAddNum(questions.length - 1, 1, prev)
            )
          }
        />
      </div>
    </div>
  );
};
export default QuestionNav;
