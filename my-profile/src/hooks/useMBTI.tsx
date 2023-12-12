import {
  E_criterion,
  I_questions,
  questions,
} from "@/constants/selfReportQuestions";
import { E_testTypes } from "@/enums/testTypes";
import { shuffleArray } from "hsh-utils-useful";

const useMBTI = () => {
  const getQuestions = (testType: E_testTypes) => {
    const numberOfQuestions = getNumberOfQuestionsByType(testType);

    if (numberOfQuestions === 0) return [];

    const extraversionQuestions = shuffleArray(
      questions.filter(
        ({ criterion }) => criterion === E_criterion.Extraversion
      )
    ).slice(0, numberOfQuestions / 8);

    const FeelingQuestions = shuffleArray(
      questions.filter(({ criterion }) => criterion === E_criterion.Feeling)
    ).slice(0, numberOfQuestions / 8);

    const IntroversionQuestions = shuffleArray(
      questions.filter(
        ({ criterion }) => criterion === E_criterion.Introversion
      )
    ).slice(0, numberOfQuestions / 8);

    const IntuitionQuestions = shuffleArray(
      questions.filter(({ criterion }) => criterion === E_criterion.Intuition)
    ).slice(0, numberOfQuestions / 8);

    const JudgingQuestions = shuffleArray(
      questions.filter(({ criterion }) => criterion === E_criterion.Judging)
    ).slice(0, numberOfQuestions / 8);

    const PerceivingQuestions = shuffleArray(
      questions.filter(({ criterion }) => criterion === E_criterion.Perceiving)
    ).slice(0, numberOfQuestions / 8);

    const SensingQuestions = shuffleArray(
      questions.filter(({ criterion }) => criterion === E_criterion.Sensing)
    ).slice(0, numberOfQuestions / 8);

    const ThinkingQuestions = shuffleArray(
      questions.filter(({ criterion }) => criterion === E_criterion.Thinking)
    ).slice(0, numberOfQuestions / 8);

    const resultQuestions: I_questions[] = [
      ...extraversionQuestions,
      ...FeelingQuestions,
      ...IntroversionQuestions,
      ...IntuitionQuestions,
      ...JudgingQuestions,
      ...PerceivingQuestions,
      ...SensingQuestions,
      ...ThinkingQuestions,
    ];

    return shuffleArray(resultQuestions) as I_questions[];
  };

  return { getQuestions };
};
export default useMBTI;

function getNumberOfQuestionsByType(testType: E_testTypes) {
  switch (testType) {
    case E_testTypes.quick:
      return 40;
    case E_testTypes.normal:
      return 80;
    case E_testTypes.thorough:
      return 120;
    default:
      return 0;
  }
}
