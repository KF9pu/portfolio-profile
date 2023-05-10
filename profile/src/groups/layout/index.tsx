import Head from "next/head";

import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasHeader?: true;
  hasFooter?: true;
}
const Layout = ({ children, title, hasHeader, hasFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`PROFILE | ${title}`}</title>
      </Head>

      {hasHeader ? <Header /> : null}
      <main className="flex flex-col relative">
        {children}
        {hasFooter ? <Footer /> : null}
      </main>
    </>
  );
};

export default Layout;
