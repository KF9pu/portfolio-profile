import type { FC } from "react";
import React from "react";
import Title from "../../home/components/Title";
import useMyinfo from "@/common/hooks/useMyinfo";
import { cls } from "@/common/libs";
import { NoneProps, OnlyChildrenProps } from "@/common/interface";
import { PresonalInfoProps, SectionProps, ViewButtonProps } from "../interface/MePage";

interface MePageProps {}

const MePage: FC<MePageProps> = ({}) => {
  const { yearsOfService, hobys, name, bloodType, residence, mbti, gender, color, age, born } = useMyinfo();
  return (
    <Main>
      <Section>
        <Title big>자기소개</Title>
        <Underline />
      </Section>

      <Section tab>
        <Title normal>✔ 신상정보</Title>
        <Contents>
          <PresonalInfo title="이름 : " data={name} />
          <PresonalInfo title="생년월일 : " data={born + ` (${age})`} smallData />
          <PresonalInfo title="성별 : " data={gender} />
          <PresonalInfo title="혈액형 : " data={bloodType} />
          <PresonalInfo title="MBTI : " data={mbti} small smallData />
          <PresonalInfo title="Color : " data={color} small smallData />
          <PresonalInfo title="거주지 : " data={residence} />
          <PresonalInfo title="취미 : " data={hobys} />
        </Contents>
      </Section>

      <Section tab>
        <Title normal>✔ 연혁</Title>
        <Contents>
          <ViewButton onClick={() => {}} />
        </Contents>
      </Section>

      <Section tab>
        <Title normal>✔ 자기소개서</Title>
        <Contents>
          <ViewButton onClick={() => {}} />
        </Contents>
      </Section>
    </Main>
  );
};
export default MePage;

const Main: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className={cls("flex flex-col gap-[8px] md:gap-[12px]", "text-secondary")}>{children}</div>;
};

const Section: FC<SectionProps> = ({ children, tab }) => {
  return <section className={cls("flex flex-col md:gap-[4px]", tab ? "pl-[4px]" : "")}>{children}</section>;
};

const Underline: FC<NoneProps> = () => {
  return <hr className={cls("w-[92%] h-px", "bg-primary", "border-0", "mb-[4px]")} />;
};

const Contents: FC<OnlyChildrenProps> = ({ children }) => {
  return <div className="pl-[8px] md:pl-[12px]">{children}</div>;
};

const PresonalInfo: FC<PresonalInfoProps> = ({ title, data, small, smallData }) => {
  return (
    <div className={cls("text-primary", small ? "text-[14px] md:text-[16px]" : "text-[18px]")}>
      <span>{title}</span>

      <span className={cls("text-secondary", smallData ? "text-[12px] md:text-[14px]" : "text-[14px] md:text-[16px]")}>
        {data}
      </span>
    </div>
  );
};

const ViewButton: FC<ViewButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>[ 보기 ]</button>;
};
