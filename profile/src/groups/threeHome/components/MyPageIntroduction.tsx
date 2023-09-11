import { NoneProps, OnlyChildrenProps } from "@/common/interface";
import { cls } from "@/common/libs";
import { useState, type FC, useEffect } from "react";
import { selfIntroduceTitles } from "../constants";
import { ModalLayout } from "./MePageSub";
import Title from "@/common/componenets/Title";
import useDisplay from "@/common/hooks/useDisplay";

export const MyPageIntroduction: FC<NoneProps> = ({}) => {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [pageXStart, setPageXStart] = useState(0);
  const [translateX, setTranslate] = useState(0);
  const { isMobile } = useDisplay();

  const handleDragTouchEnd = (event: React.DragEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const sectionIdxUp = () => {
      setSectionIdx(prev => (prev < 3 ? ++prev : prev));
    };

    const sectionIdxDown = () => {
      setSectionIdx(prev => (prev > 0 ? --prev : prev));
    };

    let pageX = 0;
    const minPageXMove = 90;
    if ("changedTouches" in event) pageX = event.changedTouches[0].pageX;
    else pageX = event.pageX;

    if (pageXStart - pageX < -minPageXMove) sectionIdxDown();
    else if (pageXStart - pageX > minPageXMove) sectionIdxUp();
  };

  useEffect(() => {
    if (isMobile) setTranslate(150 - sectionIdx * 100);
    else setTranslate(400);
  }, [sectionIdx]);

  return (
    <ModalLayout>
      <div className={cls("flex flex-col justify-center items-center gap-[8px]")}>
        <div
          draggable
          onDragStart={e => setPageXStart(e.pageX)}
          onDragEnd={e => handleDragTouchEnd(e)}
          onTouchStart={e => setPageXStart(e.changedTouches[0].pageX)}
          onTouchEnd={e => handleDragTouchEnd(e)}
          style={{ translate: isMobile ? `${translateX}vw` : `${translateX * 8}px` }}
          className={cls("flex justify-start items-start", "w-[400vw]", "transition-all")}
        >
          {selfIntroduceTitles.map(({ title, content }, i) => (
            <div
              key={`selfIntroduceTitlesSection_total_${i}`}
              className={cls(
                "flex flex-col",
                "",
                "w-[84vw] h-[76vh] md:w-[400px] md:max-h-[600px]",
                "mx-[8vw] md:mx-[10px]"
              )}
            >
              <Title isQuaternary small>
                {i + ". " + title}
              </Title>
              <Contents>{content}</Contents>
            </div>
          ))}
        </div>
        <ul className={cls("flex items-center justify-center gap-[8px]", "w-full", "", "text-tertiary")}>
          {selfIntroduceTitles.map(({ title }, i) => (
            <div
              key={`selfIntroduceTitlesSection_title_${i}`}
              className={cls(
                "flex justify-center items-center",
                "relative",
                "group",
                "w-[24px] h-[24px]",
                "border-quaternary rounded-full",
                sectionIdx === i ? "text-quaternary border-2" : ""
              )}
              onClick={() => setSectionIdx(i)}
            >
              <p className={cls("")}>{i}</p>
              <SpeechBubble>{title}</SpeechBubble>
            </div>
          ))}
        </ul>
      </div>
    </ModalLayout>
  );
};
export default MyPageIntroduction;

const Contents: FC<OnlyChildrenProps> = ({ children }) => {
  return (
    <div
      className={cls(
        "flex",
        "relative",
        "h-[72vh]",
        "my-[12px] py-[12px] px-[4px]",
        "border rounded-lg",
        "overflow-y-scroll"
      )}
    >
      <p className={cls("", "whitespace-pre-line")}>{children}</p>
    </div>
  );
};

const SpeechBubble: FC<OnlyChildrenProps> = ({ children }) => (
  <p
    className={cls(
      "speech-bubble",
      "hidden",
      "absolute top-[-44px] left-[12px]",
      "justify-center items-center",
      "w-[80px] h-[200%]",
      "text-primary",
      "bg-quaternary",
      "pb-[2px]",
      "md:group-hover:flex",
      "transition-all"
    )}
  >
    {children}
  </p>
);
