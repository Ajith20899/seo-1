import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import Head from "next/head";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">$942n</style>
      </Head>
      <Component {...pageProps} />;
    </React.Fragment>
  );
}

export default wrapper.withRedux(App);
