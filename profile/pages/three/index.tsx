import OtherPageLink from "@/groups/header/components/OtherPageLink";
import Layout from "@/groups/layout";
import { cls } from "@/libs/common";
import useTheme from "@/groups/theme/useTheme";
import type { NextPage } from "next";
const Index: NextPage = () => {
  const { ThemeCode } = useTheme();

  return (
    <Layout hasHeader>
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
        <OtherPageLink url="/three/clone">3D Clone Page List</OtherPageLink>
      </div>
    </Layout>
  );
};

export default Index;
