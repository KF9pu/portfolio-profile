import useDisplay from "@/common/hooks/useDisplay";
import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import useMyinfo from "@/common/hooks/useMyinfo";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import React, { useEffect, type FC, useRef, useState } from "react";
import SplitType from "split-type";

interface BottomSectionProps {}

const BottomSection: FC<BottomSectionProps> = ({}) => {
  const { ThemeCode } = useTheme();
  const { isMobile } = useDisplay();
  const sectionRef = useRef(null);
  const [repeat, setRepeat] = useState<NodeJS.Timeout>();
  const { yearsOfService } = useMyinfo();
  const router = useRouter();

  useEffect(() => {
    if (repeat) {
      clearTimeout(repeat);
    }
    setRepeat(
      setTimeout(() => {
        gsap.to(sectionRef.current, { y: isMobile ? -5 : -160, duration: 1, ease: "bounce.out" });

        const textAniPolygon = new SplitType(".textAniPolygon");
        gsap.to(".char", {
          y: 0,
          stagger: 0.1,
          duration: 0.2,
          delay: 0.1,
        });
        gsap.to(".buttonAni", {
          y: 0,
          duration: 1,
          delay: 3,
          ease: "none",
        });
      }, 1000)
    );
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className={cls(
        "flex flex-col justify-center items-center gap-6",
        "fixed bottom-0 left-0",
        "mx-[5px]",
        "bg-primary",
        "border-2 rounded-md md:h-[350px] md:translate-y-[350px]",
        "h-[30vh] translate-y-[30vh]",
        "select-none",
        "w-[calc(100%-10px)] md:w-[calc(30%-10px)]  md:translate-x-[120%]",
        `theme-${ThemeCode}`
      )}
    >
      <div>
        <Text isTitle>안녕하세요 !</Text>
        <Text>{yearsOfService}년차 개발자 홍성화 입니다 !</Text>
        <Text isEmphasis>아래 버튼을 눌러 주세요!</Text>
      </div>
      <div className={cls("textPolygon")}>
        <button
          className={cls(
            "buttonAni",
            "text-quaternary font-DNF",
            "border",
            "w-[212px] h-[36px]",
            "rounded-xl",
            "transition-all",
            "translate-y-[100px]",
            "hover:bg-quaternary hover:text-primary"
          )}
          onClick={() => router.push("/three")}
        >
          Click Here!
        </button>
      </div>
    </section>
  );
};
export default BottomSection;

interface TextProps {
  isTitle?: true;
  isEmphasis?: true;
  children: React.ReactNode;
}

const Text: FC<TextProps> = ({ isTitle, isEmphasis, children }) => {
  return (
    <p
      className={cls(
        "textAniPolygon font-DNF",
        isEmphasis ? "text-tertiary" : "text-quaternary",
        isTitle ? "text-[24px]" : ""
      )}
    >
      {children}
    </p>
  );
};
