import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calculafacilito.netlify.app',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});