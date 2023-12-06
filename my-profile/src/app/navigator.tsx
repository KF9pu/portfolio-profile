"use client";

import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { _isDropDown } from "./recoilContextProvider";
import { useGesture } from "@use-gesture/react";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import floatingButtonCostans from "@/constants/floatingButtonCostans";
import { useRouter } from "next/navigation";

interface navigatorProps {}

const Navigator: FC<navigatorProps> = ({}) => {
  const buttonRef = useRef<HTMLDivElement>(null!);
  const avatarRefs = useRef<HTMLDivElement[]>([]);
  const avatarRefInitialPositions = useRef<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null!);
  const isVisible = useRef(false);
  const [floatingFlipped, setFloatingFlipped] = useState(false);
  const [menuFlipped, setMenuFlipped] = useState(false);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    []
  );

  const [avatarSprings, avatarApi] = useSprings(
    floatingButtonCostans.length,
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
    onClick: () => {
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
        setFloatingFlipped(true);
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
        setFloatingFlipped(false);
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

        setFloatingFlipped(true);
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
          setFloatingFlipped(false);
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
            "w-full h-[56px]",
            "p-[12px]",
            "bg-white",
            "rounded-full"
          )}
          onClick={() => setMenuFlipped(prev => !prev)}
          style={{ opacity }}
        >
          <div
            className={cls(
              "w-full h-full",
              "bg-[url('/images/exchange.png')] bg-contain bg-center bg-no-repeat"
            )}
          />
        </animated.button>
        {avatarSprings.map((springs, index) => {
          const { front: frontConstant, back: backConstant } =
            floatingButtonCostans[index];
          return (
            <animated.div
              key={`avatarSprings${index}`}
              ref={ref => (avatarRefs.current[index] = ref!)}
              className={cls("w-[56px] h-[56px]", "rounded-full")}
              style={{
                ...springs,
              }}
            >
              <MenuReverseDiv flipped={menuFlipped} index={index}>
                {backConstant.title}
              </MenuReverseDiv>
              <MenuReverseDiv front flipped={menuFlipped} index={index}>
                {frontConstant.title}
              </MenuReverseDiv>
            </animated.div>
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
          <FlootingButtonReverseDiv flipped={floatingFlipped} front />
          <FlootingButtonReverseDiv flipped={floatingFlipped} />
        </animated.div>
      </animated.div>
    </>
  );
};
export default Navigator;

interface FlootingButtonReverseDivProps {
  flipped: boolean;
  front?: true;
}

const FlootingButtonReverseDiv: FC<FlootingButtonReverseDivProps> = ({
  flipped,
  front,
}) => {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <a.div
      className={cls(
        "absolute",
        "w-[40px] h-[40px]",
        "bg-cover bg-no-repeat bg-center",
        "will-change-transform",
        "cursor-pointer",
        !front
          ? "rotate-180 bg-[url('/images/menu.png')]"
          : "bg-[url('/images/close.png')]"
      )}
      style={{ opacity: front ? opacity : opacity.to(o => 1 - o), transform }}
    />
  );
};

interface MenuReverseDivProps {
  flipped: boolean;
  front?: true;
  index: number;
  children: React.ReactNode;
}

const MenuReverseDiv: FC<MenuReverseDivProps> = ({
  flipped,
  front,
  index,
  children,
}) => {
  const router = useRouter();

  const { color, routePath } = front
    ? floatingButtonCostans[index].front
    : floatingButtonCostans[index].back;

  const { transform, opacity, backgroundColor } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    backgroundColor: color,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <a.div
      className={cls(
        "absolute",
        "flex justify-center items-center",
        "w-[56px] h-[56px]",
        "rounded-full",
        "will-change-transform",
        "cursor-pointer"
      )}
      style={{
        opacity: front ? opacity : opacity.to(o => 1 - o),
        transform,
        backgroundColor,
        rotateX: front ? "180deg" : "0deg",
      }}
      onClick={() => router.push(routePath)}
    >
      {children}
    </a.div>
  );
};
