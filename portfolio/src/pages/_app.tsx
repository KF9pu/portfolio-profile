import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ThemeComponent from "@/theme/themeComponent";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeComponent>
        <Component {...pageProps} />
      </ThemeComponent>
    </RecoilRoot>
  );
}
