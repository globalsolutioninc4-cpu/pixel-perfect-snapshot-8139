import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

// Validate the checkout before Vite loads its configuration. This does not
// replace TanStack Start's generated client entry or generated route tree.
const root = fileURLToPath(new URL("../", import.meta.url));
const required = [
  "index.html",
  "vite.config.ts",
  "netlify.toml",
  "tsconfig.json",
  "src/router.tsx",
  "src/start.ts",
  "src/server.ts",
  "src/routes/__root.tsx",
  "src/routes/index.tsx",
];
const missing = required.filter((file) => !existsSync(resolve(root, file)));
if (missing.length > 0) {
  console.error(
    `Incomplete source export: missing ${missing.join(", ")}.\n` +
      "Re-export the entire project, including src and scripts, and set Netlify's base directory to the directory containing package.json.",
  );
  process.exitCode = 1;
} else {
  console.log("All required TanStack Start and Netlify entry files are present.");
}