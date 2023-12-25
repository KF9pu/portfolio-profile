import {
  _currentQuestion,
  _inspectionCompleted,
  _isOpenTestEndModal,
  _questionAnswers,
  _questions,
  _testResult,
} from "@/app/recoilContextProvider";
import { useLayoutEffect } from "react";
import { useResetRecoilState } from "recoil";

const useResetMBTI = () => {
  const resetQuestions = useResetRecoilState(_questions);
  const resetQuestionAnswers = useResetRecoilState(_questionAnswers);
  const resetIsOpenTestEndModal = useResetRecoilState(_isOpenTestEndModal);
  const resetInspectionCompleted = useResetRecoilState(_inspectionCompleted);
  const resetTestResult = useResetRecoilState(_testResult);
  const resetCurrentQuestion = useResetRecoilState(_currentQuestion);

  useLayoutEffect(() => {
    resetQuestions();
    resetQuestionAnswers();
    resetIsOpenTestEndModal();
    resetInspectionCompleted();
    resetTestResult();
    resetCurrentQuestion();
  }, []);
};
export default useResetMBTI;
