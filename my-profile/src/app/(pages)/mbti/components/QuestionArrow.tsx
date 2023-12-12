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
    <div className={cls("flex")} onClick={onClick} {...props}>
      <div
        className={cls(
          "w-[36px] h-[36px]",
          "bg-[url('/images/right-arrow.png')] bg-cover bg-center",
          "transition-all duration-500 ease-in-out",
          left
            ? cls(
                "rotate-180",
                currentQuestion === 0 ? "opacity-0" : "opacity-100"
              )
            : cls(
                currentQuestion === questions.length - 1
                  ? "opacity-0"
                  : "opacity-100"
              )
        )}
      />
    </div>
  );
};

export default QuestionArrow;
