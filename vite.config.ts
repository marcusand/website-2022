import path from 'path';
import yaml from '@rollup/plugin-yaml';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), yaml()],
  resolve: {
    alias: {
      $content: path.resolve('./src/content'),
      $components: path.resolve('./src/components')
    }
  }
});
