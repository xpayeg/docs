export default {
  "title": "XPAY",
  "tagline": "XPAY Docs",
  "url": "https://xpayeg.github.io",
  "baseUrl": "/docs/",
  "onBrokenLinks": "log",
  "favicon": "img/favicon.ico",
  "organizationName": "xpayeg",
  "projectName": "docs",
  "themeConfig": {
    "sidebarCollapsible": true,
    "hideableSidebar": true,
    "navbar": {
      "title": "Xpay Docs",
      "logo": {
        "alt": "XPay Logo",
        "src": "img/xpay_large.ico"
      },
      "items": [
        {
          "to": "api-key",
          "activeBasePath": "docs",
          "label": "Guides",
          "position": "left"
        },
        {
          "to": "/",
          "activeBasePath": "docs",
          "label": "API Reference",
          "position": "left"
        },
        {
          "to": "https://forms.clickup.com/f/2a24f-3536/JBPV2ITJ7OFKWK9G7M",
          "label": "Support",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Facebook",
              "href": "https://facebook.com/xpayeg"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/xpayeg"
            },
            {
              "label": "Website",
              "href": "https://xpay.app"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 My Project, Inc. Built with Docusaurus."
    },
    "algolia": {
      "apiKey": "3ebef2296972da76ae8294089beb61c7",
      "indexName": "xpayeg",
      "contextualSearch": false,
      "searchParameters": {},
      "appId": "BH4D9OD16A"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "/home/samir/xpay/docs/XPay-Docs-new/sidebars.js"
        },
        "theme": {
          "customCss": "/home/samir/xpay/docs/XPay-Docs-new/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};