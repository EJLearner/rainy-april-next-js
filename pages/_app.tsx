import type {AppProps} from 'next/app';
import * as React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

import SEO from '../components/SEO';
import GlobalStyle from '../components/globalstyles';


const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
};

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* TODO before release put page titles back */}
        <SEO><link href="/favicon.png" rel="shortcut icon" /><title>Rainy April Day Productions</title></SEO>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
