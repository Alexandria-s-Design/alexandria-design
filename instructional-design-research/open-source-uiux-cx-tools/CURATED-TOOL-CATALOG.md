# Curated Open-Source UI/UX/CX Tool Catalog

Prepared for Dr. Marie Martin. Purpose: a working toolbox for UI/UX-skilled learning development, with an emphasis on tools that have real APIs and can be self-hosted for client engagements (including enterprise client contexts where data control matters).

## Liberation lens

Every tool here was screened against a simple ethic: technology should help people and communities, not extract from them. That means preference for tools that are privacy-respecting by default, self-hostable so data stays with the people it describes, accessible to users with disabilities, openly licensed, and governed or at least steered by their communities. Analytics and session-replay tools are inherently observational, so each one in this catalog supports consent, masking, and data ownership; tools built around covert tracking, dark patterns, or resale of behavioral data did not make the cut. Where a listed tool has surveillance-capable features, it is flagged so it gets deployed with informed consent and PII masking, not against users.

Legend: SH = self-hostable. API column links to developer docs where available.

---

## 1. Design and prototyping

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| Penpot | Full design and prototyping platform (the leading open Figma alternative), SVG-native, with native design tokens | MPL-2.0 | https://penpot.app | Yes | Yes, plugin API and access tokens: https://help.penpot.app/technical-guide/ | The flagship open design tool; team collaboration, tokens, and self-hosting make it enterprise-safe |
| Quant-UX | Prototype, then run remote usability tests with click/heat data on the prototype | GPL/MIT (components) | https://github.com/KlausSchaefers/quant-ux | Yes | Partial, data export from source install | The only open tool that merges prototyping with quantitative usability testing |
| Plasmic | Visual builder that renders into your real React codebase | MIT | https://github.com/plasmicapp/plasmic | Partial | Yes: https://docs.plasmic.app/learn/apis/ | Bridges design and production code; strong for design-to-dev demos |
| Grida | Open canvas for designing and building web apps | Apache-2.0 | https://grida.co | Yes | Developer-oriented, repo-driven | Young but promising Figma-style canvas that outputs code |
| Pencil Project | Desktop wireframing and mockups, fully free | GPL-2.0 | https://pencil.evolus.vn | n/a (desktop) | No | Zero-cost wireframing for fast low-fi work and teaching |
| Inkscape | Professional vector editing (SVG) | GPL-2.0 | https://inkscape.org | n/a (desktop) | Scripting via extensions/CLI | The open standard for vector UI assets and icon work |
| GIMP | Raster image editing | GPL-3.0 | https://www.gimp.org | n/a (desktop) | Script-Fu/Python scripting | Covers photo and texture work without Adobe licensing |
| Krita | Digital painting and illustration | GPL-3.0 | https://krita.org | n/a (desktop) | Python scripting API: https://docs.krita.org/en/user_manual/python_scripting.html | Best open tool for custom illustration in learning products |

Flag: Akira and Alva appear on many lists but are dormant projects. Not recommended for client work.

## 2. UI component systems and toolkits

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| shadcn/ui | Copy-in React components built on Radix and Tailwind; the current industry default | MIT | https://ui.shadcn.com | n/a (library) | CLI and open registry schema: https://ui.shadcn.com/docs/registry | Marie's existing standard (21st.dev/Shadcnblocks build on it); fastest path to polished UI |
| Radix Primitives | Unstyled, accessible React primitives (dialogs, menus, etc.) | MIT | https://www.radix-ui.com/primitives | n/a | Component API docs on site | Accessibility-correct behavior for free; underpins shadcn/ui |
| Material UI (MUI) | Comprehensive React implementation of Material Design | MIT | https://mui.com | n/a | Component API: https://mui.com/material-ui/api/ | Enterprise-familiar look; useful when a client mandates Material |
| Chakra UI | Accessible, themeable React component library | MIT | https://chakra-ui.com | n/a | Docs on site | Strong theming model and a11y defaults |
| Mantine | 100+ React components and 50+ hooks | MIT | https://mantine.dev | n/a | Docs on site | Dashboard-grade components with excellent docs |
| Ark UI | Headless, framework-agnostic components (React, Vue, Solid, Svelte) | MIT | https://ark-ui.com | n/a | Docs on site | One accessible behavior layer across frameworks |
| Web Awesome (Shoelace) | Framework-agnostic web components | MIT | https://shoelace.style | n/a | Docs on site | Works in any stack, including legacy LMS shells |
| daisyUI | Semantic component classes for Tailwind CSS | MIT | https://daisyui.com | n/a | Docs on site | Rapid themed prototypes without JS lock-in |
| Tailwind CSS | Utility-first CSS framework | MIT | https://tailwindcss.com | n/a | Docs on site | The layout backbone of the modern component ecosystem |
| UI Tools (ui-layouts) | Generators for shadows, mesh gradients, SVG clip-paths, background patterns | Open source | https://tools.ui-layouts.com | Yes (repo) | No | Handy visual-craft generators for polish passes |
| Storybook | Build, document, and test components in isolation | MIT | https://storybook.js.org | Yes (static) | Yes, addon and preview APIs: https://storybook.js.org/docs/api | The standard living style guide; doubles as handoff documentation |

## 3. User research and usability testing

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| Quant-UX (testing side) | Remote unmoderated tests, heatmaps, task success on prototypes | Open source | https://quant-ux.com | Yes | Partial | Quantitative usability evidence without a SaaS subscription |
| OBS Studio | Record moderated usability sessions (screen plus webcam) | GPL-2.0 | https://obsproject.com | n/a (desktop) | Yes, obs-websocket: https://github.com/obsproject/obs-websocket | Free session capture with automatable recording |
| Jitsi Meet | Video conferencing for remote moderated research | Apache-2.0 | https://jitsi.org/meet | Yes | Yes, IFrame API: https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe/ | Consent-friendly, self-hosted alternative to Zoom for research |
| BigBlueButton | Virtual classroom with recording, whiteboard, polling | LGPL-3.0 | https://bigbluebutton.org | Yes | Yes: https://docs.bigbluebutton.org/development/api/ | Research sessions and learning delivery in one self-hosted tool |
| NocoDB | Airtable-style database for research repositories and participant tracking | AGPL-3.0 | https://nocodb.com | Yes | Yes, REST: https://nocodb.com/apis | Keeps participant PII local and structured; strong API |

Note: participant data is PII. Per standing rules, research data stays local or self-hosted, never in a public repo.

## 4. Product/UX analytics, heatmaps, and session replay

Consent flag for this whole category: session replay and heatmaps are surveillance-capable. Deploy only with disclosure, consent, and input masking turned on. Every tool below supports masking and self-hosted data ownership, which is why they are here.

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| PostHog | All-in-one product analytics, session replay, feature flags, surveys, A/B tests | MIT (core) | https://posthog.com | Yes | Yes, excellent: https://posthog.com/docs/api | One platform covers most of a UX analytics stack; API-first |
| Matomo | Full web analytics, GDPR-first Google Analytics alternative | GPL-3.0 | https://matomo.org | Yes | Yes: https://developer.matomo.org/api-reference/reporting-api | Mature, auditable analytics with complete data ownership; heatmaps/replay are paid plugins (flagged) |
| OpenReplay | Self-hosted session replay with devtools-grade context | ELv2/MIT mix | https://openreplay.com | Yes | Yes: https://docs.openreplay.com/en/api/ | Replay without shipping user sessions to a third party |
| Plausible | Lightweight, cookie-free, privacy-first web analytics | AGPL-3.0 | https://plausible.io | Yes | Yes, Stats API: https://plausible.io/docs/stats-api | The cleanest ethical analytics story to put in front of a client |
| Umami | Simple, privacy-focused website analytics | MIT | https://umami.is | Yes | Yes: https://umami.is/docs/api | MIT-licensed and trivial to self-host next to any site |
| Countly | Product analytics for web and mobile apps, push and crash reporting | AGPL-3.0 (CE) | https://countly.com | Yes | Yes: https://api.count.ly/reference | Mobile-app analytics story the web-only tools lack |
| GoatCounter | Tiny, no-tracking-consent-needed page analytics | EUPL | https://www.goatcounter.com | Yes | Yes: https://www.goatcounter.com/help/api | Minimal footprint counter for small sites and demos |

## 5. Surveys, feedback, and Voice of Customer

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| Formbricks | In-app micro-surveys and experience management, privacy-first | AGPL-3.0 | https://formbricks.com | Yes | Yes: https://formbricks.com/docs/api-v2-reference | Modern in-product VoC; targeted surveys at journey moments |
| LimeSurvey | Full-power survey research platform (logic, quotas, multilingual) | GPL-2.0 | https://www.limesurvey.org | Yes | Yes, RemoteControl 2: https://manual.limesurvey.org/RemoteControl_2_API | Research-grade surveys; fits Marie's academic rigor |
| Fider | Public feedback board for feature requests and voting | AGPL-3.0 | https://fider.io | Yes | Yes: https://fider.io/docs/api | Transparent, community-governed product feedback |
| Typebot | Conversational forms and chat-style surveys | AGPL-3.0 (FSL parts) | https://typebot.io | Yes | Yes: https://docs.typebot.io/api-reference | Higher completion rates through conversational UX; great in learning flows |
| HeyForm | Open-source form builder (Typeform alternative) | AGPL-3.0 | https://heyform.net | Yes | Webhooks and integrations | Polished form UX without per-response pricing |

Flag: OhMyForm appears on older lists but is effectively unmaintained. Use HeyForm or Formbricks instead.

## 6. CX management, helpdesk, and CRM

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| Chatwoot | Omnichannel support inbox and live chat (Intercom/Zendesk alternative) | MIT | https://www.chatwoot.com | Yes | Yes, excellent: https://www.chatwoot.com/developers/api/ | The strongest open CX engagement layer; clean API for automation |
| Zammad | Helpdesk and ticketing across email, chat, social | AGPL-3.0 | https://zammad.org | Yes | Yes: https://docs.zammad.org/en/latest/api/intro.html | Mature ticketing with strong audit trails for regulated clients |
| FreeScout | Lightweight shared inbox (Help Scout alternative) | AGPL-3.0 | https://freescout.net | Yes | Yes: https://api-docs.freescout.net | Runs on cheap hosting; ideal small-team support |
| Frappe/ERPNext CRM | CRM inside a full open ERP, plus standalone Frappe CRM | GPL-3.0 | https://frappe.io/crm | Yes | Yes: https://docs.frappe.io/framework/user/en/api | End-to-end customer record from lead to invoice |
| EspoCRM | Fast, clean standalone CRM | AGPL-3.0 | https://www.espocrm.com | Yes | Yes: https://docs.espocrm.com/development/api/ | Easiest open CRM to stand up and customize |
| Twenty | Modern CRM with a Notion-like UX (Salesforce alternative) | AGPL-3.0 | https://twenty.com | Yes | Yes, REST and GraphQL: https://twenty.com/developers | The best-designed open CRM; good taste demo in itself |
| SuiteCRM | Enterprise CRM with case management and customer portal | AGPL-3.0 | https://suitecrm.com | Yes | Yes: https://docs.suitecrm.com/developer/api/ | Feature-deep option when a client needs SugarCRM-class scope |
| CiviCRM | CRM for nonprofits: donors, members, volunteers, campaigns | AGPL-3.0 | https://civicrm.org | Yes | Yes, APIv4: https://docs.civicrm.org/dev/en/latest/api/ | Mission-sector CRM; aligns with education and community work |

## 7. Accessibility testing

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| axe-core | The standard automated accessibility rules engine | MPL-2.0 | https://github.com/dequelabs/axe-core | n/a (library) | Yes, JS API: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md | Industry-standard engine; integrates with Playwright for Marie's QA gate |
| Pa11y (+ Dashboard, CI) | Command-line and CI accessibility testing with a self-hosted dashboard | MIT / LGPL-3.0 | https://pa11y.org | Yes (dashboard) | Yes, JS API and webservice: https://github.com/pa11y/pa11y | Automatable a11y regression testing across whole sites |
| Lighthouse | Audits for accessibility, performance, SEO, best practices | Apache-2.0 | https://github.com/GoogleChrome/lighthouse | n/a (CLI) | Yes, programmatic Node API: https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md | One command produces client-ready audit evidence |
| IBM Equal Access Checker | Accessibility checker (browser extension, CLI, CI) | Apache-2.0 | https://github.com/IBMa/equal-access | n/a | Yes, karma/CLI APIs in repo docs | Second engine with different rule coverage than axe |
| WAVE | Visual accessibility evaluation in the browser | Free tool; engine proprietary | https://wave.webaim.org | No | API exists but is paid: https://wave.webaim.org/api/ | Kept for manual spot checks; flagged: not open source, API is metered |

## 8. Collaboration and whiteboarding

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| Excalidraw | Hand-drawn-style collaborative whiteboard | MIT | https://excalidraw.com | Yes | Yes, embeddable package API: https://docs.excalidraw.com | Fast journey maps and workshop visuals; embeds in any React app |
| tldraw | Infinite canvas SDK and whiteboard | tldraw license (source-available; free with watermark) | https://tldraw.dev | Yes | Yes, full SDK: https://tldraw.dev/docs | Canvas as a building block for custom learning experiences; flagged: no longer OSI-licensed |
| AFFiNE | Docs plus whiteboard plus database workspace (Notion/Miro alternative) | MIT/MPL mix | https://affine.pro | Yes | GraphQL in self-host; developing | One workspace for research notes, canvases, and planning |
| draw.io (diagrams.net) | Diagramming for flows, sitemaps, service blueprints | Apache-2.0 | https://www.drawio.com | Yes | Yes, embed API: https://www.drawio.com/doc/faq/embed-mode | Reliable IA and flow diagrams that export everywhere |
| Logseq | Local-first markdown knowledge base | AGPL-3.0 | https://logseq.com | n/a (local-first) | Yes, plugin API: https://plugins-doc.logseq.com | Research synthesis that never leaves the machine |

## 9. Design-to-dev handoff and design tokens

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| Style Dictionary | Transform design tokens into CSS, iOS, Android, any platform | Apache-2.0 | https://styledictionary.com | n/a (build tool) | Yes, Node API: https://styledictionary.com/reference/api/ | The standard token pipeline; one source of truth to every platform |
| Tokens Studio | Token management plugin (Figma and Penpot ecosystem) | MIT (plugin core) | https://tokens.studio | Partial | Sync via Git providers; docs: https://docs.tokens.studio | Bridges designer-managed tokens into the Style Dictionary pipeline; flagged: paid sync features |
| Terrazzo (ex-Cobalt) | W3C Design Tokens format toolchain and codegen | MIT | https://terrazzo.app | n/a (CLI) | Yes, plugin API in docs | Native support for the emerging W3C token standard |
| Penpot design tokens + inspect | Native tokens and dev inspect mode inside Penpot | MPL-2.0 | https://penpot.app | Yes | Via Penpot plugin API | Open handoff loop with no Figma dependency |
| Storybook (handoff role) | Living component documentation as the handoff contract | MIT | https://storybook.js.org | Yes (static) | Yes (see section 2) | Component docs replace static redlines |

## 10. Experimentation and feature flags (supporting category)

| Tool | Purpose | License | Link | SH | API | Why it made the cut |
|---|---|---|---|---|---|---|
| GrowthBook | Feature flags and A/B testing on your own data warehouse | MIT (core) | https://www.growthbook.io | Yes | Yes: https://docs.growthbook.io/api-overview | Experiment evidence for UX decisions without sending data out |
| Unleash | Enterprise-grade open feature flag platform | Apache-2.0 | https://www.getunleash.io | Yes | Yes: https://docs.getunleash.io/reference/api/unleash | Progressive rollout of learning-experience features |
| Flagsmith | Feature flags and remote config | BSD-3-Clause | https://flagsmith.com | Yes | Yes: https://docs.flagsmith.com/clients/rest/ | Simple flag service with a clean REST API |

---

## Deployment notes for enterprise client contexts

- A self-hosted stack of Penpot + PostHog (or Plausible + OpenReplay) + Formbricks + Chatwoot + axe/Pa11y covers design, evidence, VoC, CX, and accessibility with every byte of client data under contract control.
- All API keys go in `~/.env` per standing rule. Nothing in this catalog requires keys in code.
- Session replay, heatmaps, and any participant recording require disclosure and consent language in the experience itself, not just a privacy page.
