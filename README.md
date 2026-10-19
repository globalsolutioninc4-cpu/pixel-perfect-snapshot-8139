# Exact Screenshot

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pixel-perfect-snapshot-8139.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a5232c43-244f-44ed-a1cc-5b1036cbbe80).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Netlify deployment

This is a React application using **TanStack Start**, not a standalone Vite SPA.
Keep the TanStack plugin and the existing document-hydration entry; converting
to a `createRoot` SPA would change page rendering and routing.

Export or clone the **entire project**. Required files include `package.json`,
`vite.config.ts`, `tsconfig.json`, `netlify.toml`, `index.html`, `scripts/`,
`public/`, and all of `src/` (especially `src/router.tsx`, `src/start.ts`,
`src/server.ts`, `src/lib/`, `src/components/`, and `src/routes/`).
`src/routeTree.gen.ts` is generated automatically by the TanStack plugin.
Do not deploy only `index.html` or the page files.

In Netlify, use the directory containing `package.json` as the base directory.
The included `netlify.toml` sets Node 22, build command `npm run build`,
publish directory `dist`, and `NITRO_PRESET=netlify`. Nitro generates the
Netlify server function as well as the public assets; use a source build,
not a manual upload of `dist` alone.

`npm run build` first checks that required source entries exist. If this
reports an incomplete source export, restore the named files from a fresh
export instead of removing TanStack Start or creating a different React entry.
