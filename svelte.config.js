import path from 'path';
import yaml from '@rollup/plugin-yaml';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [yaml()],
      resolve: {
        alias: {
          $content: path.resolve('./src/content')
        }
      }
    }
  },
  extensions: ['.svelte']
};

export default config;
