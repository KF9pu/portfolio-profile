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
}

const AnswerRadio: FC<AnwserRadioProps> = ({ typeIndex, keyIndex }) => {
  const [questionAnswers, setQuestionAnswers] =
    useRecoilState(_questionAnswers);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(_currentQuestion);
  const questions = useRecoilValue(_questions);
  const [isChekced, setIsChekced] = useState(false);

  useEffect(() => {
    setIsChekced(() => {
      const questionAnswer = questionAnswers.filter(
        ({ index }) => questions[keyIndex].index === index
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
          if (prev.some(({ index }) => questions[keyIndex].index === index)) {
            const nonDuplicateItems = prev.filter(
              ({ index }) => questions[keyIndex].index !== index
            );

            const duplicateItems = prev.find(
              ({ index }) => questions[keyIndex].index === index
            );

            if (duplicateItems?.answer === indexByAnswerInfo[typeIndex].value) {
              // 같은 답을 누를 경우 취소
              return [...nonDuplicateItems];
            } else {
              // 수정
              return [
                {
                  answer: indexByAnswerInfo[typeIndex].value,
                  ...questions[keyIndex],
                },
                ...nonDuplicateItems,
              ];
            }
          } else {
            // 새로 질문에 답한 경우
            return [
              {
                answer: indexByAnswerInfo[typeIndex].value,
                ...questions[keyIndex],
              },
              ...prev,
            ];
          }
        });

        if (keyIndex === questions.length - 1) return; // 마지막 문제인 경우 종료

        // 다음 문제가에 답변한 적이 있는 경우 종료
        if (
          questionAnswers.some(
            ({ index }) => questions[keyIndex + 1].index === index
          )
        )
          return;

        setCurrentQuestion(prev => prev! + 1);
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
