import Head from "next/head";

import { LayoutProps } from "@interface/header";
import Header from "./header";
import Footer from "./footer";

export const Layout = ({ hasTabBar, children, title, hasFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {hasTabBar ? <Header /> : null}
      <div>
        <div>{children}</div>
        {hasFooter ? <Footer /> : null}
      </div>
    </>
  );
};

export default Layout;
