import { _questionAnswers, _testResult } from "@/app/recoilContextProvider";
import E_criterion from "@/enums/E_criterion";
import I_questionAnswer from "@/interface/I_questionAnswer";
import I_AnalyzedResults from "@/interface/I_AnalyzedResults";
import { useRecoilValue, useSetRecoilState } from "recoil";
import E_criterionOpposite from "@/enums/E_criterionOpposite";
import E_MyersBriggsType from "@/enums/E_MyersBriggsType";

const useAnswersByMBTI = () => {
  const questionAnswers = useRecoilValue(_questionAnswers);
  const setTestResult = useSetRecoilState(_testResult);

  const analyzeResults = () => {
    const results: I_AnalyzedResults = {};

    const analyzeCriterion = (myersBriggsType: E_MyersBriggsType) => {
      const { criterion, oppositeCriterion } = getCriterion(myersBriggsType);
      const criterionAnswer = getAnswersByCriterion(questionAnswers, criterion);
      const oppositeCriterionAnswer = getAnswersByCriterion(
        questionAnswers,
        oppositeCriterion
      );

      const per = (
        ((criterionAnswer > oppositeCriterionAnswer
          ? criterionAnswer
          : oppositeCriterionAnswer) /
          (criterionAnswer + oppositeCriterionAnswer)) *
        100
      ).toFixed(2);

      const weakness = criterionAnswer < 1;

      results[myersBriggsType] = {
        type:
          criterionAnswer > oppositeCriterionAnswer
            ? criterion
            : oppositeCriterion,
        per,
        weakness,
      };
    };

    analyzeCriterion(E_MyersBriggsType.PreferredWorld);
    analyzeCriterion(E_MyersBriggsType.PerceptualMode);
    analyzeCriterion(E_MyersBriggsType.JudgmentCriteria);
    analyzeCriterion(E_MyersBriggsType.LifestylePattern);

    setTestResult(results);
  };

  return {
    analyzeResults,
  };
};

export default useAnswersByMBTI;

function getAnswersByCriterion(
  questionAnswers: I_questionAnswer[],
  criterionFilter: E_criterion | E_criterionOpposite
) {
  return (
    questionAnswers
      .filter(({ criterion }) => criterion === criterionFilter)
      .map(({ answer }) => Math.abs(answer))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) +
    Math.random()
  );
}

function getCriterion(myersBriggsType: E_MyersBriggsType) {
  switch (myersBriggsType) {
    case E_MyersBriggsType.PreferredWorld:
      return {
        criterion: E_criterion.Extraversion, // E
        oppositeCriterion: E_criterion.Introversion, // I
      };
    case E_MyersBriggsType.PerceptualMode:
      return {
        criterion: E_criterion.Intuition, // N
        oppositeCriterion: E_criterion.Sensing, // S
      };
    case E_MyersBriggsType.JudgmentCriteria:
      return {
        criterion: E_criterion.Thinking, // T
        oppositeCriterion: E_criterion.Feeling, // F
      };
    case E_MyersBriggsType.LifestylePattern:
      return {
        criterion: E_criterion.Judging, // J
        oppositeCriterion: E_criterion.Perceiving, // P
      };
  }
}
