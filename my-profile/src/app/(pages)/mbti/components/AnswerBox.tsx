import { useLayoutEffect, type FC } from "react";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import { cls } from "hsh-utils-string";
import { useSearchParams } from "next/navigation";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  _blue,
  _currentQuestion,
  _green,
  _questions,
  _red,
} from "@/app/recoilContextProvider";
import { E_testTypes, isValidTestType } from "@/enums/testTypes";
import useMBTI from "@/hooks/useMBTI";
import AnswerStartCard from "./AnswerStartCard";
import AnswerCard from "./AnswerCard";
import QuestionBox from "./QuestionBox";
import TestEndButton from "./TestEndButton";

interface AnswerBoxBoxProps {}

const AnswerBox: FC<AnswerBoxBoxProps> = ({}) => {
  const searchParams = useSearchParams()!;

  const [red, serRed] = useRecoilState(_red);
  const [green, setGreen] = useRecoilState(_green);
  const [blue, setBlue] = useRecoilState(_blue);
  const [questions, setQuestions] = useRecoilState(_questions);
  const setCurrentQuestion = useSetRecoilState(_currentQuestion);
  const { getQuestions } = useMBTI();

  const [props, api] = useSpring(() => ({}), []);

  useLayoutEffect(() => {
    const testTypeString = searchParams.get("type");

    if (testTypeString) {
      api.start({
        x: 0,
      });

      if (isValidTestType(testTypeString)) {
        const testType: E_testTypes = E_testTypes[testTypeString];
        setQuestions(() => [...getQuestions(testType)]);
      } else {
        console.error("Invalid testType");
      }
    } else {
      setCurrentQuestion(undefined);
      api.start({
        x: window.innerWidth,
      });
    }
  }, [searchParams]);

  return (
    <animated.div
      className={cls(
        "fixed",
        "w-screen h-screen",
        "bg-red-50",
        "z-[11]",
        "overflow-y-scroll",
        searchParams.get("type") ? "" : "translate-x-[100vw]"
      )}
      style={{ ...props, backgroundColor: `rgba(${red},${green},${blue},1)` }}
    >
      <div
        className={cls(
          "flex flex-col justify-center items-center gap-[28px]",
          "w-full h-full",
          "min-h-[653px]",
          "px-[12px] py-[28px]"
        )}
      >
        <div
          className={cls(
            "flex justify-center items-center",
            "relative",
            "w-full h-full min-h-[440px]",
            "rounded-[12px]",
            "overflow-hidden",
            "text-black",
            "shadow-bold"
          )}
        >
          <AnswerStartCard />
          {questions.map((question, index) => {
            return (
              <AnswerCard
                key={`questions${index}`}
                index={index}
                questionInfo={question}
              />
            );
          })}
          <QuestionBox />
        </div>
        <TestEndButton />
      </div>
    </animated.div>
  );
};
export default AnswerBox;
