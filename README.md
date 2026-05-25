# LOOP/OS · Self-Improving Company Blueprint

> Based on Tom Blomfield's YC talk: "How to Build a Self-Improving Company with AI"

## What This Is

A company operating system built as **five recursive self-improving AI loops**,
each powered by a dedicated Hermes agent. No middle management. Humans at the edges.

## Core Premise

Traditional companies: hierarchy of humans passing information up and down.
LOOP/OS: a set of autonomous AI loops that monitor, decide, act, and improve —
continuously, overnight, without waiting for a meeting.

## The Five Loops

| Loop | Role | DRI |
|------|------|-----|
| `eng-loop` | Detect failures → write fix → deploy overnight | IC Engineer |
| `product-loop` | Find friction → A/B test → ship winner | IC Product |
| `support-loop` | Triage tickets → resolve → ship code fix | IC Support |
| `sales-loop` | Score leads → sequence → qualify → hand off | IC Sales |
| `knowledge-loop` | Record everything → diorize → update brain | IC Ops |

## The Company Brain

All loops read from and write to a shared **Company Brain** (`/brain/`):
- `company-brain.md` — living document, auto-regenerated weekly
- `skills.md` — distilled know-how from all loops
- `vectors/` — semantic search layer

## Each Loop Architecture

```
SENSOR → POLICY → TOOLS → QA GATE → LEARNING
                                        ↓
                                   (back to SENSOR)
```

## Human Roles

Only three:
- **Founder** — strategy, ethics, high-stakes decisions
- **IC (any function)** — named DRI per loop, escalation receiver
- **No middle management** — coordination is the orchestrator's job

## Key Principles (from the talk)

- Burn tokens, not headcount
- If it wasn't recorded, it didn't happen to the AI
- Software is ephemeral — context is the value
- Make everything legible to AI
- Middle management is over

## Running with Hermes

```bash
# Start all loops
hermes run --config config/hermes.config.yaml

# Run a specific loop
hermes run agents/eng-loop.yaml

# Start orchestrator only
hermes run orchestrator/meta-agent.yaml

# Inspect brain
hermes brain --show
```

## Directory Structure

```
loop-os/
├── README.md
├── config/
│   └── hermes.config.yaml     # global runtime config
├── agents/
│   ├── eng-loop.yaml
│   ├── product-loop.yaml
│   ├── support-loop.yaml
│   ├── sales-loop.yaml
│   └── knowledge-loop.yaml
├── orchestrator/
│   └── meta-agent.yaml        # coordinates cross-loop signals
└── brain/
    ├── company-brain.md       # living company context
    ├── skills.md              # distilled skills file
    └── vectors/               # semantic search layer
```
