// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

        googleFonts: {
                families: {
                        Inter: {
                                wght: "100..900",
                                ital: "100..900",
                        },
                        Roboto: {
                                wght: "100..900",
                                ital: "100..900",
                        },
                        Raleway: {
                                wght: "100..900",
                                ital: "100..900",
                        },
                        Poppins: {
                                wght: "100..900",
                                ital: "500..900",
                        },
                        // Ubuntu: {
                        //   wght: [300, 400, 500, 700],
                        //   ital: [300, 400, 500, 700],
                        // },
                        // Varela: true,
                        // "Open Sans": {
                        //         wght: "300..800",
                        //         ital: "200..700",
                        // },
                },
                display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
        },
});
