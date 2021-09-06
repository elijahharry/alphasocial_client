import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ScreenProvider } from "@context/ScreenSize";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AlphaTheme from "@styles/theme";
import GlobalStyles from "@styles/global.styles";
import "@styles/skeletons.css";
import "../src/styles/skeletons.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={AlphaTheme}>
        <ScreenProvider>
          <CssBaseline />
          <GlobalStyles />
          <Component {...pageProps} />
        </ScreenProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
