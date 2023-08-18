import { SpotInfos } from "@/common/constants";
import { cls } from "@/common/libs";
import Image from "next/image";
import { useRef, type FC, useEffect } from "react";
import useTheme from "@/groups/theme/useTheme";

interface IntroPageProps {}

const IntroPage: FC<IntroPageProps> = ({}) => {
  const { ThemeCode } = useTheme();

  return (
    <div className={cls("flex flex-col md:flex-row gap-[40px]", "h-full")}>
      {/* <div
        className={cls(
          "relative",
          "w-full md:w-[50%]",
          "h-[50%] md:h-full",
          "border border-primary rounded-xl",
          "bg-[url('/images/ReadyPlayerMeImage.jpg')] bg-no-repeat bg-cover bg-center"
        )}
      /> */}
      <div
        className={cls("flex flex-col gap-[12px]", "w-full h-full", "overflow-y-scroll", "text-secondary", "pt-[20px]")}
      >
        <h1 className={cls("text-[24px] text-primary")}>안녕하세요!</h1>
        <div className="flex gap-[4px]">
          <p>이 페이지는 현재 </p>
          <div className="flex gap-[4px]">
            {SpotInfos.map((item, index) => {
              return (
                <p key={`_SpotInfos${index}`}>
                  {item.stand.name}
                  {index !== 4 ? ", " : ""}
                </p>
              );
            })}
          </div>
          <p>으로 구성되어 있어요 !</p>
        </div>
        <div className={cls("flex flex-col gap-[4px]", "text-primary")}>
          <p>0. {SpotInfos[0].stand.name} : 포트폴리오 프로젝트 소개</p>
          <p>1. {SpotInfos[1].stand.name} : 자기 소개 & 경력사항</p>
          <p>2. {SpotInfos[2].stand.name} : 게시판 ( 준비중 )</p>
          <p>3. {SpotInfos[3].stand.name} : 기술 스텍</p>
          <p>4. {SpotInfos[4].stand.name} : 관리 패널 ( 준비중 )</p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <h1>* 이 프로젝트에서 사용한 기술</h1>
          <div className="pl-[20px]">
            <p>◾ Front</p>
            <div className="pl-[20px]">
              <p>- javascript, typescript, react (nextjs)</p>
              <p>- tailwindcss</p>
              <p>- recoli</p>
              <p>- threejs</p>
            </div>
          </div>
          <div className="pl-[20px]">
            <p>◾ Back</p>
            <div className="pl-[20px]">
              <p>- javascript, typescript, nextjs</p>
              <p>- planetscale ( 준비중 )</p>
            </div>
          </div>
          <div className="pl-[20px]">
            <p>◾ 형상관리</p>
            <div className="pl-[20px]">
              <p>- Github</p>
              <p>- Github Desktop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroPage;
