import { SpotInfos } from "@/common/constants";
import { cls } from "@/common/libs";
import Image from "next/image";
import { useRef, type FC, useEffect } from "react";
import useTheme from "@/groups/theme/useTheme";
import Link from "next/link";

interface IntroPageProps {}

const IntroPage: FC<IntroPageProps> = ({}) => {
  const { ThemeCode } = useTheme();

  return (
    <div className={cls("flex flex-col gap-[40px]", "h-full")}>
      <div className={cls("flex flex-col gap-[20px]", "w-full h-full", "overflow-y-scroll", "text-secondary")}>
        <Title big>프로젝트 소개</Title>

        <Section>
          <Title normal>✔ 목차</Title>
          <ul className={cls("flex flex-col gap-[4px]", "pl-[8px]")}>
            {SpotInfos.map((item, index) => {
              return (
                <li className="text-[14px]" key={`_SpotInfos[${index}] : dec`}>
                  <span className="text-primary text-[16px]">- {item.stand.name} :</span> {item.stand.dec}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section>
          <Title normal>✔ 사용 기술</Title>
          <Article>
            <Title small>▫ Front</Title>
            <SkillBox>
              <li>- javascript, typescript</li>
              <li>- react (nextjs)</li>
              <li>- tailwindcss</li>
              <li>- recoli</li>
              <li>- threejs</li>
            </SkillBox>
          </Article>
          <Article>
            <Title small>▫ Back</Title>
            <SkillBox>
              <li>- javascript, typescript</li>
              <li>- api (nextjs)</li>
              <li>- prisma</li>
              <li>- planetscale ( 준비중 )</li>
            </SkillBox>
          </Article>
          <Article>
            <Title normal>▫ 형상관리</Title>
            <SkillBox>
              <li>
                - github{" "}
                <Link
                  className={cls(
                    "hover:text-quaternary hover:underline underline-offset-4 decoration-2",
                    "transition-all"
                  )}
                  target="_blank"
                  href="https://github.com/KF9pu/portfolio-profile/tree/main/profile"
                >
                  [ Link ]
                </Link>
              </li>
              <li>- github Desktop</li>
            </SkillBox>
          </Article>
        </Section>
      </div>
    </div>
  );
};
export default IntroPage;

interface SectionProps {
  children: React.ReactNode;
}
const Section: FC<SectionProps> = ({ children }) => {
  return <section className="flex flex-col gap-[4px]">{children}</section>;
};

interface TitleProps {
  children: React.ReactNode;
  ssmall?: true;
  small?: true;
  normal?: true;
  big?: true;
}
const Title: FC<TitleProps> = ({ children, big, normal, small, ssmall }) => {
  return (
    <h1
      className={cls(
        "text-primary ",
        big ? "text-[20px]" : "",
        normal ? "text-[18px]" : "",
        small ? "text-[16px]" : "",
        ssmall ? "text-[14px]" : ""
      )}
    >
      {children}
    </h1>
  );
};

interface ArticleProps {
  children: React.ReactNode;
}
const Article: FC<ArticleProps> = ({ children }) => {
  return <article className={cls("pl-[4px] md:pl-[8px]")}>{children}</article>;
};

interface SkillBoxProps {
  children: React.ReactNode;
}
const SkillBox: FC<SkillBoxProps> = ({ children }) => {
  return <ul className={cls("pl-[8px] md:pl-[16px] text-[14px]")}>{children}</ul>;
};
