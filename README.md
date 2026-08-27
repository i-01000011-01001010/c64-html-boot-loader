# HTML C64 Boot Loader

A tiny, dependency-free boot screen, built with plain HTML, CSS, and
JavaScript, no emulator, no WASM, no actual 6502 code anywhere, that mimics
a Commodore 64 loading a program, then hands off to your real site. Built
to run once, quickly, and get out of the way, not to be a gimmick people
sit through twice.

Originally built for a personal project by CJ Mihalko, sharing
it here for everyone, C64 lovers especially. Pulled out as a standalone,
reusable piece so anyone can drop it into their own site.

## What it does

Open `boot.html` and it types out a `LOAD "..."` command character by
character, runs through a few classic loading lines (`SEARCHING FOR...`,
`LOADING`, `READY.`), then redirects to whatever page you point it at. The
whole sequence takes a few seconds, deliberately short. It's meant to be
a nice first impression, not a wall between someone and what they came for.

## Using it

1. Copy `boot.html` and `boot.js` into your site.
2. Open `boot.js` and change these two lines near the top:
   ```js
   const PROGRAM_NAME = "YOUR-NAME";   // shown in the LOAD "..." line
   const TARGET_URL = "index.html";     // where it redirects when done
   ```
3. Link people to `boot.html` as the entry point (a custom domain, a
   README link, wherever), instead of linking directly to your real page.

That's it, no build step, no dependencies, plain HTML/CSS/JS.

**A pattern worth copying too, not just the code:** on the site this came
from, `boot.html` is what first-time visitors land on, but the real page
(`TARGET_URL`) is also directly linkable and bookmarkable on its own. Once
someone's seen the boot sequence, they never have to sit through it again,
their bookmark skips straight to the content. Worth setting up the same way
if you're using this for a page people will revisit.

## Customizing further

- **Colors** live in three CSS custom properties at the top of `boot.html`
  (`--c64-blue`, `--c64-light`, `--c64-white`), change those for a
  different palette without touching anything else.
- **Speed** is controlled by `TYPE_DELAY` (ms per typed character) and the
  `pause(...)` calls between each line in `boot.js`. Shorten these if even
  a few seconds feels like too much for your use case.
- **The AI/search crawler blocking meta tags** at the top of `boot.html`
  (`noindex`, plus explicit blocks for GPTBot, ClaudeBot, CCBot, and
  others) were a deliberate choice on the original site, where the content
  behind the boot screen was meant to be shared by direct link only, not
  crawled, indexed, or used for AI training. If you want your page
  discoverable and indexed normally, delete that whole block, it's
  opt-in behavior, not required for the boot sequence itself to work.

## License

MIT. Use it, modify it, ship it, no attribution required, though a
mention or a link back is always appreciated.
