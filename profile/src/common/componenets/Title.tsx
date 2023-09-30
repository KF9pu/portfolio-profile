import { cls } from "@/common/libs";
import { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
  ssmall?: true;
  small?: true;
  normal?: true;
  big?: true;
  sbig?: true;
  underline?: true;
  isQuaternary?: true;
  istertiary?: true;
  Fixed?: true;
  widthFull?: true;
}
const Title: FC<TitleProps> = ({
  children,
  big,
  sbig,
  normal,
  small,
  ssmall,
  underline,
  isQuaternary,
  istertiary,
  Fixed,
  widthFull,
}) => {
  return (
    <h1
      className={cls(
        isQuaternary ? "text-quaternary" : "text-primary",
        istertiary ? "text-tertiary" : "text-primary",
        Fixed ? "fixed" : "",
        big ? "text-[19px] md:text-[24px]" : "",
        sbig ? "text-[18px] md:text-[23px]" : "",
        normal ? "text-[17px] md:text-[22px]" : "",
        small ? "text-[16px] md:text-[19px]" : "",
        ssmall ? "text-[14px] md:text-[18px]" : "",
        underline ? "underline underline-offset-8" : ""
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
