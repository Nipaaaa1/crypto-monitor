// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      COINGECKO_API_KEY: envField.string({ context: "server", access: "secret" })
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),

  integrations: [icon()]
});
