import { cls } from "hsh-utils-string";
import type { FC, HTMLProps } from "react";

interface AnswerRadioBoxProps extends HTMLProps<HTMLDivElement> {}

const AnswerRadioBox: FC<AnswerRadioBoxProps> = ({ children }) => {
  return (
    <div
      className={cls(
        "flex flex-col justify-around items-stacrt gap-[12px]",
        "w-full",
        "p-[12px]",
        "rounded-[12px]",
        "shadow-bold",
        "bg-[rgba(120,120,120,.85)]"
      )}
    >
      {children}
    </div>
  );
};
export default AnswerRadioBox;
