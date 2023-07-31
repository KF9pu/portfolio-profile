import OtherPageLink from "@/groups/header/components/OtherPageLink";
import Layout from "@/groups/layout";
import { cls } from "@/libs/common";
import useTheme from "@/theme/hooks/useTheme";
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
        <h1>ClonePage</h1>
        <OtherPageLink url="/three/clone/domino">3D Domino Clone Page</OtherPageLink>
        <OtherPageLink url="/three/clone/scroll">3D Scroll Clone Page</OtherPageLink>
        <OtherPageLink url="/three/clone/bridge">3D Bridge Clone Page</OtherPageLink>
      </div>
    </Layout>
  );
};

export default Index;
