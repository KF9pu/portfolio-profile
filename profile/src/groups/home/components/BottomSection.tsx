import useDisplay from "@/common/hooks/useDisplay";
import { useMyinfo } from "@/common/hooks/useMyinfo";
import { cls } from "@/common/libs";
import useTheme from "@/groups/theme/useTheme";
import { gsap } from "gsap";
import React, { useEffect, type FC, useRef, useState } from "react";
import SplitType from "split-type";

interface BottomSectionProps {}

const BottomSection: FC<BottomSectionProps> = ({}) => {
  const { ThemeCode } = useTheme();
  const { isMobile } = useDisplay();
  const sectionRef = useRef(null);
  const [repeat, setRepeat] = useState<NodeJS.Timeout>();
  const {} = useMyinfo();

  useEffect(() => {
    if (repeat) {
      clearTimeout(repeat);
    }
    setRepeat(
      setTimeout(() => {
        console.log("isMobile : ", isMobile);
        gsap.to(sectionRef.current, { y: isMobile ? -5 : -100, duration: 1, ease: "bounce.out" });

        const textAniPolygon = new SplitType(".textAniPolygon");
        gsap.to(".char", {
          y: 0,
          stagger: 0.15,
          duration: 0.2,
          delay: 0.1,
        });
      }, 1000)
    );
  }, [isMobile]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        gsap.to(".buttonAni", {
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "bounce.out",
        });
      }, 5000);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cls(
        "flex flex-col justify-center items-center gap-6",
        "fixed bottom-0 left-0",
        "mx-[5px]",
        "bg-primary",
        "overflow-hidden",
        "border-4 rounded-md md:h-[450px] md:translate-y-[450px]",
        "h-[30vh] translate-y-[30vh]",
        "w-[calc(100%-10px)] md:w-[calc(50%-10px)]  md:translate-x-[50%]",
        `theme-${ThemeCode}`
      )}
    >
      <div>
        <Text isTitle>안녕하세요 !</Text>
        <Text>3년차 개발자 홍성화 입니다 !</Text>
        <Text isEmphasis>아래 버튼을 눌러 주세요!</Text>
      </div>
      <button
        className={cls(
          "buttonAni",
          "text-quaternary",
          "border",
          "w-[212px] h-[36px]",
          "rounded-xl",
          "hover:bg-quaternary hover:text-primary"
        )}
      >
        Click Here!
      </button>
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
      className={cls("textAniPolygon", isEmphasis ? "text-tertiary" : "text-quaternary", isTitle ? "text-[24px]" : "")}
    >
      {children}
    </p>
  );
};
