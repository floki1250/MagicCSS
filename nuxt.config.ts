// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "MagicCSS",
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
  css: ["@/assets/main.scss"],
});
