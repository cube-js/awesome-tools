const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'report-sample' 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'report-sample' 'self' 'unsafe-inline';
  object-src 'none';
  base-uri 'self';
  connect-src 'self' https://amaranth-leech.gcp-us-central1.cubecloudapp.dev https://track.cube.dev https://graphql.contentful.com;
  font-src 'self';
  frame-src 'self';
  img-src 'self';
  manifest-src 'self';
  media-src 'self';
  worker-src 'none';
`;

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                  {
                    key: "Strict-Transport-Security",
                    value: "max-age=31536000; includeSubDomains;",
                  },
                  {
                      key: 'Content-Security-Policy',
                      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
                  }
                ]
            },
        ]
    },
}

module.exports = withBundleAnalyzer(config);
