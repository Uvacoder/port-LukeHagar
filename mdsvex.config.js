import { mdsvex } from "mdsvex";
import { fileURLToPath } from "url";
import * as path from "path";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

const config = mdsvex({
  extensions: [".svelte", ".svx", ".md"],
  smartypants: { dashes: "oldschool" },
  layout: { blog: path.join(dirname, "./src/routes/blog/_layout.svelte") },
});

export default config;
