const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const config = {
  headers: [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains;"
        },
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://amaranth-leech.gcp-us-central1.cubecloudapp.dev https://track.cube.dev; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; worker-src 'none';"
        }
      ]
    }
  ]
};

module.exports = withBundleAnalyzer(config);
