import {
  _currentQuestion,
  _questionAnswers,
  _questions,
} from "@/app/recoilContextProvider";
import indexByAnswerInfo from "@/constants/indexByAnswerInfo";
import I_questionWithIndex from "@/interface/I_questionWithIndex";
import { limitAddNum } from "hsh-utils-math";
import { cls } from "hsh-utils-string";
import { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface AnwserRadioProps {
  typeIndex: number;
  keyIndex: number;
  questionInfo: I_questionWithIndex;
}

const AnswerRadio: FC<AnwserRadioProps> = ({
  typeIndex,
  keyIndex,
  questionInfo,
}) => {
  const [questionAnswers, setQuestionAnswers] =
    useRecoilState(_questionAnswers);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);
  const questions = useRecoilValue(_questions);
  const [isChekced, setIsChekced] = useState(false);

  // useEffect(() => {
  //   setCurrentQuestion(prev =>
  //     limitAddNum(questions.length - 1, 1, prev === undefined ? 0 : prev)
  //   );
  // }, [questionAnswers]);

  useEffect(() => {
    setIsChekced(() => {
      const questionAnswer = questionAnswers.filter(
        ({ index }) => questionInfo.index === index
      );

      return questionAnswer.length === 0
        ? false
        : questionAnswer[0].answer === indexByAnswerInfo[typeIndex].value;
    });
  }, [questionAnswers]);

  return (
    <button
      className={cls(
        "flex justify-start items-center gap-[8px]",
        "w-fit",
        "px-[12px] py-[8px]",
        isChekced ? "shadow-bold" : "",
        "transition-all duration-300 ease-in-out",
        "rounded-full"
      )}
      onClick={() => {
        setQuestionAnswers(prev => {
          if (prev.some(({ index }) => questionInfo.index === index)) {
            const nonDuplicateItems = prev.filter(
              ({ index }) => questionInfo.index !== index
            );
            console.log(
              "🚀 ~ file: AnswerRadio.tsx:66 ~ indexByAnswerInfo[typeIndex].value:",
              indexByAnswerInfo[typeIndex].value
            );
            return [
              { answer: indexByAnswerInfo[typeIndex].value, ...questionInfo },
              ...nonDuplicateItems,
            ];
          } else {
            return [
              { answer: indexByAnswerInfo[typeIndex].value, ...questionInfo },
              ...prev,
            ];
          }
        });
      }}
    >
      <div
        id={`${indexByAnswerInfo[typeIndex].id}${keyIndex}`}
        className={cls(
          "flex justify-center items-center",
          "w-[16px] h-[16px]",
          "border-2 rounded-full",
          "border-black",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <div
          className={cls(
            "w-[8px] h-[8px]",
            "rounded-full",
            isChekced ? "bg-black" : "",
            "transition-all duration-300 ease-in-out"
          )}
        />
      </div>
      <div className="">{indexByAnswerInfo[typeIndex].text}</div>
    </button>
  );
};

export default AnswerRadio;
