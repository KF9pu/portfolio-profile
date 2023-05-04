import useTheme from "@/theme/hooks/useTheme";
import { _ThemeCode } from "@/store/default";
import { cls } from "@/libs/common";
import Layout from "@/groups/layout";

export default function Home() {
  const { bg, text } = useTheme();

  return (
    <Layout title="Home" hasHeader>
      <main
        className={cls(
          "flex flex-col items-center justify-center gap-10",
          "w-screen h-screen",
          bg.primary,
          "transition-all"
        )}
      >
        <h1 className={cls(text.quinary, "")}>Choose Theme Color</h1>
      </main>
    </Layout>
  );
}
