import { useLayoutEffect, type FC } from "react";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import { cls } from "hsh-utils-string";
import { useSearchParams } from "next/navigation";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  _blue,
  _currentQuestion,
  _green,
  _questions,
  _red,
} from "@/app/recoilContextProvider";
import { E_testTypes, isValidTestType } from "@/enums/testTypes";
import useMBTI from "@/hooks/useMBTI";
import QuestionBox from "./QuestionBox";
import AnswerSlider from "./AnswerSlider";

interface AnswerBoxBoxProps {}

const AnswerBox: FC<AnswerBoxBoxProps> = ({}) => {
  const searchParams = useSearchParams()!;
  const red = useRecoilValue(_red);
  const green = useRecoilValue(_green);
  const blue = useRecoilValue(_blue);
  const setQuestions = useSetRecoilState(_questions);
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
    <div
      className={cls(
        "fixed",
        "w-screen h-screen",
        "z-[11]",
        "overflow-y-scroll",
        "bg-[url('/images/mbti-background-m.jpg')] bg-cover bg-center bg-no-repeat"
      )}
    >
      <animated.div
        className={cls(
          "w-full h-full",
          "transition-all duration-500 ease-in-out",
          searchParams.get("type") ? "" : "translate-x-[100vw]"
        )}
        style={{
          ...props,
          backgroundColor: `rgba(${red},${green},${blue},.8)`,
        }}
      >
        <div
          className={cls(
            "flex flex-col justify-center items-start",
            "w-full h-full",
            "p-[12px]",
            "overflow-hidden"
          )}
        >
          <AnswerSlider />
          <QuestionBox />
        </div>
      </animated.div>
    </div>
  );
};
export default AnswerBox;
