import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface TestBoxProps {
  children: React.ReactNode;
}

const TestBox: FC<TestBoxProps> = ({ children }) => {
  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center gap-[28px]",
        "px-[16px] py-[24px]"
      )}
    >
      {children}
    </div>
  );
};
export default TestBox;
