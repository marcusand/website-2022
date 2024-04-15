import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: './deploy/build'
    }),
    // trailingSlash: 'always',
    prerender: {
      // default: true,
      crawl: true,
      // enabled: true,
      // onError: 'continue',
      entries: ['*']
    }
  },
  extensions: ['.svelte']
};

export default config;
