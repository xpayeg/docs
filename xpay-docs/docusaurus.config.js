module.exports = {
  title: "XPAY",
  tagline: "XPAY Docs",
  url: "https://xpayeg.github.io",
  baseUrl: "/api-docs/",
  favicon: "img/favicon.ico",
  organizationName: "xpayeg", // Usually your GitHub org/user name.
  projectName: "api-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Xpay Docs",
      logo: {
        alt: "XPay Logo",
        src: "img/xpay_large.ico",
      },
      links: [
        {
          to: "api-key",
          activeBasePath: "docs",
          label: "Guides",
          position: "left",
        },
        {
          to: "introduction",
          activeBasePath: "docs",
          label: "API Reference",
          position: "left",
        },
        {
          // href: "http://localhost:3000/api-docs/0/introduction",
          label: "Docs version",
          position: "left",
          items: [
            {
              label: 'v0',
              href: "/api-docs/0/introduction"
            },
            {
              label: 'v1',
              href: "/api-docs/introduction"
            }
          ]
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "api keys",
        //       to: "api-keys",
        //     },
        //     {
        //       label: "api payment",
        //       to: "api-payment",
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com/xpayeg",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/xpayeg",
            },
            {
              label: "Website",
              href: "https://xpay.app",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XPay.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/xpayeg/api-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
