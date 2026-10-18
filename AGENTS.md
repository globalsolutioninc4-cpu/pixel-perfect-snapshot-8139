<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions

- Keep the consumer security guide as one long index route with hash navigation because it is a single ordered recovery workflow.
- Build all educational screenshots as inert React/CSS illustrations so simulated controls can never trigger calls or downloads.
- Render shared ScamGuide navigation and legal disclosures in the root site chrome so every content route carries consistent independent-resource positioning.
- Exported Netlify deployments use npm run build with NITRO_PRESET=netlify and publish dist; root index.html references the existing virtual TanStack client entry for source-export compatibility, while TanStack Start generates the production document and hydrates document, so never replace its shell with a standalone Vite SPA entry.
