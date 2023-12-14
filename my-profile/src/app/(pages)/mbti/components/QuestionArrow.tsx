import { _currentQuestion, _questions } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import { FC, HTMLProps } from "react";
import { useRecoilValue } from "recoil";

interface QuestionArrowProps extends HTMLProps<HTMLDivElement> {
  left?: true;
}

const QuestionArrow: FC<QuestionArrowProps> = ({ left, onClick, ...props }) => {
  const currentQuestion = useRecoilValue(_currentQuestion);
  const questions = useRecoilValue(_questions);

  return (
    <div
      className={cls(
        "flex justify-center items-center",
        "w-[36px] h-full",
        "transition-all duration-500 ease-in-out",
        "opacity-0",
        left
          ? cls(
              currentQuestion === undefined || currentQuestion === 0
                ? ""
                : "opacity-100"
            )
          : cls(currentQuestion === questions.length - 1 ? "" : "opacity-100")
      )}
      onClick={onClick}
      {...props}
    >
      <div
        className={cls(
          "w-[16px] h-[16px]",
          "bg-[url('/images/right-arrow.png')] bg-cover bg-center",
          left ? "rotate-180" : ""
        )}
      />
    </div>
  );
};

export default QuestionArrow;
