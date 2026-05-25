# Verity Labs — Brand Guidelines

> **Company:** Verity Labs
> **Product:** AuditFlow
> **Tagline:** "Make compliance provably true."
> **Market:** AI-native ISO 9001 QMS SaaS — lean quality teams at SMBs and mid-market enterprises.

---

## 1. Name & Identity

### Company Name
**Verity Labs**

- "Verity" = truth, accuracy, verified fact (Latin: *veritas*)
- "Labs" = experimental, AI-first, product-driven — not a consultancy
- Together: a company that builds AI tools to make compliance objectively provable

### Product Name
**AuditFlow**

- Standalone brand under the Verity Labs umbrella
- "AuditFlow" signals the workflow dimension — it's not just checking boxes, it's a continuous loop
- V2 tagline: "Not a checklist. A self-improving QMS."

### Usage in sentences
- "We use AuditFlow by Verity Labs for our ISO audits."
- "Verity Labs makes AuditFlow, an AI-native QMS platform."
- "AuditFlow closed our last CAPA in 4 days, down from 6 weeks."
- "Built by Verity Labs." (footer attribution)

### Domain suggestions
- veritylabs.io (preferred)
- veritylabs.com
- auditflow.io (product)
- getauditflow.com (marketing)

---

## 2. Color Palette

### Primary — Deep Indigo
| Token         | Hex       | RGB               | Usage                          |
|---------------|-----------|-------------------|--------------------------------|
| primary-900   | #1E1B4B   | 30, 27, 75        | Dark nav, hero backgrounds     |
| primary-700   | #3730A3   | 55, 48, 163       | Primary buttons, links         |
| primary-500   | #6366F1   | 99, 102, 241      | Hover states, highlights       |
| primary-100   | #E0E7FF   | 224, 231, 255     | Subtle backgrounds, cards      |

### Secondary — Slate
| Token         | Hex       | RGB               | Usage                          |
|---------------|-----------|-------------------|--------------------------------|
| slate-900     | #0F172A   | 15, 23, 42        | Body text                      |
| slate-600     | #475569   | 71, 85, 105       | Secondary text, labels         |
| slate-200     | #E2E8F0   | 226, 232, 240     | Dividers, borders              |
| slate-50      | #F8FAFC   | 248, 250, 252     | Page background                |

### Accent — Emerald (compliance green)
| Token         | Hex       | RGB               | Usage                          |
|---------------|-----------|-------------------|--------------------------------|
| emerald-600   | #059669   | 5, 150, 105       | Pass/conforming status         |
| emerald-100   | #D1FAE5   | 209, 250, 229     | Success backgrounds            |

### Signal — Amber & Red
| Token         | Hex       | RGB               | Usage                          |
|---------------|-----------|-------------------|--------------------------------|
| amber-500     | #F59E0B   | 245, 158, 11      | Warnings, in-progress          |
| red-600       | #DC2626   | 220, 38, 38       | Non-conformities, critical     |
| red-100       | #FEE2E2   | 254, 226, 226     | Error backgrounds              |

---

## 3. Typography

### Headlines
- **Font:** Inter (or Geist if available)
- Weight: 700 (bold) for H1/H2, 600 for H3
- Size scale: H1 = 36px, H2 = 28px, H3 = 20px

### Body
- **Font:** Inter
- Weight: 400 regular, 500 medium for emphasis
- Size: 15–16px body, 14px secondary text, 13px labels/captions

### Code / Monospace
- **Font:** JetBrains Mono or Fira Code
- Used in: API docs, schema previews, audit evidence metadata

### Tone of voice
- Direct and data-forward — show numbers, not buzzwords
- "Your CAPA closure rate improved 3x" not "AuditFlow transforms your QMS journey"
- Enterprise credibility without corporate stiffness

---

## 4. Logo Concept

### Logomark idea
A stylised checkmark-inside-a-loop — representing continuous audit cycles closing cleanly.
- Monochrome: primary-700 indigo (#3730A3)
- On dark: white logomark on primary-900 background

### Wordmark
- "Verity Labs" — Inter Bold, all lowercase with generous tracking
- "AuditFlow" — Inter SemiBold, one word, no space

### Favicon / App icon
- Indigo circle + white stylised "V" checkmark
- Works at 16×16 and 512×512

---

## 5. UI Design Language

### Cards
- White background, `border: 1px solid slate-200`, `border-radius: 12px`, `box-shadow: 0 1px 3px rgba(0,0,0,0.06)`

### Buttons
- Primary: `bg-indigo-700 text-white hover:bg-indigo-800 rounded-lg px-4 py-2`
- Secondary: `bg-white border border-slate-300 text-slate-700 hover:bg-slate-50`
- Danger: `bg-red-600 text-white hover:bg-red-700`

### Status badges
- Conforming: emerald-100 background, emerald-700 text
- Non-conforming: red-100 background, red-700 text
- In progress: amber-100 background, amber-700 text
- Draft: slate-100 background, slate-600 text

### Spacing
- Base unit: 4px (Tailwind default)
- Section padding: 24px (p-6) or 32px (p-8)
- Card inner padding: 20px (p-5)

---

## 6. Messaging Framework

### Positioning statement
Verity Labs builds AI-native compliance tools for lean quality teams who can't afford to run ISO audits once a year and hope nothing falls through the cracks.

### Primary pain points addressed
1. Evidence is scattered — AuditFlow Evidence Loop classifies and links it automatically
2. CAPA never closes — CAPA Loop drives 5-Why root cause and SMART recommendations
3. Benchmarks are guesswork — Peer Benchmarking shows P50/P75 across your industry
4. Knowledge walks out — Knowledge Brain preserves institutional QMS expertise in a vector index

### Competitive differentiation
- Not a checklist tool (vs. legacy QMS software)
- Not AI-added (vs. incumbents bolting on GPT wrappers)
- AI-native: every loop is a Claude-powered reasoning chain, not a form

---

## 7. Accessibility Standards

- Minimum contrast ratio: 4.5:1 for body text (WCAG AA)
- Primary indigo #3730A3 on white: 7.2:1 — passes AAA
- All interactive elements: visible focus ring (2px indigo-500 outline)
- Error states: never color-only — always include icon + text label
- Screen reader: all form inputs labeled, all icons have aria-label

---

## 8. GitHub & Code Conventions

- **Org:** github.com/stagsz (current), future: github.com/veritylabs
- **Repo:** MyAiCompany (internal name), public-facing product is AuditFlow
- **Package scope:** `@veritylabs/backend`, `@veritylabs/frontend`, `@veritylabs/shared`
- **Branch strategy:** `main` (prod), `dev` (staging), feature branches `feat/loop-name`
- **Commit style:** Conventional commits (`feat:`, `fix:`, `chore:`)

---

## 9. Next Steps

- [ ] Register veritylabs.io domain
- [ ] Register auditflow.io domain  
- [ ] Create GitHub org `veritylabs` and transfer repo
- [ ] Design logomark (Figma or hire designer)
- [ ] Add Verity Labs footer attribution to AuditFlow UI
- [ ] Update vercel.json project name to `auditflow` (already set)
- [ ] Set up veritylabs.io landing page pointing to AuditFlow
