import {
  _floatingFlipped,
  _isVisible,
  _menuFlipped,
} from "@/app/recoilContextProvider";
import floatingButtonConstans from "@/constants/floatingButtonConstans";
import { useSpring, useSprings } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { useLayoutEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const useNavigator = () => {
  const buttonRef = useRef<HTMLDivElement>(null!);
  const avatarRefs = useRef<HTMLDivElement[]>([]);
  const avatarRefInitialPositions = useRef<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null!);
  // const isVisible = useRef(false);
  const [isVisible, setIsVisible] = useRecoilState(_isVisible);
  const setFloatingFlipped = useSetRecoilState(_floatingFlipped);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    []
  );

  const [avatarSprings, avatarApi] = useSprings(
    floatingButtonConstans.length,
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

  const navOpen = () => {
    if (backgroundTimeoutRef.current) {
      clearTimeout(backgroundTimeoutRef.current);
    }
    if (avatarTimeoutRef.current) {
      clearTimeout(avatarTimeoutRef.current);
    }

    setIsVisible(true);

    api.start({
      opacity: 1,
    });

    avatarApi.start({
      y: 0,
    });
    setFloatingFlipped(true);
  };

  const navCloseClick = () => {
    api.start({
      opacity: 0,
    });

    avatarApi.start(i => ({
      y: avatarRefInitialPositions.current[i],
      onRest: () => {
        setIsVisible(false);
      },
    }));
    setFloatingFlipped(false);
  };

  const navCloseHover = () => {
    backgroundTimeoutRef.current = setTimeout(() => {
      api.start({
        opacity: 0,
      });
    }, 500);

    avatarTimeoutRef.current = setTimeout(() => {
      avatarApi.start(i => ({
        y: avatarRefInitialPositions.current[i],
        onRest: () => {
          setIsVisible(false);
        },
      }));
      setFloatingFlipped(false);
    }, 650);
  };

  const bindGestures = useGesture({
    onClick: () => {
      if (!isVisible) {
        navOpen();
      } else {
        navCloseClick();
      }
    },
    onHover: ({ hovering }) => {
      if (hovering) {
        navOpen();
      } else {
        navCloseHover();
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
      if (isBackground && !isVisible) {
        return;
      }

      if (onPointerDown) {
        onPointerDown(e);
      }
    };

  return {
    containerRef,
    onPointerLeave,
    handlePointerDown,
    restGestures,
    x,
    y,
    opacity,
    avatarSprings,
    avatarRefs,
    onPointerEnter,
    buttonRef,
    onClick,
    navCloseClick,
  };
};

export default useNavigator;
