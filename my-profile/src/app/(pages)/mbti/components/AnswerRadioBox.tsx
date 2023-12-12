import { cls } from "hsh-utils-string";
import type { FC, HTMLProps } from "react";

interface AnswerRadioBoxProps extends HTMLProps<HTMLDivElement> {}

const AnswerRadioBox: FC<AnswerRadioBoxProps> = ({ children }) => {
  return (
    <div
      className={cls(
        "flex flex-col justify-around items-stacrt gap-[8px]",
        "w-full",
        "py-[12px] px-[20px]",
        "rounded-[12px]"
      )}
    >
      {children}
    </div>
  );
};
export default AnswerRadioBox;
