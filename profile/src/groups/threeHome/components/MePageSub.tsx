import { NoneProps, OnlyChildrenProps } from "@/common/interface";
import { FC, useEffect } from "react";
import { PresonalInfoProps, SectionProps, ViewButtonProps } from "../interface/MePage";
import { cls } from "@/common/libs";
import useDisplay from "@/common/hooks/useDisplay";
import { useSetRecoilState } from "recoil";
import { _historyIsOpen, _selfIntroductionIsOpen } from "@/store/default";
import { gsap } from "gsap";
import Title from "@/common/componenets/Title";

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

export const ViewButton: FC<ViewButtonProps> = ({ history, selfIntroduction }) => {
  const { isDesktop } = useDisplay();
  const setHistoryIsOpen = useSetRecoilState(_historyIsOpen);
  const setSelfIntroductionIsOpen = useSetRecoilState(_selfIntroductionIsOpen);

  function Open() {
    if (history) setHistoryIsOpen(prev => !prev);
    if (selfIntroduction) setSelfIntroductionIsOpen(prev => !prev);
  }
  return (
    <button
      onClick={() => {
        if (!isDesktop) Open();
      }}
      onMouseOver={() => {
        if (isDesktop) Open();
      }}
      className={cls("text-[14px] hover:text-quaternary", "transition-all")}
    >
      [ 보기 ]
    </button>
  );
};

export const MyHistory: FC<NoneProps> = ({}) => {
  const historys = [
    ["1992.02", "인생의 시작"],
    ["1998.02", "청주 원광유치원 졸업"],
    ["2004.02", "대전 가양초등학교 졸업"],
    ["2007.02", "대전 우송중학교 졸업"],
    ["2010.02", "대전 우송고등학교 졸업"],
    ["2010.03", "군산대학교 물리학과 입학"],
    ["2011.09", "군산 아르바이트"],
    ["2014.01", "육군 병장 전역"],
    ["2014.12", "군산대학교 물리학과 중퇴"],
    ["2015.03", "서울 두산타워 보안대원"],
    ["2015.05", "서울 삼성에어컨 설치 보조"],
    ["2016.06", "군산 OCI 보안대원"],
    ["2016.12", "군산 아르바이트"],
    ["2017.03", "을지대병원 간호보조"],
    ["2017.06", "대전 KT 영업사원"],
    ["2019.05", "진천 아트밸리 조리팀"],
    ["2019.06", "자전거 국토종주"],
    ["2019.09", "건설업 막노동"],
    ["2019.11", "목수 보조"],
    ["2020.06", "서울 자바기반웹개발 수료"],
    ["2021.05", "서울 제스트CNS SI팀"],
    ["2023.05", "서울 알타바그룹 Infra팀"],
  ];

  return (
    <MyHistoryIntroduction>
      <div className={cls("flex flex-col gap-[4px]", "")}>
        {historys.map((history, index) => {
          return (
            <div className={cls("flex gap-[4px]", "hover:text-quinary")}>
              {history.map((item, index) => {
                return (
                  <span>
                    {item}
                    {index === 0 ? " :" : ""}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </MyHistoryIntroduction>
  );
};

export const MyIntroduction: FC<NoneProps> = ({}) => {
  const Section: FC<NoneProps> = () => {
    return <section></section>;
  };

  return (
    <MyHistoryIntroduction>
      <div className="">
        <Title isQuaternary big>
          자기소개서
        </Title>
      </div>
    </MyHistoryIntroduction>
  );
};

const MyHistoryIntroduction: FC<OnlyChildrenProps> = ({ children }) => {
  const setHistoryIsOpen = useSetRecoilState(_historyIsOpen);
  const setSelfIntroductionIsOpen = useSetRecoilState(_selfIntroductionIsOpen);

  useEffect(() => {
    gsap.to(".AppearAni", { opacity: 100 });
  }, []);

  return (
    <article
      className={cls(
        "AppearAni",
        "fixed top-0 left-0 z-[101]",
        "flex flex-col justify-center items-center gap-[8px]",
        "w-screen h-screen",
        "bg-primary opacity-0",
        "text-quaternary text-[13px]",
        "transition-all duration-500",
        "px-[4vw] py-[2vh]"
      )}
    >
      <div
        className={cls(
          "flex flex-col justify-center items-center",
          "w-full h-full",
          "",
          "border border-quaternary rounded-2xl"
        )}
      >
        {children}
      </div>
      <button
        onClick={() => {
          setHistoryIsOpen(false);
          setSelfIntroductionIsOpen(false);
        }}
        className={cls("w-full", "py-[1vh]", "border border-quaternary rounded-2xl")}
      >
        닫기
      </button>
    </article>
  );
};
