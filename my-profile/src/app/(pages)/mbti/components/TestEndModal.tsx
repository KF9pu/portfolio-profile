import {
  _inspectionCompleted,
  _isOpenTestEndModal,
  _questionAnswers,
  _questions,
  _testResult,
} from "@/app/recoilContextProvider";
import { SpotLoading } from "hsh-components-tailwind";
import { cls } from "hsh-utils-string";
import { useEffect, type FC, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

interface TestEndModalProps {}

const TestEndModal: FC<TestEndModalProps> = ({}) => {
  const [isOpen, setIsOpen] = useRecoilState(_isOpenTestEndModal);
  const resetQuestionAnswers = useResetRecoilState(_questionAnswers);
  const inspectionCompleted = useRecoilValue(_inspectionCompleted);
  const testResult = useRecoilValue(_testResult);
  const router = useRouter();
  const [isAnalysisCompleted, setIsAnalysisCompleted] = useState(false);

  useEffect(() => {
    if (inspectionCompleted) {
      setTimeout(() => {
        setIsAnalysisCompleted(true);
      }, 2000);
    }
  }, [testResult]);

  return (
    <div
      className={cls(
        "fixed top-0 left-0",
        "flex flex-col justify-center items-center",
        "w-screen h-screen",
        "bg-[rgba(0,0,0,.8)]",
        "transition-all duration-500 ease-in-out",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-[100vw] opacity-0"
      )}
    >
      {inspectionCompleted ? (
        <div
          className={cls(
            "flex flex-col gap-[12px]",
            "w-[80%]",
            "bg-white",
            "px-[12px] py-[36px]",
            "rounded-[12px]",
            "text-black"
          )}
        >
          {isAnalysisCompleted ? (
            <div
              className={cls(
                "flex flex-col justify-center items-center",
                "w-full h-full"
              )}
              onClick={() => {
                window.location.href = "/mbti/result";
              }}
            >
              <p>😀</p>
              <p className="text-[18px]">결과 보기</p>
              <p className="text-[20px]">Click</p>
            </div>
          ) : (
            <>
              <p>결과를 분석하고 있어요</p>
              <SpotLoading />
            </>
          )}
        </div>
      ) : (
        <div
          className={cls(
            "flex flex-col gap-[24px]",
            "shadow-bold",
            "px-[12px] py-[36px]",
            "bg-white",
            "rounded-[12px]",
            "transition-all duration-1000 ease-in-out"
          )}
        >
          <p>아직 답변을 완료하지 않았어요!</p>
          <div className={cls("flex flex-col gap-[24px]")}>
            <button
              className={cls("shadow-bold", "p-[12px]", "rounded-[12px]")}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              질문으로 돌아갈래요.
            </button>
            <button
              className={cls("shadow-bold", "p-[12px]", "rounded-[12px]")}
              onClick={() => {
                router.push("/mbti");
                setIsOpen(false);
                resetQuestionAnswers();
              }}
            >
              검사를 종료할래요.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TestEndModal;
