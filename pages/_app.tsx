import type {AppProps} from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

import GlobalStyle from '../components/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <link href="/favicon.png" rel="shortcut icon" />
        <title>Rainy April Day Productions</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
