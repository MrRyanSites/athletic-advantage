// svelte-sitemap.config.ts
import type { OptionsSvelteSitemap } from 'svelte-sitemap';
import { config as siteConfig } from './src/lib/config'

const config: OptionsSvelteSitemap = {
  domain: siteConfig.URL,
  trailingSlashes: true,
  ignore: ['404']
};

export default config;