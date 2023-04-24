import useTheme from "@/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import { cls } from "@/libs/common";
import ColorChangeButtonLlist from "@/groups/home/ColorChangeButtonLlist";
import { useEffect } from "react";

export default function Home() {
  const {
    default: { bg, text, border, shadow },
    hover: { bgHover, borderHover, shadowHover, textHover },
    active: { bgActive, borderActive, shadowctive, textActive },
  } = useTheme();

  useEffect(() => {
    console.log("bgbgbgbg : ", bg);
  }, [bg]);

  return (
    /* TODO: text, border color 설정 */
    <main
      className={cls(
        "flex flex-col items-center justify-center gap-10",
        "w-screen h-screen",
        bg.primary,
        "transition-all"
      )}
    >
      <h1 className={cls(text.primary, "")}>Choose Theme Color</h1>
      <ColorChangeButtonLlist />
    </main>
  );
}
