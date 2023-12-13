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

interface QuestionBoxProps {}

const QuestionBox: FC<QuestionBoxProps> = ({}) => {
  const red = useRecoilValue(_red);
  const green = useRecoilValue(_green);
  const blue = useRecoilValue(_blue);
  const [questions, setQuestions] = useRecoilState(_questions);
  const questionAnswers = useRecoilValue(_questionAnswers);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center gap-[8px]",
        "w-full",
        "absolute bottom-[0px] left-0",
        "transition-all duration-500 ease-in-out",
        currentQuestion === undefined ? "opacity-0" : "opacity-100"
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
              prev === undefined
                ? 0
                : limitAddNum(questions.length - 1, 1, prev)
            )
          }
        />
      </div>
      <div
        className={cls(
          "flex",
          "w-[96%] h-[8px]",
          "",
          "border border-black rounded-full"
        )}
      >
        {questions.map(({}, idx) => {
          return (
            <div
              key={`progressBar${idx}`}
              className={cls(
                "h-full",
                "transition-all",
                idx === 0 ? "rounded-l-full" : "",
                idx === questions.length - 1 ? "rounded-r-full" : ""
              )}
              style={{
                width: `calc(100%/${questions.length})`,
                backgroundColor:
                  idx < questionAnswers.length
                    ? `rgba(${red},${green},${blue},.9)`
                    : `rgba(${red},${green},${blue},.5)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default QuestionBox;
