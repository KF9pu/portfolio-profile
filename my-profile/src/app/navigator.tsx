"use client";

import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { useLayoutEffect, useRef } from "react";
import { _isDropDown } from "./recoilContextProvider";
import { useGesture } from "@use-gesture/react";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import floatingButtonColors from "@/constants/floatingButtonColors";

interface navigatorProps {}

const Navigator: FC<navigatorProps> = ({}) => {
  const buttonRef = useRef<HTMLDivElement>(null!);
  const avatarRefs = useRef<HTMLDivElement[]>([]);
  const avatarRefInitialPositions = useRef<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null!);

  const isVisible = useRef(false);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    []
  );

  const [avatarSprings, avatarApi] = useSprings(
    floatingButtonColors.length,
    i => ({
      y: 0,
      opacity: 0,
    }),
    []
  );

  useLayoutEffect(() => {
    if (avatarRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      avatarRefInitialPositions.current = avatarRefs.current.map(
        node => buttonY - node.getBoundingClientRect().y
      );
    }

    avatarApi.start(i => ({
      y: avatarRefInitialPositions.current[i],
      opacity: 1,
      immediate: true,
    }));
  }, []);

  const backgroundTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const avatarTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const bindGestures = useGesture({
    onClick: ({ event }) => {
      if (!isVisible.current) {
        if (backgroundTimeoutRef.current) {
          clearTimeout(backgroundTimeoutRef.current);
        }
        if (avatarTimeoutRef.current) {
          clearTimeout(avatarTimeoutRef.current);
        }

        isVisible.current = true;

        api.start({
          opacity: 1,
        });

        avatarApi.start({
          y: 0,
        });
      } else {
        api.start({
          opacity: 0,
        });

        avatarApi.start(i => ({
          y: avatarRefInitialPositions.current[i],
          onRest: () => {
            isVisible.current = false;
          },
        }));
      }
    },
    onHover: ({ hovering }) => {
      if (hovering) {
        if (backgroundTimeoutRef.current) {
          clearTimeout(backgroundTimeoutRef.current);
        }
        if (avatarTimeoutRef.current) {
          clearTimeout(avatarTimeoutRef.current);
        }

        isVisible.current = true;

        api.start({
          opacity: 1,
        });

        avatarApi.start({
          y: 0,
        });
      } else {
        backgroundTimeoutRef.current = setTimeout(() => {
          api.start({
            opacity: 0,
          });
        }, 500);

        avatarTimeoutRef.current = setTimeout(() => {
          avatarApi.start(i => ({
            y: avatarRefInitialPositions.current[i],
            onRest: () => {
              isVisible.current = false;
            },
          }));
        }, 650);
      }
    },
  });

  const {
    onPointerEnter,
    onPointerLeave,
    onClick,
    onPointerDown,
    ...restGestures
  } = bindGestures();

  const handlePointerDown =
    (isBackground: boolean) => (e: React.PointerEvent<HTMLElement>) => {
      if (isBackground && !isVisible.current) {
        return;
      }

      if (onPointerDown) {
        onPointerDown(e);
      }
    };

  return (
    <>
      <animated.div
        className={cls(
          "flex flex-col items-center gap-[8px]",
          "absolute",
          "p-[12px]",
          "rounded-[8px]",
          "bottom-[12px] right-[12px]"
        )}
        ref={containerRef}
        onPointerLeave={onPointerLeave}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,
          backgroundColor: opacity.to(o => `rgba(0,0,0,${0.2 * o})`),
        }}
      >
        <animated.button
          className={cls(
            "w-[calc(100% - 16px)] h-[17px]",
            "rounded-[8px]",
            "bg-[#cccccc33]",
            "mx-[8px] mb-[4px]",
            "rotate-90",
            "z-[100]"
          )}
          style={{ opacity }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </animated.button>
        {avatarSprings.map((springs, index) => {
          return (
            <animated.div
              key={`color${floatingButtonColors[index]}${index}`}
              ref={ref => (avatarRefs.current[index] = ref!)}
              className={cls("w-[56px] h-[56px]", "rounded-full", "")}
              style={{
                ...springs,
                backgroundColor: floatingButtonColors[index],
              }}
            ></animated.div>
          );
        })}

        <animated.div
          ref={buttonRef}
          className={cls(
            "flex justify-center items-center",
            "rounded-full",
            "w-[56px] h-[56px]",
            "bg-white",
            "z-[0]"
          )}
          onClick={onClick}
          onPointerEnter={onPointerEnter}
          onPointerDown={handlePointerDown(false)}
          {...restGestures}
          style={{
            boxShadow: opacity.to(
              o => `0px 3px 8px 2px rgba(0,0,0,${0.4 * 1 - o})`
            ),
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#1a1a1a"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M128,24A104,104,0,0,0,36.8,178l-8.5,29.9a16.1,16.1,0,0,0,4,15.8,15.8,15.8,0,0,0,15.7,4l30-8.5A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
          </svg>
        </animated.div>
      </animated.div>
    </>
  );
};
export default Navigator;
