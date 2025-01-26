import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="/fonts/icomoon/cleverstory/style.css"
          rel="stylesheet"
        ></link>
        <link href="/fonts/aktiv-grotesk/style.css" rel="stylesheet"></link>

        <link rel="stylesheet" href="/css/slick/slick.css" />
        <link rel="stylesheet" href="/css/slick/slicktheme.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
