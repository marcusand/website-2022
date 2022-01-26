import yaml from '@rollup/plugin-yaml';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [yaml()]
    }
  },
  extensions: ['.svelte']
};

export default config;
