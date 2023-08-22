import { NoneProps, OnlyChildrenProps } from "@/common/interface";
import { FC } from "react";
import { PresonalInfoProps, SectionProps, ViewButtonProps } from "../interface/MePage";
import { cls } from "@/common/libs";

export const MainSection: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className={cls("flex flex-col gap-[8px] md:gap-[12px]", "text-secondary")}>{children}</div>;
};

export const Section: FC<SectionProps> = ({ children, tab }) => {
  return <section className={cls("flex flex-col md:gap-[4px]", tab ? "pl-[4px]" : "")}>{children}</section>;
};

export const Underline: FC<NoneProps> = () => {
  return <hr className={cls("w-[92%] h-px", "bg-primary", "border-0", "mb-[4px]")} />;
};

export const Contents: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className="pl-[8px] md:pl-[12px]">{children}</div>;
};

export const PresonalInfo: FC<PresonalInfoProps> = ({ title, data, small, smallData }) => {
  return (
    <div className={cls("text-primary", small ? "text-[14px] md:text-[16px]" : "text-[15px] md:text-[18px]")}>
      <span>{title}</span>

      <span className={cls("text-secondary", smallData ? "text-[12px] md:text-[14px]" : "text-[14px] md:text-[16px]")}>
        {data}
      </span>
    </div>
  );
};

export const ViewButton: FC<ViewButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-[14px]">
      [ 보기 ]
    </button>
  );
};
