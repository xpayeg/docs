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
    navbar: {
      title: "Xpay Docs",
      logo: {
        alt: "XPay Logo",
        src: "img/xpay_large.ico",
      },
      items: [
        {
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
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
