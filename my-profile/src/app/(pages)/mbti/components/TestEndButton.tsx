import { _questionAnswers } from "@/app/recoilContextProvider";
import { questions } from "@/constants/selfReportQuestions";
import { cls } from "hsh-utils-string";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { useRecoilValue } from "recoil";

interface TestEndButtonProps {}

const TestEndButton: FC<TestEndButtonProps> = ({}) => {
  const questionAnswers = useRecoilValue(_questionAnswers);
  const router = useRouter();
  return (
    <button
      className={cls(
        "w-full",
        "p-[12px]",
        "rounded-[12px]",
        "shadow-bold",
        "text-[16px]"
      )}
      onClick={() => {
        const indexs = questionAnswers.map(({ index }) => index);

        const questionByIndex = indexs.map(idx => questions[idx]);
        console.log(
          "🚀 ~ file: TestEndButton.tsx:22 ~ questionByIndex:",
          questionByIndex
        );

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
