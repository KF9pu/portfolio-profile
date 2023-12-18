import {
  _currentQuestion,
  _inspectionCompleted,
  _isOpenTestEndModal,
  _questionAnswers,
  _questions,
} from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

interface TestEndButtonProps {}

const TestEndButton: FC<TestEndButtonProps> = ({}) => {
  const questions = useRecoilValue(_questions);
  const questionAnswers = useRecoilValue(_questionAnswers);
  const currentQuestion = useRecoilValue(_currentQuestion);
  const setIsOpenTestEndModal = useSetRecoilState(_isOpenTestEndModal);
  const setInspectionCompleted = useSetRecoilState(_inspectionCompleted);
  const router = useRouter();
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
          setInspectionCompleted(true);
        }

        const indexs = questionAnswers.map(({ index }) => index);
        console.log("🚀 ~ file: TestEndButton.tsx:38 ~ indexs:", indexs);
        console.log("🚀 ~ file: TestEndButton.tsx:16 ~ questions:", questions);

        // TODO: 검사 결과 담을 변수 생성
        // TODO: 검사 종료시 점수 분석하기
        // TODO: 검사 종료시 질문 _questionAnswers 변수 초기화 (useEndLoading 에서 처리)
        // TODO: 검사 종료시 질문 _questions 변수 초기화 (useEndLoading 에서 처리)
        // TODO: 검사 종료시 질문 _currentQuestion 변수 초기화 (useEndLoading 에서 처리)
        // TODO: 검사 결과 페이지 이동
      }}
    >
      검사 종료 하기
    </button>
  );
};
export default TestEndButton;
