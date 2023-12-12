import { cls } from "hsh-utils-string";
import { FC } from "react";

interface AnwserRadioProps {
  typeIndex: number;
  keyIndex: number;
}

const AnswerRadio: FC<AnwserRadioProps> = ({ typeIndex, keyIndex }) => {
  const indexByInfo = [
    { id: "veryAgree", text: "매우 그렇다", value: 3 },
    { id: "agree", text: "그렇다", value: 2 },
    { id: "neutral", text: "보통이다", value: 1 },
    { id: "disagree", text: "아니다", value: -1 },
    { id: "veryDisagree", text: "매우 아니다", value: -2 },
  ];

  return (
    <label
      className={cls("flex gap-[8px]")}
      htmlFor={`${indexByInfo[typeIndex].id}${keyIndex}`}
    >
      <input
        id={`${indexByInfo[typeIndex].id}${keyIndex}`}
        type="radio"
        name="answer"
        value={indexByInfo[typeIndex].value}
      />
      <span>{indexByInfo[typeIndex].text}</span>
    </label>
  );
};

export default AnswerRadio;
