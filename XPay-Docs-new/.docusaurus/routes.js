
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/docs/search',
  component: ComponentCreator('/docs/search','b47'),
  exact: true,
},
{
  path: '/docs/',
  component: ComponentCreator('/docs/','cc7'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','027'),
  exact: true,
},
{
  path: '/docs/android-sdk/classes',
  component: ComponentCreator('/docs/android-sdk/classes','b7d'),
  exact: true,
},
{
  path: '/docs/android-sdk/example',
  component: ComponentCreator('/docs/android-sdk/example','2d7'),
  exact: true,
},
{
  path: '/docs/android-sdk/installation',
  component: ComponentCreator('/docs/android-sdk/installation','290'),
  exact: true,
},
{
  path: '/docs/android-sdk/sdk-errors',
  component: ComponentCreator('/docs/android-sdk/sdk-errors','9cb'),
  exact: true,
},
{
  path: '/docs/android-sdk/xpayutils',
  component: ComponentCreator('/docs/android-sdk/xpayutils','414'),
  exact: true,
},
{
  path: '/docs/api-key',
  component: ComponentCreator('/docs/api-key','132'),
  exact: true,
},
{
  path: '/docs/api-payments',
  component: ComponentCreator('/docs/api-payments','0c1'),
  exact: true,
},
{
  path: '/docs/authentication',
  component: ComponentCreator('/docs/authentication','f3f'),
  exact: true,
},
{
  path: '/docs/community-id',
  component: ComponentCreator('/docs/community-id','408'),
  exact: true,
},
{
  path: '/docs/custom-fields',
  component: ComponentCreator('/docs/custom-fields','8ce'),
  exact: true,
},
{
  path: '/docs/direct-order',
  component: ComponentCreator('/docs/direct-order','74a'),
  exact: true,
},
{
  path: '/docs/pay',
  component: ComponentCreator('/docs/pay','6a7'),
  exact: true,
},
{
  path: '/docs/postman',
  component: ComponentCreator('/docs/postman','ecd'),
  exact: true,
},
{
  path: '/docs/prepare-amount',
  component: ComponentCreator('/docs/prepare-amount','6fa'),
  exact: true,
},
{
  path: '/docs/promo-code',
  component: ComponentCreator('/docs/promo-code','d78'),
  exact: true,
},
{
  path: '/docs/subscription',
  component: ComponentCreator('/docs/subscription','a9d'),
  exact: true,
},
{
  path: '/docs/transactions',
  component: ComponentCreator('/docs/transactions','44e'),
  exact: true,
},
{
  path: '/docs/woo-commerce',
  component: ComponentCreator('/docs/woo-commerce','d72'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
