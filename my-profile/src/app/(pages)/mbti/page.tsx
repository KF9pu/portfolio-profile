"use client";

import { _blue, _green, _isLoading, _red } from "@/app/recoilContextProvider";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, HTMLProps, useCallback, useLayoutEffect } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import useEndLoading from "@/hooks/useEndLoading";
import { E_testTypes, isValidTestType } from "@/enums/testTypes";
import useMBTI from "@/hooks/useMBTI";

const Page: NextPage = () => {
  const router = useRouter();
  const [red, serRed] = useRecoilState(_red);
  const [green, setGreen] = useRecoilState(_green);
  const [blue, setBlue] = useRecoilState(_blue);
  useEndLoading();
  const { getQuestion } = useMBTI();

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
        const testType: E_testTypes =
          E_testTypes[testTypeString as keyof typeof E_testTypes];
        const question = getQuestion(testType);
      } else {
        console.error("Invalid testType");
      }
    } else {
      api.start({
        x: window.innerWidth,
      });
    }

    {
      /* TODO: 검사 유형 선택 페이지 [빠른 검사 (40질문), 일반 검사 (80질문), 정밀 검사 (120개 질문)] */
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
          "fixed",
          "w-screen h-screen",
          "bg-red-50",
          "z-[0]",
          "translate-x-[100vw]"
        )}
        style={{ ...props }}
      >
        aa
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
