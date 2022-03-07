import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* SimpleAnalytics */}
        <script async defer src="https://sa.joeduncko.com/latest.js"></script>
        <noscript>
          <img src="https://sa.joeduncko.com/noscript.gif" alt="" />
        </noscript>
      </body>
    </Html>
  );
}
