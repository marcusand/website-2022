import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'deploy/build'
    }),
    alias: {
      '$content/*': 'src/content/*',
      '$components/*': 'src/components/*'
    }
  }
};

export default config;
