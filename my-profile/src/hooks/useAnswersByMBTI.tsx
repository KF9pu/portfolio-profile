import { _questionAnswers } from "@/app/recoilContextProvider";
import E_criterion from "@/enums/E_criterion";
import I_questionAnswer from "@/interface/I_questionAnswer";
import { useRecoilValue } from "recoil";

const useAnswersByMBTI = () => {
  const questionAnswers = useRecoilValue(_questionAnswers);

  const getExtraverionAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Extraversion);
  };
  const getFeelingionAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Feeling);
  };
  const getIntroversionAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Introversion);
  };
  const getIntuitionAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Intuition);
  };
  const getJudgingAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Judging);
  };
  const getPerceivingAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Perceiving);
  };
  const getSensingAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Sensing);
  };
  const getThinkingAnswers = () => {
    return getAnswersByCriterion(questionAnswers, E_criterion.Thinking);
  };
  return {
    getExtraverionAnswers,
    getFeelingionAnswers,
    getIntroversionAnswers,
    getIntuitionAnswers,
    getJudgingAnswers,
    getPerceivingAnswers,
    getSensingAnswers,
    getThinkingAnswers,
  };
};

export default useAnswersByMBTI;

function getAnswersByCriterion(
  questionAnswers: I_questionAnswer[],
  criterionFilter: E_criterion
) {
  return questionAnswers
    .filter(({ criterion }) => criterion === criterionFilter)
    .map(({ answer }) => Math.abs(answer))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
