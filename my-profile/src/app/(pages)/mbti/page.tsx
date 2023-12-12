"use client";

import { _blue, _green, _isLoading, _red } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, HTMLProps, useCallback, useLayoutEffect, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import useEndLoading from "@/hooks/useEndLoading";
import { E_testTypes, isValidTestType } from "@/enums/testTypes";
import useMBTI from "@/hooks/useMBTI";
import {
  I_IndexByQuestions,
  I_questions,
} from "@/constants/selfReportQuestions";

const Page: NextPage = () => {
  const router = useRouter();
  const [red, serRed] = useRecoilState(_red);
  const [green, setGreen] = useRecoilState(_green);
  const [blue, setBlue] = useRecoilState(_blue);
  const { getQuestions } = useMBTI();
  const [questions, setQuestions] = useState<I_questions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>();
  const [questionAnswers, setQuestionAnswer] = useState<I_IndexByQuestions[]>();
  useEndLoading();

  const searchParams = useSearchParams()!;

  const [props, api] = useSpring(() => ({}), []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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
      api.start({
        x: window.innerWidth,
      });
    }
  }, [searchParams]);

  return (
    <main
      className={cls(
        "flex items-center justify-center",
        "w-screen h-screen",
        "transition-all",
        "overflow-hidden"
      )}
    >
      <animated.div
        className={cls(
          "flex justify-center items-center",
          "fixed",
          "w-screen h-screen",
          "bg-red-50",
          "z-[0]",
          searchParams.get("type") ? "" : "translate-x-[100vw]"
        )}
        style={{ ...props, backgroundColor: `rgba(${red},${green},${blue},1)` }}
      >
        <div
          className={cls(
            "flex",
            "relative",
            "w-[90vw] h-[70vh]",
            "border",
            "overflow-hidden",
            "text-white",
            "p-[12px]",
            "overflow-hidden"
          )}
        >
          {questions.map(({ question }, index) => {
            return (
              <div
                className={cls(
                  "absolute",
                  "w-[92%]",
                  currentQuestion === index
                    ? "translate-x-0"
                    : "translate-x-[100vw]"
                )}
              >
                {question}
              </div>
            );
          })}
          {currentQuestion !== undefined ? (
            <>
              {currentQuestion !== 0 ? <QuestionArrow left /> : null}
              {currentQuestion !== questions.length ? <QuestionArrow /> : null}
            </>
          ) : null}
        </div>
      </animated.div>
      <div
        className={cls(
          "flex flex-col justify-center items-center gap-[12px]",
          "px-[16px] py-[24px]"
        )}
      >
        <SelectInspectionTypeBox
          onClick={() =>
            router.push(
              "/mbti" +
                "?" +
                createQueryString("type", E_testTypes.quick.toString())
            )
          }
        >
          빠른 검사
        </SelectInspectionTypeBox>
        <SelectInspectionTypeBox
          onClick={() =>
            router.push(
              "/mbti" +
                "?" +
                createQueryString("type", E_testTypes.normal.toString())
            )
          }
        >
          일반 검사
        </SelectInspectionTypeBox>
        <SelectInspectionTypeBox
          onClick={() =>
            router.push(
              "/mbti" +
                "?" +
                createQueryString("type", E_testTypes.thorough.toString())
            )
          }
        >
          정밀 검사
        </SelectInspectionTypeBox>
      </div>
    </main>
  );
};

export default Page;

const SelectInspectionTypeBox: FC<HTMLProps<HTMLDivElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <div
      className={cls(
        "flex justify-center items-center",
        "w-[160px] h-[120px]",
        "border",
        "shadow-lg",
        "rounded-[12px]"
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

interface QuestionArrowProps extends HTMLProps<HTMLDivElement> {
  left?: true;
}

const QuestionArrow: FC<QuestionArrowProps> = ({ left, ...props }) => {
  return (
    <div
      className={cls(
        "flex",
        "absolute bottom-[12px] ",
        left ? "left-[12px]" : "right-[12px]"
      )}
      {...props}
    >
      <div
        className={cls(
          "w-[36px] h-[36px]",
          "bg-[url('/images/right-arrow.png')] bg-cover bg-center",
          left ? "rotate-180" : ""
        )}
      />
    </div>
  );
};
