import useTheme from "@/groups/theme/useTheme";
import { _ThemeCode } from "@/store/default";
import { cls } from "@/libs/common";
import Layout from "@/groups/layout";

export default function Home() {
  const { ThemeCode } = useTheme();

  return (
    <Layout title="Home" hasHeader>
      <main
        className={cls(
          "flex flex-col items-center justify-center gap-10",
          "w-screen h-screen",
          "transition-all",
          "bg-primary",
          `theme-${ThemeCode}`
        )}
      >
        <h1 className={cls("")}>Choose Theme Color</h1>
      </main>
    </Layout>
  );
}
