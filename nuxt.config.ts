// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Ubuntu: {
        wght: [300, 400, 500, 700],
        ital: [300, 400, 500, 700],
      },
      Varela: true,
      "Open Sans": {
        wght: "300..800",
        ital: "200..700",
      },
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  },
});
