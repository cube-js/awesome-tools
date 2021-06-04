rm -rf .cache
rm -rf out/
npm ci
npm run build
npm run export
