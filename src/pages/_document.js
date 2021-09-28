import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Global, css } from '@emotion/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    // extract css to render in SSR
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page };
  }

  render() {
    return (
      <Html>
        <Global
          styles={css`
            ::selection {
              background-color: #c62828;
              color: #fff;
            }
            @font-face {
              font-family: 'Gilroy Bold';
              src: url('/static/fonts/Gilroy-Bold.woff2');
            }
            @font-face {
              font-family: 'Gilroy Extra Bold';
              src: url('/static/fonts/Gilroy-ExtraBold.woff2');
            }
            body,
            html {
              margin: 0;
              padding: 0;
              font-family: 'Gilroy Bold';
              scroll-behaviour: smooth;
            }
            .tab-list-active {
              background-color: #f5f5f5;
              color: black;
              border-radius: 5px;
            }
            .tab-list-active:before {
              content: 'A';
              background: #c62828;
              color: transparent;
              width: 1px;
              border-radius: 5px 0px 0px 5px;
              padding: 5px;
              margin-left: -5px;
              margin-right: 5px;
              display: inline-block;
            }
            .ais-SearchBox {
              margin: 1em 0;
            }

            .ais-Pagination {
              margin-top: 1em;
            }

            .left-panel {
              float: left;
              width: 250px;
            }

            .right-panel {
              margin-left: 260px;
            }

            .ais-InstantSearch {
              max-width: 960px;
              overflow: hidden;
              margin: 0 auto;
            }

            .ais-Hits-item {
              margin-bottom: 1em;
              width: calc(50% - 1rem);
            }

            .ais-Hits-item img {
              margin-right: 1em;
            }

            .hit-name {
              margin-bottom: 0.5em;
            }

            .hit-description {
              color: #888;
              font-size: 14px;
              margin-bottom: 0.5em;
            }
          `}
        />

        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/static/favicon/favicon.png" />
          <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#c62828" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
