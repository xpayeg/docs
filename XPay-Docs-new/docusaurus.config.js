module.exports = {
  title: "XPAY",
  tagline: "XPAY Docs",
  url: "https://xpayeg.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: 'log',
  favicon: "img/favicon.ico",
  organizationName: "xpayeg", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      title: "",
      logo: {
        alt: "XPay Logo",
        src: "img/xpay_logo.svg",
        srcDark: "img/xpay_white_logo.svg",
      },
      items: [{
          to: "api-key",
          activeBasePath: "docs",
          label: "Guides",
          position: "left",
        },
        {
          to: "/",
          // to: "docs/introduction",
          activeBasePath: "docs",
          label: "API Reference",
          position: "left",
        },
        {
          to: "https://forms.clickup.com/f/2a24f-3536/JBPV2ITJ7OFKWK9G7M",
          // activeBasePath: "docs",
          label: "Support",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [{
        title: 'Community',
        items: [{
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
      }, ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: '3ebef2296972da76ae8294089beb61c7',
      indexName: 'xpayeg',

      // Optional: see doc section bellow
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};