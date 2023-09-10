//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'vercel',
  srcDir: 'src',

  runtimeConfig: {
    URLS: process.env.URLS,
  },
});
