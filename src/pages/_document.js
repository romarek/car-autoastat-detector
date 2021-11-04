/* eslint-disable max-len */
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
              background-color: #535353;
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
            body {
              overflow-x: hidden;
            }
            .link-style {
              color: black;
              text-decoration: none;
            }
            .burger-menu,
            .burger-menu.open {
              display: inline-block;
              cursor: pointer;
              z-index: 9999;
              background: #fff;
              padding: 10px;
              border-radius: 25px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
            }

            .burger-menu .bar1,
            .bar2,
            .bar3 {
              width: 25px;
              height: 3px;
              background-color: #333;
              margin: 4px 0;
              transition: 0.4s;
            }

            .burger-menu.open .bar1 {
              -webkit-transform: rotate(-45deg) translate(-4px, 4px);
              transform: rotate(-45deg) translate(-4px, 4px);
            }

            .burger-menu.open .bar2 {
              opacity: 0;
            }

            .burger-menu.open .bar3 {
              -webkit-transform: rotate(45deg) translate(-6px, -6px);
              transform: rotate(45deg) translate(-6px, -6px);
            }

            /* Menu */

            .menu {
              width: 100%;
              display: block;
              text-align: center;
              padding: 0px;
            }
            .menu ul {
              position: relative;
              top: 0px;
              font-size: 24px;
              padding: 0px;
            }
            .menu li {
              list-style: outside none none;
              margin: 10px 0px;
              padding: 0;
              cursor: pointer;
            }
            .menu li:hover {
              color: #ff0000;
            }
            .tab-list-active {
              background-color: #f5f5f5;
              color: black;
              border-radius: 5px;
            }
            .tab-list-active:before {
              content: 'A';
              background: #535353;
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
            @media (max-width: 768px) {
              .slick-dots {
                display: none;
              }
            }
            .slick-dots li {
              margin: 0px;
            }
            .slick-dots li.slick-active div {
              background-color: black !important;
            }
            .image-gallery {
              width: 100%;
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
          <meta name="theme-color" content="#535353" />
          <meta content="The Bidspace website provides reliable information on prices and damage to insured vehicles in America and Canada resulting from an accident, hail, flood, theft or other insured event." />
          <meta
            name="keywords"
            content="accident, after, crash, cars, cars, usa, ukraine, car, offer, history, history for free, price "
          />
          <meta
            property="og:description"
            content="The site Bidspace.info provides free information on the statistics of prices for beaten cars from the USA after insurance claims."
          />
          <meta
            property="og:title"
            content="Free history of sales, prices and damage insurance cars in the United States at Copart and insurance auctions IAAI"
          />
        </Head>

        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
