// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  site: 'https://yisus1907.github.io',

  base: '/cumpleanos-sorpresa/',

  vite: {
    plugins: [tailwindcss()]
  }

});