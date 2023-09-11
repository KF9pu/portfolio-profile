import { NoneProps, OnlyChildrenProps } from "@/common/interface";
import { FC } from "react";
import { PresonalInfoProps, SectionProps, ViewButtonProps } from "../interface/MePage";
import { cls } from "@/common/libs";
import { useSetRecoilState } from "recoil";
import { _careerIsOpen, _historyIsOpen, _selfIntroductionIsOpen } from "@/store/default";

export const MainSection: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className={cls("flex flex-col gap-[8px] md:gap-[12px]", "text-secondary")}>{children}</div>;
};

export const Section: FC<SectionProps> = ({ children, tab }) => {
  return <section className={cls("flex flex-col  md:gap-[4px]", tab ? "pl-[4px]" : "")}>{children}</section>;
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

export const ViewButton: FC<ViewButtonProps> = ({ history, selfIntroduction, career }) => {
  const setHistoryIsOpen = useSetRecoilState(_historyIsOpen);
  const setSelfIntroductionIsOpen = useSetRecoilState(_selfIntroductionIsOpen);
  const setCareerIsOpen = useSetRecoilState(_careerIsOpen);

  function Open() {
    if (history) setHistoryIsOpen(true);
    if (selfIntroduction) setSelfIntroductionIsOpen(true);
    if (career) setCareerIsOpen(true);
  }

  return (
    <button onClick={() => Open()} className={cls("text-[14px] hover:text-quaternary", "transition-all")}>
      [ 보기 ]
    </button>
  );
};

export const ModalLayout: FC<OnlyChildrenProps> = ({ children }) => {
  const setHistoryIsOpen = useSetRecoilState(_historyIsOpen);
  const setSelfIntroductionIsOpen = useSetRecoilState(_selfIntroductionIsOpen);
  const setCareerIsOpen = useSetRecoilState(_careerIsOpen);

  return (
    <article
      className={cls(
        "AppearAni",
        "fixed top-0 left-0 z-[101]",
        "flex flex-col justify-center items-center gap-[8px]",
        "w-screen h-screen",
        "bg-primary md:bg-[rgba(0,0,0,.9)]",
        "text-quaternary text-[13px]",
        "px-[4vw] py-[2vh]"
      )}
    >
      <div
        className={cls(
          "flex flex-col justify-center items-center",
          "border border-quaternary rounded-xl",
          "w-full h-full md:max-w-[420px] md:max-h-[700px]",
          "bg-primary"
        )}
      >
        {children}
      </div>
      <button
        onClick={() => {
          setHistoryIsOpen(false);
          setSelfIntroductionIsOpen(false);
          setCareerIsOpen(false);
        }}
        className={cls("w-full  md:max-w-[420px]", "py-[1vh]", "border border-quaternary rounded-xl")}
      >
        닫기
      </button>
    </article>
  );
};
