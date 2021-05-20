import React, { Fragment } from "react";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
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
        src: url(/fonts/CeraPro-Medium.woff2);
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    
      @font-face {
        font-family: "CeraPro-Regular";
        src: url('/fonts/CeraPro-Regular.eot');
        src: url('/fonts/CeraPro-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/CeraPro-Regular.woff2') format('woff2'),
          url('/fonts/CeraPro-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "CeraPro-Medium";
        src: url('/fonts/CeraPro-Medium.eot');
        src: url('/fonts/CeraPro-Medium.eot?#iefix') format('embedded-opentype'),
          url('/fonts/CeraPro-Medium.woff2') format('woff2'),
          url('/fonts/CeraPro-Medium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
