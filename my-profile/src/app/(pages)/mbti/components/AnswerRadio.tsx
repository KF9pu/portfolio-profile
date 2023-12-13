import { _questionAnswers } from "@/app/recoilContextProvider";
import indexByAnswerInfo from "@/constants/indexByAnswerInfo";
import { I_questionWithIndex } from "@/constants/selfReportQuestions";
import { cls } from "hsh-utils-string";
import { FC } from "react";
import { useSetRecoilState } from "recoil";

interface AnwserRadioProps {
  typeIndex: number;
  keyIndex: number;
  questionInfo: I_questionWithIndex;
}

const AnswerRadio: FC<AnwserRadioProps> = ({
  typeIndex,
  keyIndex,
  questionInfo,
}) => {
  const setQuestionAnswers = useSetRecoilState(_questionAnswers);

  return (
    <label
      className={cls("flex gap-[8px]")}
      htmlFor={`${indexByAnswerInfo[typeIndex].id}${keyIndex}`}
    >
      <input
        id={`${indexByAnswerInfo[typeIndex].id}${keyIndex}`}
        type="radio"
        name="answer"
        value={indexByAnswerInfo[typeIndex].value}
        onChange={() =>
          setQuestionAnswers(prev => [
            { answer: indexByAnswerInfo[typeIndex].value, ...questionInfo },
            ...prev,
          ])
        }
      />
      <span>{indexByAnswerInfo[typeIndex].text}</span>
    </label>
  );
};

export default AnswerRadio;
