import { useEffect, type FC } from "react";
import QuestionArrow from "./QuestionArrow";
import { useRecoilState } from "recoil";
import { _currentQuestion, _questions } from "@/app/recoilContextProvider";
import { limitAddNum, limitSubtractNum } from "hsh-utils-math";
import { cls } from "hsh-utils-string";

interface QuestionBoxProps {}

const QuestionBox: FC<QuestionBoxProps> = ({}) => {
  const [questions, setQuestions] = useRecoilState(_questions);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);

  return (
    <div
      className={cls(
        "flex justify-center items-center gap-[8px]",
        "w-full",
        "absolute bottom-[20px] left-0",
        "transition-all duration-500 ease-in-out",
        currentQuestion === undefined ? "opacity-0" : "opacity-100"
      )}
    >
      <QuestionArrow
        left
        onClick={() =>
          setCurrentQuestion(prev =>
            prev === undefined ? 0 : limitSubtractNum(0, 1, prev)
          )
        }
      />

      <p
        className={cls(
          "border-2 border-black rounded-[12px]",
          "px-[12px] py-[8px]",
          "shadow-lg"
        )}
      >
        {currentQuestion !== undefined ? currentQuestion + 1 : 0}/
        {questions.length}
      </p>

      <QuestionArrow
        onClick={() =>
          setCurrentQuestion(prev =>
            prev === undefined ? 0 : limitAddNum(questions.length - 1, 1, prev)
          )
        }
      />
    </div>
  );
};
export default QuestionBox;
