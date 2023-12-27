"use client";

import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { animated, useSpring, useSprings, a } from "@react-spring/web";
import floatingButtonConstans from "@/constants/floatingButtonConstans";
import useLoadingRoute from "@/hooks/useLoadingRoute";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  _floatingFlipped,
  _isVisible,
  _menuFlipped,
} from "./recoilContextProvider";
import useNavigator from "@/hooks/useNavigator";

interface navigatorProps {}

const Navigator: FC<navigatorProps> = ({}) => {
  const [menuFlipped, setMenuFlipped] = useRecoilState(_menuFlipped);
  const floatingFlipped = useRecoilValue(_floatingFlipped);

  const {
    buttonRef,
    avatarRefs,
    containerRef,
    onClick,
    onPointerLeave,
    onPointerEnter,
    handlePointerDown,
    restGestures,
    opacity,
    x,
    y,
    avatarSprings,
    navCloseClick,
  } = useNavigator();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target as Node)
      ) {
        return;
      }
      navCloseClick();
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <animated.div
        className={cls(
          "flex flex-col items-center gap-[8px]",
          "absolute",
          "p-[8px]",
          "rounded-[8px]",
          "bottom-[4px] right-[4px]",
          "z-[10]"
        )}
        ref={containerRef}
        onPointerLeave={onPointerLeave}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,
          backgroundColor: opacity.to(o => `rgba(0,0,0,${0.5 * o})`),
        }}
      >
        <animated.button
          className={cls(
            "w-full h-[56px]",
            "p-[16px]",
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
          return (
            <animated.div
              key={`avatarSprings${index}`}
              ref={ref => (avatarRefs.current[index] = ref!)}
              className={cls(
                "flex justify-center items-center",
                "w-[56px] h-[56px]",
                "rounded-full"
              )}
              style={{
                ...springs,
              }}
            >
              <MenuReverseDiv
                flipped={menuFlipped}
                index={index}
                navCloseClick={navCloseClick}
              />
              <MenuReverseDiv
                front
                flipped={menuFlipped}
                index={index}
                navCloseClick={navCloseClick}
              />
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
            "border",
            "z-[10]"
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
  navCloseClick: () => void;
}

const MenuReverseDiv: FC<MenuReverseDivProps> = ({
  flipped,
  front,
  index,
  navCloseClick,
}) => {
  const { loadingRouter } = useLoadingRoute();

  const { color, routePath, title } = front
    ? floatingButtonConstans[index].front
    : floatingButtonConstans[index].back;

  const { transform, opacity, backgroundColor } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    backgroundColor: color,
    config: { mass: 5, tension: 1000, friction: 80 },
  });

  return (
    <a.div
      className={cls(
        "absolute",
        "justify-center items-center",
        "w-[54px] h-[54px]",
        "rounded-full",
        "will-change-transform",
        "cursor-pointer",
        "text-white",
        flipped ? (front ? "flex" : "hidden") : front ? "hidden" : "flex"
      )}
      style={{
        opacity: front ? opacity : opacity.to(o => 1 - o),
        transform,
        backgroundColor,
        rotateX: front ? "180deg" : "0deg",
      }}
      onClick={() => {
        navCloseClick();
        loadingRouter(routePath);
      }}
    >
      {title}
    </a.div>
  );
};
