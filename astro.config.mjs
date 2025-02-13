// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://rocketryvt.github.io',
  integrations: [tailwind(), preact(), sitemap()]
});