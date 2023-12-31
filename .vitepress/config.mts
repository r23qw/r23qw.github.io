import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";
import { withPwa } from "@vite-pwa/vitepress";
import { SearchPlugin } from "vitepress-plugin-search";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: "Rock'n Roll Coder",
    description: "aaron00101010's personal website",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    srcDir: "./src",
    lang: "zh-cn",
    rewrites: {},
    themeConfig: {
      logo: "/logo.svg",
      nav: [
        { text: "Home", link: "/" },
        { text: "Posts", link: "/posts" },
        { text: "About", link: "/about" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/r23qw" },
        {
          icon: {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 0 1-.112 3.797h2.712c.388.023.393 1.251.393 1.266H9.183a9.223 9.223 0 0 1-.408 2.102l.757-.604c.452.456 1.512 1.712 1.906 2.177c.473.681.063 2.081.063 2.081l-2.794-3.382c-.653 2.518-1.845 3.607-1.845 3.607c-.523.468-1.58.82-2.64.516c2.218-1.73 3.44-3.917 3.667-6.497H4.491c0-.015.197-1.243.806-1.266h2.71c.024-.32.086-3.254.086-3.797H6.598c-.136.406-.158.447-.268.753c-.594 1.095-1.603 1.122-1.907 1.155c.906-1.821 1.416-3.6 1.591-4.064c.425-1.124 1.671-1.125 1.671-1.125zM13.078 6h6.377v11.33h-2.573l-2.184 1.373l-.401-1.373h-1.219zm1.313 1.219v8.86h.623l.263.937l1.455-.938h1.456v-8.86z"/></svg>`,
          },
          link: "https://www.zhihu.com/people/Aaron00101010",
        },
        {
          icon: {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.316l7.454-5.88l-2.022-1.625L12 11.1l-.004.003l-5.432-4.288l-2.02 1.624l7.452 5.88Zm0-7.247l2.89-2.298L12 2.453l-.004-.005l-2.884 2.318l2.884 2.3Zm0 11.266l-.005.002l-9.975-7.87L0 12.088l.194.156l11.803 9.308l7.463-5.885L24 12.085l-2.023-1.624Z"/></svg>`,
          },
          link: "https://juejin.cn/user/510628971161943",
        },
        /*     {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213c0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098a10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05c-.857-2.578.157-4.972 1.932-6.446c1.703-1.415 3.882-1.98 5.853-1.838c-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786c-1.72 1.428-2.687 3.72-1.78 6.22c.942 2.453 3.666 4.229 6.884 4.229c.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247c0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156a.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/></svg>`,
        },
        link: "",
      }, */
      ],
      search: {
        provider: "local",
      },
      footer: {
        message: "CC BY-NC-SA 4.0",
        copyright: "Copyright © 2023-present aaron00101010",
      },
    },
    vite: {
      plugins: [
        UnoCSS(),
        SearchPlugin({
          tokenize: "full",
        }),
      ],
      ssr: {
        noExternal: ["echarts", "echarts-liquidfill", "jinrishici"],
      },
    },
    pwa: {
      outDir: "../.vitepress/dist",
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,jpg,png}"],
      },
      manifest: {
        id: "/",
        name: "Rock'n Roll Coder",
        short_name: "Rock'n Roll Coder",
        description: "aaron00101010's personal website",
        theme_color: "#ffffff",
        start_url: "/",
        orientation: "natural",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        handle_links: "preferred",
        launch_handler: {
          client_mode: ["navigate-existing", "auto"],
        },
        edge_side_panel: {
          preferred_width: 480,
        },
      },
    },
  })
);
