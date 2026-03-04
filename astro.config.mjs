import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://elevategroup.netlify.app',
  integrations: [tailwind()],
});
