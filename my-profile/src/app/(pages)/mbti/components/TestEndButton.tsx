import {
  _currentQuestion,
  _inspectionCompleted,
  _isOpenTestEndModal,
  _questionAnswers,
  _questions,
  _testResult,
} from "@/app/recoilContextProvider";
import E_criterion from "@/enums/E_criterion";
import useAnswersByMBTI from "@/hooks/useAnswersByMBTI";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface TestEndButtonProps {}

const TestEndButton: FC<TestEndButtonProps> = ({}) => {
  const questions = useRecoilValue(_questions);
  const questionAnswers = useRecoilValue(_questionAnswers);
  const currentQuestion = useRecoilValue(_currentQuestion);
  const setIsOpenTestEndModal = useSetRecoilState(_isOpenTestEndModal);
  const setInspectionCompleted = useSetRecoilState(_inspectionCompleted);
  const { analyzeResults } = useAnswersByMBTI();

  return (
    <button
      className={cls(
        "w-full",
        "p-[12px]",
        "rounded-[12px]",
        "shadow-bold",
        "text-[16px]",
        "transition-all",
        currentQuestion === undefined
          ? "bg-[rgba(120,120,120,.85)]"
          : "bg-opacity-100"
      )}
      onClick={() => {
        setIsOpenTestEndModal(true);
        if (questionAnswers.length !== questions.length) {
          setInspectionCompleted(false);
        } else {
          analyzeResults();
          setInspectionCompleted(true);
        }
      }}
    >
      검사 종료 하기
    </button>
  );
};
export default TestEndButton;
