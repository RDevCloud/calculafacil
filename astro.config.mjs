import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calculafacil.netlify.app',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});