import React from 'react';

import { Provider } from 'react-redux';
import { RestfulProvider } from 'restful-react';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/with-redux-store';
import { appWithTranslation } from 'utils/with-i18next';

import { AnimateSharedLayout } from 'framer-motion';
import withDarkMode from 'next-dark-mode';

import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.StrictMode>
        <Head>
          <title>Car AutoAstat Searching Page</title>
        </Head>
        <RestfulProvider base="http://localhost:8081/api">
          <Provider store={reduxStore}>
            <AnimateSharedLayout>
              <Component {...pageProps} />
            </AnimateSharedLayout>
          </Provider>
        </RestfulProvider>
      </React.StrictMode>
    );
  }
}

export default appWithTranslation(withReduxStore(Srr));
