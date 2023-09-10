//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'vercel',
  srcDir: 'src',
  errorHandler: '~/errorHandler',
  runtimeConfig: {
    URLS: process.env.URLS,
  },
});
