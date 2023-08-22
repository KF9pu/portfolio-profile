import { SpotInfos } from "@/common/constants";
import { cls } from "@/common/libs";
import { type FC } from "react";
import useTheme from "@/groups/theme/useTheme";
import Link from "next/link";
import Title from "../../home/components/Title";
import { Article, Section, SkillBox } from "./IntroPageSub";

// TODO: 모바일 폰트 크기 조정
interface IntroPageProps {}

const IntroPage: FC<IntroPageProps> = ({}) => {
  const { ThemeCode } = useTheme();

  return (
    <div className={cls("flex flex-col gap-[40px]", "h-full")}>
      <div
        className={cls(
          "flex flex-col gap-[12px] md:gap-[20px]",
          "w-full h-full",
          "overflow-y-scroll",
          "text-secondary"
        )}
      >
        <Title big>프로젝트 소개</Title>

        <Section>
          <Title normal>✔ 목차</Title>
          <ul className={cls("flex flex-col gap-[4px]", "pl-[8px]")}>
            {SpotInfos.map((item, index) => {
              return (
                <li className="text-[12px] md:text-[16px]" key={`_SpotInfos[${index}] : dec`}>
                  <span className="text-primary text-[14px] md:text-[17px]">- {item.stand.name} :</span>{" "}
                  {item.stand.dec}
                </li>
              );
            })}
          </ul>
        </Section>

        <Section>
          <Title normal>✔ 사용 기술</Title>
          <Article>
            <Title ssmall>Front</Title>
            <SkillBox>
              <li>- javascript, typescript</li>
              <li>- react (nextjs)</li>
              <li>- tailwindcss</li>
              <li>- recoli</li>
              <li>- threejs</li>
            </SkillBox>
          </Article>
          <Article>
            <Title ssmall>Back</Title>
            <SkillBox>
              <li>- javascript, typescript</li>
              <li>- api (nextjs)</li>
              <li>- prisma</li>
              <li>- planetscale ( 준비중 )</li>
            </SkillBox>
          </Article>
          <Article>
            <Title small>형상관리</Title>
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
