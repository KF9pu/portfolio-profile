import type { FC } from "react";
import React from "react";
import Title from "../../../common/componenets/Title";
import useMyinfo from "@/common/hooks/useMyinfo";
import { Contents, MainSection, PresonalInfo, Section, Underline, ViewButton } from "./MePageSub";

interface MePageProps {}

const MePage: FC<MePageProps> = ({}) => {
  const { yearsOfService, hobys, name, bloodType, residence, mbti, gender, color, age, born } = useMyinfo();
  return (
    <MainSection>
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
          <PresonalInfo title="취미 : " data={hobys} />
          <PresonalInfo title="거주지 : " data={residence} />
        </Contents>
      </Section>

      <Section tab>
        <Title sbig>✔ 연혁</Title>
        <Contents>
          <ViewButton history />
        </Contents>
      </Section>

      <Section tab>
        <Title normal>✔ 자기소개서</Title>
        <Contents>
          <ViewButton selfIntroduction />
        </Contents>
      </Section>
    </MainSection>
  );
};
export default MePage;
