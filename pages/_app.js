import React, { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Head from "next/head";
import Header from "../components/Header";
import EventBanner from "../components/EventBanner";
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Footer = dynamic(() => import("../components/Footer"));

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { page } = require("cubedev-tracking");
    page();
  }, []);

  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

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
        src: url(/fonts/CeraPro-Bold.woff2);
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    `,
          }}
        />
      </Head>

      <DefaultSeo
        openGraph={{
          type: "website",
          url: `https://awesome.cube.dev${router.asPath}`,
          images: [
            {
              url: "https://cubedev-blog-images.s3.us-east-2.amazonaws.com/482a86d6-d049-4d92-a0bf-0fcc5830476f.jpeg",
              alt: "Data visualization tools for application developers",
              width: 1200,
              height: 630,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@thecubejs"
        }}
      />

      <EventBanner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
