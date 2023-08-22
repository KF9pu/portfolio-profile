import { cls } from "@/common/libs";
import { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
  ssmall?: true;
  small?: true;
  normal?: true;
  big?: true;
  underline?: true;
}
const Title: FC<TitleProps> = ({ children, big, normal, small, ssmall, underline }) => {
  return (
    <h1
      className={cls(
        "text-primary ",
        big ? "text-[20px] md:text-[24px]" : "",
        normal ? "text-[18px] md:text-[22px]" : "",
        small ? "text-[16px] md:text-[20px]" : "",
        ssmall ? "text-[14px] md:text-[18px]" : "",
        underline ? "underline underline-offset-8" : ""
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
