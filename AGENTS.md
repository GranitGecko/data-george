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

- Keep alternative portfolio designs as CSS token overrides scoped by `data-design` on the page; preserve content, anchors, language, and light/dark preference across switches.
- Keep the design picker and code-text presentation in a small JavaScript component; use client effects for persisted preferences to avoid server-rendering mismatches.
