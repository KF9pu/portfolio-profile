import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
}
const Layout = ({ children, title, hasHeader, hasFooter }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Clarins`}</title>
      </Head>

      {hasHeader ? <Header /> : null}
      <main className="flex flex-col relative">
        {children}
        {hasFooter ? <Footer /> : null}
      </main>
      <div id="root-modal"></div>
    </>
  );
};

export default Layout;
