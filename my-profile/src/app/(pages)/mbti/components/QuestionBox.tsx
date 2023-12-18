import type { FC } from "react";
import QuestionNav from "./QuestionNav";
import { cls } from "hsh-utils-string";
import ProgressBar from "./ProgressBar";
import { useRecoilValue } from "recoil";
import { _currentQuestion } from "@/app/recoilContextProvider";
import TestEndBox from "./TestEndBox";

interface QuestionBoxProps {}

const QuestionBox: FC<QuestionBoxProps> = ({}) => {
  const currentQuestion = useRecoilValue(_currentQuestion);
  return (
    <div
      className={cls(
        "flex flex-col items-center gap-[8px]",
        "w-full",
        "p-[12px]",
        "rounded-[12px]",
        "transition-all ease-in-out",
        currentQuestion !== undefined
          ? "shadow-bold bg-[rgba(120,120,120,.85)]"
          : ""
      )}
    >
      <QuestionNav />
      <TestEndBox />
      <ProgressBar />
    </div>
  );
};
export default QuestionBox;
