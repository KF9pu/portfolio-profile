import { questions } from "@/constants/selfReportQuestions";
import E_criterion from "@/enums/E_criterion";
import { E_testTypes } from "@/enums/testTypes";
import I_questionWithIndex from "@/interface/I_questionWithIndex";
import { shuffleArray } from "hsh-utils-useful";

const useMBTI = () => {
  const getQuestions = (testType: E_testTypes) => {
    const numberOfQuestions = getNumberOfQuestionsByType(testType);

    if (numberOfQuestions === 0) return [];

    const extraversionQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Extraversion
    );

    const FeelingQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Feeling
    );

    const IntroversionQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Introversion
    );

    const IntuitionQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Intuition
    );

    const JudgingQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Judging
    );

    const PerceivingQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Perceiving
    );

    const SensingQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Sensing
    );

    const ThinkingQuestions: I_questionWithIndex[] = questionsByCriterion(
      numberOfQuestions,
      E_criterion.Thinking
    );

    const resultQuestions: I_questionWithIndex[] = [
      ...extraversionQuestions,
      ...FeelingQuestions,
      ...IntroversionQuestions,
      ...IntuitionQuestions,
      ...JudgingQuestions,
      ...PerceivingQuestions,
      ...SensingQuestions,
      ...ThinkingQuestions,
    ];

    return shuffleArray(resultQuestions) as I_questionWithIndex[];
  };

  return { getQuestions };
};
export default useMBTI;

function getNumberOfQuestionsByType(testType: E_testTypes): number {
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

const questionsByCriterion = (
  numberOfQuestions: number,
  criterion: E_criterion
): I_questionWithIndex[] => {
  return shuffleArray(
    questions
      .map((question, idx) => ({ index: idx, ...question }))
      .filter(
        ({ criterion: questionCriterion }) => questionCriterion === criterion
      )
  ).slice(0, numberOfQuestions / 8);
};
