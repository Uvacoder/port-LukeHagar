import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import mdSvexConfig from "./mdsvex.config.js";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: [".svelte", ".svelte", ".svx", ".md"],
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({ extensions: [".svx", ".md"] }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
