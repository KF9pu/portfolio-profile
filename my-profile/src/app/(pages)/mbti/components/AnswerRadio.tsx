import {
  _blue,
  _currentQuestion,
  _green,
  _questionAnswers,
  _questions,
  _red,
} from "@/app/recoilContextProvider";
import indexByAnswerInfo from "@/constants/indexByAnswerInfo";
import personalityColorDatas from "@/constants/personalityColorDatas";
import E_criterionOpposite from "@/enums/E_criterionOpposite";
import useChangeBackgroundColor from "@/hooks/useChangeBackgroundColor";
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
  const setCurrentQuestion = useSetRecoilState(_currentQuestion);
  const questions = useRecoilValue(_questions);
  const [isChekced, setIsChekced] = useState(false);
  const { minusBackgroundColor, plusBackgroundColor } =
    useChangeBackgroundColor();
  const { answer, id, text } = indexByAnswerInfo[typeIndex];

  useEffect(() => {
    setIsChekced(() => {
      const questionAnswer = questionAnswers.filter(
        ({ index }) => questions[keyIndex].index === index
      );

      return questionAnswer.length === 0
        ? false
        : questionAnswer[0].answer === answer;
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
        const currentQuestionInfo = questions[keyIndex]; // 현재 질문 데이터
        const { index: idx } = currentQuestionInfo;

        const newAnswer = {
          answer,
          ...currentQuestionInfo,
        };

        const hasAnsweredPreviously = questionAnswers.some(
          ({ index }) => idx === index
        );

        if (hasAnsweredPreviously) {
          const duplicateItems = questionAnswers.find(
            ({ index }) => idx === index
          );
          const nonDuplicateItems = questionAnswers.filter(
            ({ index }) => idx !== index
          );
          const {
            red: appliedRed,
            green: appliedGreen,
            blue: appliedBlue,
          } = personalityColorDatas[duplicateItems!.criterion];

          const {
            red: oppositeRed,
            green: oppositeGreen,
            blue: oppositeBlue,
          } = personalityColorDatas[
            E_criterionOpposite[duplicateItems!.criterion]
          ];

          const hasSameResponse = duplicateItems?.answer === answer;

          setQuestionAnswers(
            hasSameResponse
              ? [...nonDuplicateItems]
              : [newAnswer, ...nonDuplicateItems]
          );

          minusBackgroundColor(appliedRed, appliedGreen, appliedBlue);
          if (!hasSameResponse)
            plusBackgroundColor(oppositeRed, oppositeGreen, oppositeBlue);
        } else {
          const {
            red: appliedRed,
            green: appliedGreen,
            blue: appliedBlue,
          } = personalityColorDatas[questions[keyIndex].criterion];
          // 답변에 대한 컬러값 추가
          plusBackgroundColor(appliedRed, appliedGreen, appliedBlue);
          setQuestionAnswers(prev => [newAnswer, ...prev]);
        }

        if (keyIndex === questions.length - 1) return; // 마지막 문제인 경우 종료

        // 다음 문제가에 답변한 적이 있는 경우 종료
        if (
          questionAnswers.some(
            ({ index }) => questions[keyIndex + 1].index === index
          )
        )
          return;

        // 다음 질문으로 이동
        setCurrentQuestion(prev => prev! + 1);
      }}
    >
      <div
        id={`${id}${keyIndex}`}
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
      <div className="">{text}</div>
    </button>
  );
};

export default AnswerRadio;
