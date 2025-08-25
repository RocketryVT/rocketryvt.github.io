// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://rocketryvt.github.io',
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind(), preact(), sitemap(), partytown({ config: { forward: ['dataLayer.push'] } })]
});