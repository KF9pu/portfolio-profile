import Layout from "@/groups/layout";
import { cls } from "@/libs/common";
import useTheme from "@/groups/theme/useTheme";
import type { NextPage } from "next";
const Index: NextPage = () => {
  const { ThemeCode } = useTheme();

  return (
    <Layout hasHeader title="Three">
      <div
        className={cls(
          "flex flex-col items-center justify-center gap-10",
          "w-screen h-screen",
          "transition-all",
          "bg-primary",
          `theme-${ThemeCode}`
        )}
      >
        <h1>three main</h1>
      </div>
    </Layout>
  );
};

export default Index;
