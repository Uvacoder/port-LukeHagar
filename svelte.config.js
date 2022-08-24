import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import { fileURLToPath } from "url";
import * as path from "path";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: [".svelte", ".svelte", ".svx", ".md"],
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: [".svx", ".md"],
      smartypants: { dashes: "oldschool" },
      layout: { blog: path.join(dirname, "./src/routes/blog/_layout.svelte") },
    }),
  ],

  kit: {
    adapter: adapter(),
    files: {
      assets: "static",
    },
  },
};

export default config;
