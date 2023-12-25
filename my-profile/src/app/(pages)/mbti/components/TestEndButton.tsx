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
  const setTestResult = useSetRecoilState(_testResult);
  const {
    getExtraverionAnswers, // 선호하는 세계 ( E )
    getIntroversionAnswers, // 선호하는 세계 ( I )
    getIntuitionAnswers, // 인식형태 ( N )
    getSensingAnswers, // 인식형태 ( S )
    getThinkingAnswers, // 판단기준 ( T )
    getFeelingionAnswers, // 판단기준 ( F )
    getJudgingAnswers, // 생활양식 ( J )
    getPerceivingAnswers, // 생활양식 ( p )
  } = useAnswersByMBTI();

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
          const extraverionAnswer = getExtraverionAnswers() + Math.random(); // 선호하는 세계 ( E )

          const introversionAnswer = getIntroversionAnswers() + Math.random(); // 선호하는 세계 ( I )

          const intuitionAnswer = getIntuitionAnswers() + Math.random(); // 인식형태 ( N )

          const sensingAnswer = getSensingAnswers() + Math.random(); // 인식형태 ( S )

          const thinkingAnswer = getThinkingAnswers() + Math.random(); // 판단기준 ( T )

          const feelingionAnswer = getFeelingionAnswers() + Math.random(); // 판단기준 ( F )

          const judgingAnswer = getJudgingAnswers() + Math.random(); // 생활양식 ( J )

          const perceivingAnswer = getPerceivingAnswers() + Math.random(); // 생활양식 ( p )

          // PreferredWorld
          if (extraverionAnswer > introversionAnswer) {
            setTestResult(prev => ({
              ...prev,
              PreferredWorld: {
                type: E_criterion.Extraversion,
                per: (
                  (extraverionAnswer /
                    (extraverionAnswer + introversionAnswer)) *
                  100
                ).toFixed(2),
                weakness: extraverionAnswer < 1 ?? false,
              },
            }));
          } else if (extraverionAnswer < introversionAnswer) {
            setTestResult(prev => ({
              ...prev,
              PreferredWorld: {
                type: E_criterion.Introversion,
                per: (
                  (introversionAnswer /
                    (extraverionAnswer + introversionAnswer)) *
                  100
                ).toFixed(2),
                weakness: introversionAnswer < 1 ?? false,
              },
            }));
          }

          // PerceptualMode
          if (intuitionAnswer > sensingAnswer) {
            setTestResult(prev => ({
              ...prev,
              PerceptualMode: {
                type: E_criterion.Intuition,
                per: (
                  (intuitionAnswer / (intuitionAnswer + sensingAnswer)) *
                  100
                ).toFixed(2),
                weakness: intuitionAnswer < 1 ?? false,
              },
            }));
          } else if (intuitionAnswer < sensingAnswer) {
            setTestResult(prev => ({
              ...prev,
              PerceptualMode: {
                type: E_criterion.Sensing,
                per: (
                  (sensingAnswer / (intuitionAnswer + sensingAnswer)) *
                  100
                ).toFixed(2),
                weakness: sensingAnswer < 1 ?? false,
              },
            }));
          }

          // JudgmentCriteria
          if (thinkingAnswer > feelingionAnswer) {
            setTestResult(prev => ({
              ...prev,
              JudgmentCriteria: {
                type: E_criterion.Thinking,
                per: (
                  (thinkingAnswer / (thinkingAnswer + feelingionAnswer)) *
                  100
                ).toFixed(2),
                weakness: thinkingAnswer < 1 ?? false,
              },
            }));
          } else if (thinkingAnswer < feelingionAnswer) {
            setTestResult(prev => ({
              ...prev,
              JudgmentCriteria: {
                type: E_criterion.Feeling,
                per: (
                  (feelingionAnswer / (thinkingAnswer + feelingionAnswer)) *
                  100
                ).toFixed(2),
                weakness: feelingionAnswer < 1 ?? false,
              },
            }));
          }

          if (judgingAnswer > perceivingAnswer) {
            setTestResult(prev => ({
              ...prev,
              LifestylePattern: {
                type: E_criterion.Judging,
                per: (
                  (judgingAnswer / (judgingAnswer + perceivingAnswer)) *
                  100
                ).toFixed(2),
                weakness: judgingAnswer < 1 ?? false,
              },
            }));
          } else if (judgingAnswer < perceivingAnswer) {
            setTestResult(prev => ({
              ...prev,
              LifestylePattern: {
                type: E_criterion.Perceiving,
                per: (
                  (perceivingAnswer / (judgingAnswer + perceivingAnswer)) *
                  100
                ).toFixed(2),
                weakness: perceivingAnswer < 1 ?? false,
              },
            }));
          }

          setInspectionCompleted(true);
        }

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
