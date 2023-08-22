import { OnlyChildrenProps } from "@/common/interface";
import { cls } from "@/common/libs";
import { FC } from "react";

export const Section: FC<OnlyChildrenProps> = ({ children }) => {
  return <section className="flex flex-col gap-[4px]">{children}</section>;
};

export const Article: FC<OnlyChildrenProps> = ({ children }) => {
  return <article className={cls("pl-[4px] md:pl-[8px]")}>{children}</article>;
};

export const SkillBox: FC<OnlyChildrenProps> = ({ children }) => {
  return <ul className={cls("pl-[8px] md:pl-[16px] text-[14px]")}>{children}</ul>;
};
