import { Inter } from "next/font/google";
import useTheme from "@/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import SetColorButton from "@/theme/SetColorButton";
import { cls } from "@/libs/common";

export default function Home() {
  const {
    bgColor,
    bgClickColor,
    bgHoverColor,
    borderClickColor,
    borderColor,
    borderHoverColor,
    textClickColor,
    textColor,
    textHoverColor,
  } = useTheme();

  return (
    /* TODO: text, border color 설정 */
    <main
      className={cls(
        "flex flex-col items-center justify-center gap-10",
        "w-screen h-screen",
        bgColor,
        "transition-all"
      )}
    >
      <div className={cls("flex flex-col gap-2")}>
        <SetColorButton ThemeCode="light-red">light red</SetColorButton>
        <SetColorButton ThemeCode="light-green">light green</SetColorButton>
        <SetColorButton ThemeCode="light-blue">light blue</SetColorButton>
        <SetColorButton ThemeCode="light-pink">light pink</SetColorButton>
        <SetColorButton ThemeCode="dark-red">dark red</SetColorButton>
        <SetColorButton ThemeCode="dark-blue">dark blue</SetColorButton>
        <SetColorButton ThemeCode="dark-green">dark green</SetColorButton>
        <SetColorButton ThemeCode="dark-pupple">dark pupple</SetColorButton>
        <SetColorButton ThemeCode="dark-gold">dark gold</SetColorButton>
      </div>
      {/* TODO: 프로젝트 소개/설명? */}
      <div
        className={cls(
          "p-[200px]",
          "text--",
          bgColor,
          bgClickColor,
          bgHoverColor,
          borderClickColor,
          borderColor,
          borderHoverColor,
          textClickColor,
          textColor,
          textHoverColor,
          "transition-all delay-200"
        )}
      >
        ThemeTest
      </div>
    </main>
  );
}
