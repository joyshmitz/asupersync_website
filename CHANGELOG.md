# Changelog

All notable changes to the Asupersync Website are documented in this file.

This project has no tagged releases or GitHub Releases yet. History is organized by commit, newest first. Each entry links to the actual commit on GitHub.

Repository: <https://github.com/Dicklesworthstone/asupersync_website>

---

## 2026-03-16 -- Fix cursor MotionValue corruption and remove React 19 lint violation

[`9d7517a`](https://github.com/Dicklesworthstone/asupersync_website/commit/9d7517a99c3c95d5ccb051cda2d190145d487ecf)

### Bug Fixes

- **DataDebris MotionValue corruption**: The `DataDebris` component passed shared `mouseX`/`mouseY` MotionValues to each particle via `style={{ x, y }}` while simultaneously animating those same properties with `animate={{ x: [...], y: [...] }}`. Framer-motion writes keyframe values directly back into MotionValues supplied via `style`, so five particles were continuously overwriting the shared cursor position with near-zero drift offsets. This caused the custom cursor to fly off-screen over any `<pre>`/`<code>` element. Fixed by wrapping particles in a single `motion.div` container positioned by the shared MotionValues, with individual particles animating independently.
- **React 19 lint violation (`react-hooks/set-state-in-effect`)**: Removed the `isMounted` state pattern (`useEffect(() => { setIsMounted(true) }, [])`) from `custom-cursor.tsx`. The guard was unnecessary -- the cursor already gates rendering on `isVisible`, which is set by mouse events that only fire client-side.

### Files Changed

- `components/custom-cursor.tsx` (3 additions, 10 deletions)

---

## 2026-02-26 -- Add GitHub social preview image

[`7ef4f2d`](https://github.com/Dicklesworthstone/asupersync_website/commit/7ef4f2d413d3342bc91bed520564365654b7e284)

### Assets

- Added `gh_og_share_image.jpg` (1280x640) generated from the existing hero illustration with a bottom gradient bar overlaying repository description text. Used as the GitHub social preview / Open Graph image for link unfurls.

---

## 2026-02-26 -- Fix SSR hydration mismatch, mobile layout, and keyboard accessibility

[`0ff2adc`](https://github.com/Dicklesworthstone/asupersync_website/commit/0ff2adcf78ba271f3b0efd57d590497350c147e2)

### Bug Fixes

- **SSR hydration mismatch** (`custom-cursor.tsx`): Added `isMounted` gate to prevent server/client render divergence caused by browser-only APIs (`mousemove`, `matchMedia`). Returns `null` until after mount so first client render matches server output.

### Accessibility

- **Keyboard focus indicators** (`cancel-protocol-viz.tsx`, `tokio-comparison-viz.tsx`): Added `focus-visible` ring styles to interactive buttons (Trigger Cancel, Reset, Cancel) so keyboard users can identify which control has focus.

### Mobile / Responsive Layout

- **Lock barrier visibility** (`calm-theorem-viz.tsx`): Added mobile-visible horizontal red bar indicators (`block sm:hidden`) so the coordination-cost visual metaphor is preserved when desktop vertical barriers are hidden on small screens.
- **Message transit layout** (`spork-otp-viz.tsx`): Switched from `flex-col`/`flex-row` responsive to a single horizontal flex with `overflow-x-auto`, preventing unreadable vertical stacking on narrow viewports. Added `min-width` constraints on client/server columns and the transit lane.
- **Wrapping fix** (`spork-otp-viz.tsx`): Removed conditional line break in "Client Hangs Forever" label that caused awkward mid-word wrapping.

### Styling

- **Design system consistency** (`cancel-protocol-viz.tsx`): Replaced inline `background` style on budget bar and comparison panel with Tailwind `bg-slate-900/40` class to match site design system and avoid specificity conflicts.

### Files Changed

- `components/custom-cursor.tsx`
- `components/viz/calm-theorem-viz.tsx`
- `components/viz/cancel-protocol-viz.tsx`
- `components/viz/spork-otp-viz.tsx`
- `components/viz/tokio-comparison-viz.tsx`

---

## 2026-02-26 -- Publish README, hero illustration, and project coordination artifacts

[`308cc9b`](https://github.com/Dicklesworthstone/asupersync_website/commit/308cc9b5765b6a8471cacc31f180b753926f165a)

### Documentation

- Added complete project README covering quick setup, architecture diagram, command reference (Bun scripts, `br` issue tracking, UBS scanning), troubleshooting, limitations, and FAQ.
- Applied manual de-slopify pass to remove formulaic LLM phrasing and em-dash-heavy prose.

### Assets

- Added `asupersync_website_illustration.webp` (~353 KB) hero illustration, converted from PNG (~2.0 MB) source.

### Project Operations

- Added `AGENTS.md` with repo-specific operating constraints and multi-agent workflow expectations.
- Committed `.beads/` directory (config, issues JSONL, metadata) to synchronize local `beads_rust` issue tracker state with repository history.

---

## 2026-02-26 -- Add full application source for interactive documentation website

[`e839741`](https://github.com/Dicklesworthstone/asupersync_website/commit/e83974125e59cf6de40b6082f48b37bac46dbba5)

This is the main product commit: the entire Next.js App Router application, component library, visualization suite, content model, and static spec-doc corpus. 106 files, ~27,600 lines of new code.

### Pages and Routing (6 routes + infrastructure)

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home page with feature cards, problem scenarios, stats, timeline, flywheel |
| `/showcase` | `app/showcase/page.tsx` | Interactive runtime demos (hosts all viz components) |
| `/architecture` | `app/architecture/page.tsx` | Technical deep-dive into runtime internals |
| `/glossary` | `app/glossary/page.tsx` | Searchable term explorer |
| `/getting-started` | `app/getting-started/page.tsx` | Setup and onboarding guide |
| `/spec-explorer` | `app/spec-explorer/page.tsx` | In-site spec document browser |

Infrastructure routes: `robots.ts`, `sitemap.ts`, `icon.tsx`, `opengraph-image.tsx`, `twitter-image.tsx`, `global-error.tsx`, `not-found.tsx`, `layout.tsx`, `globals.css`.

### Visualization Components (31 modules under `components/viz/`)

Interactive client-side demos covering cancellation, scheduling, security, formal semantics, and testing:

- **Cancellation**: `cancel-protocol-viz`, `cancel-state-machine-viz`, `cancel-fuel-viz`, `cancellation-injection-viz`, `budget-algebra-viz`
- **Scheduling**: `scheduler-lanes-viz`, `exp3-scheduler-viz`, `dpor-pruning-viz`
- **Effects and Semantics**: `two-phase-effect-viz`, `two-phase-effects-viz`, `small-step-semantics-viz`, `obligation-flow-viz`, `region-tree-viz`
- **Coordination**: `calm-theorem-viz`, `spork-otp-viz`, `tokio-comparison-viz`, `saga-compensation-viz`
- **Security**: `capability-security-viz`, `macaroon-capability-viz`, `macaroon-caveat-viz`
- **Observability**: `eprocess-monitor-viz`, `oracle-dashboard-viz`, `test-oracles-viz`, `lyapunov-potential-viz`, `conformal-calibration-viz`, `spectral-deadlock-viz`
- **Encoding and Replay**: `fountain-code-viz`, `foata-fingerprint-viz`, `trace-replay-stability-viz`
- **Lab**: `lab-runtime-viz`

### UI Component Library (22 modules under `components/`)

- Layout/chrome: `client-shell`, `site-header`, `site-footer`, `section-shell`, `scroll-to-top`, `bottom-sheet`
- Motion: `motion-wrapper`, `motion/index`, `glow-orbits`, `custom-cursor`, `sync-elements`
- Content: `feature-card`, `comparison-table`, `stats-grid`, `timeline`, `problem-scenario`, `rust-code-block`, `agent-flywheel`
- Typography: `glitch-text`, `decoding-text`, `animated-number`
- Utility: `error-boundary`, `tooltip`, `robot-mascot`
- Spec Explorer: `spec-explorer/spec-search`, `spec-explorer/spec-viewer`, `spec-explorer/spec-viewer-loader`

### Content Model (`lib/`)

- `lib/content.ts` -- Central typed data source: site config, nav items, features, glossary terms, FAQs, flywheel entries, problem scenarios, stats, timeline milestones (~780 lines).
- `lib/spec-docs.ts` -- Spec document index: metadata for 26+ markdown files with titles, descriptions, categories, and file paths (~244 lines).
- `lib/site-state.tsx` -- Application state context and hooks for runtime UI behavior and interaction controls.
- `lib/utils.ts` -- Shared utility functions.

### Custom Hooks (`hooks/`)

- `use-body-scroll-lock.ts` -- Prevents background scroll when modals/sheets are open.
- `use-haptic-feedback.ts` -- Triggers device haptic feedback on supported platforms.
- `use-intersection-observer.ts` -- Intersection Observer wrapper for lazy loading and scroll-triggered animations.

### Spec Document Corpus (26 markdown files under `public/spec-docs/`)

Searchable specification documents consumed by the Spec Explorer:

- Formal semantics: `asupersync_v4_formal_semantics.md`
- Security: `THREAT_MODEL.md`, `security_threat_model.md`
- Cancellation: `cancellation-testing.md`
- Scheduling: `scheduler_arena_plan.md`, `calm_analysis.md`
- Spork subsystem: `spork_operational_semantics.md`, `spork_deterministic_ordering.md`, `spork_glossary_invariants.md`
- RaptorQ: `raptorq_baseline_bench_profile.md`, `raptorq_controlled_rollout_policy.md`, `raptorq_expected_loss_decision_contract.md`, `raptorq_optimization_decision_records.md`, `raptorq_post_closure_opportunity_backlog.md`, `raptorq_program_closure_signoff_packet.md`, `raptorq_rfc6330_clause_matrix.md`, `raptorq_unit_test_matrix.md`
- Integration: `integration.md`, `macro-dsl.md`, `api_audit.md`
- Debugging: `replay-debugging.md`, `deadline-monitoring.md`
- Runtime internals: `runtime_state_contention_inventory.md`, `benchmarking.md`
- Migration: `bead-harmonization-migration.md`
- Comparison: `otp_comparison.md`

### TanStack Integration

- **@tanstack/react-query** -- Cached document loading for spec explorer.
- **@tanstack/react-table** -- Structured filtering and column management for comparison and glossary tables.
- **@tanstack/react-form** -- Controlled search input state.
- **@tanstack/react-virtual** -- Virtualized list rendering for large spec document sets.

### Type Definitions

- `types/global.d.ts` -- Global TypeScript declarations.

---

## 2026-02-26 -- Bootstrap Bun/Next.js toolchain and repository hygiene

[`fc9686e`](https://github.com/Dicklesworthstone/asupersync_website/commit/fc9686ea1a828fd020d66433f464d27ddd47973f)

Initial commit. Establishes the build toolchain and repository policy before any source code lands.

### Toolchain

- **Runtime**: Bun 1.3.3 (`packageManager` field, engine constraint `>=1.3.0`).
- **Framework**: Next.js 16.1.6 with Turbopack dev server (`next dev --turbopack`).
- **Language**: TypeScript (strict mode via `tsconfig.json`).
- **Styling**: Tailwind CSS 4 via PostCSS (`@tailwindcss/postcss`).
- **Linting**: ESLint 9 with `eslint-config-next` 16.1.6.

### Key Dependencies (pinned in `package.json`)

| Package | Version |
|---|---|
| `next` | 16.1.6 |
| `react` / `react-dom` | 19.2.4 |
| `framer-motion` | ^12.33.0 |
| `@tanstack/react-query` | ^5.90.21 |
| `@tanstack/react-table` | ^8.21.3 |
| `@tanstack/react-form` | ^1.28.3 |
| `@tanstack/react-virtual` | ^3.13.19 |
| `tailwindcss` | ^4 |
| `typescript` | ^5 |

### Repository Hygiene

- `.gitignore` tuned for Next.js + Bun: ignores `.next/`, `out/`, `node_modules/`, `*.tsbuildinfo`, `.env*`, `.vercel/`, SQLite dev-state files, macOS sidecar files, and local scratch scripts.
- Config files: `next.config.ts` (WebP images, compression, no powered-by header, strict mode), `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `next-env.d.ts`.
- Bun lockfile (`bun.lock`) committed for reproducible installs.
- npm/yarn/pnpm explicitly blocked via `engines.npm` sentinel.
