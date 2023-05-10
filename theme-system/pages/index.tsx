import useTheme from "@/theme/hooks/useTheme";
import { _ThemeCode } from "@/store/default";
import { cls } from "@/libs/common";
import ColorChangeButtonLlist from "@/groups/home/ColorChangeButtonLlist";
import { useRecoilValue } from "recoil";

export default function Home() {
  const ThemeCode = useRecoilValue(_ThemeCode);

  return (
    /* TODO: text, border color 설정 */
    <main
      className={cls(
        "flex flex-col items-center justify-center gap-10",
        "w-screen h-screen",
        "bg-primary",
        "transition-all",
        `theme-${ThemeCode}`
      )}
    >
      <h1 className={cls("text-quinary")}>Choose Theme Color</h1>
      <ColorChangeButtonLlist />
    </main>
  );
}
