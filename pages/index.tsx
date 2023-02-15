import Layout from "@components/layout/layout";
import { cls } from "@libs/common";

export default function Home() {
  return (
    <Layout title="Home" hasTabBar>
      <div className="flex">
        <div className={cls("h-screen w-full", "flex", "bg-black")}>
          <div></div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
