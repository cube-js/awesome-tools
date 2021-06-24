import React, { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Head from "next/head";
import Header from "../components/Header";
import { page } from "cubedev-tracking";

const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    page();
  }, []);
  return (
    <Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:description" content="An open-source list of awesome data visualization tools for software developers" />
        <meta property="og:image" content="/og-image.jpeg" />
        <meta
          name="google-site-verification"
          content="zJjljUArvZ0PVn8naOnxEue8ZX0wh0nsM0q32NYnzzQ"
        />
        <link
          rel="preload"
          href="/fonts/CeraPro-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/CeraPro-Medium.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `    
      @font-face {
        font-family: CeraPro;
        src: url(/fonts/CeraPro-Regular.woff2);
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: CeraPro;
        src: url(/fonts/CeraPro-Regular.woff2);
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: CeraPro;
        src: url(/fonts/CeraPro-Medium.woff2);
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: CeraPro;
        src: url(/fonts/CeraPro-Medium.woff2);
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: CeraPro;
        src: url(/fonts/CeraPro-Bold.woff2);
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    `,
          }}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
