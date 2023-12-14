import { _questionAnswers, _questions } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { useRecoilValue } from "recoil";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = ({}) => {
  const questions = useRecoilValue(_questions);
  const questionAnswers = useRecoilValue(_questionAnswers);
  return (
    <div className={cls("flex", "w-[96%] h-[8px]", "rounded-full")}>
      {questions.map(({}, idx) => {
        return (
          <div
            key={`progressBar${idx}`}
            className={cls(
              "h-full",
              "transition-all duration-300",
              idx === 0 ? "rounded-l-full" : "",
              idx === questions.length - 1 ? "rounded-r-full" : "",
              idx < questionAnswers.length
                ? "bg-[rgb(177,224,163,.8)]"
                : "bg-[rgb(177,224,163,.1)]"
            )}
            style={{
              width: `calc(100%/${questions.length})`,
            }}
          />
        );
      })}
    </div>
  );
};
export default ProgressBar;
