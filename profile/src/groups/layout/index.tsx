import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import useTheme from "../theme/useTheme";
import { cls } from "@/common/libs";
import Loading from "./Loading";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasHeader?: true;
  hasFooter?: true;
}
const Layout = ({ children, title, hasHeader, hasFooter }: LayoutProps) => {
  const { ThemeCode } = useTheme();

  return (
    <>
      <Head>
        <title>{`PROFILE | ${title}`}</title>
      </Head>
      <Loading />
      {hasHeader ? <Header /> : null}
      <main className={cls("flex flex-col relative", `theme-${ThemeCode}`)}>
        {children}
        {hasFooter ? <Footer /> : null}
      </main>
    </>
  );
};

export default Layout;
