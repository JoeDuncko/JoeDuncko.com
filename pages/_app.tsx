import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

config.autoAddCss = false; // see https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#nextjs

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
