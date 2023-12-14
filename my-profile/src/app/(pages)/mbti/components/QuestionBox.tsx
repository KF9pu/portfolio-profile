import type { FC } from "react";
import QuestionNav from "./QuestionNav";
import TestEndButton from "./TestEndButton";
import { cls } from "hsh-utils-string";
import ProgressBar from "./ProgressBar";

interface QuestionBoxProps {}

const QuestionBox: FC<QuestionBoxProps> = ({}) => {
  return (
    <div
      className={cls(
        "flex flex-col items-center gap-[8px]",
        "w-full",
        "p-[12px]",
        "rounded-[12px]",
        "shadow-bold",
        "bg-[rgba(120,120,120,1)]"
      )}
    >
      <QuestionNav />
      <TestEndButton />
      <ProgressBar />
    </div>
  );
};
export default QuestionBox;
