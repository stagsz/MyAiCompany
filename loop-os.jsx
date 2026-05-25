import { useState, useEffect } from "react";

const LOOPS = [
  {
    id: "eng", name: "Engineering", color: "#00D4FF", angle: -90,
    tagline: "Detect → Fix → Deploy · overnight, no humans",
    layers: [
      { label: "01 · SENSOR", text: "CI failures · error logs · failed queries · GitHub webhooks · test results" },
      { label: "02 · POLICY", text: "Risk scoring · auto-merge threshold · schema change guard · prod lock rules" },
      { label: "03 · TOOLS", text: "Code generation · GitHub API · test runner · deploy pipeline · vector search" },
      { label: "04 · QA GATE", text: "Full test suite · static analysis · AI diff review · rollback trigger" },
      { label: "05 · LEARNING", text: "Skills file updates · failure pattern index · query success rate tracking" },
    ],
    dri: "IC Engineer",
    driScope: "Novel architecture · Security patches · Major dependency upgrades",
    escapeHatches: [
      "Production schema migrations",
      "Security-related changes",
      "Major dependency version bumps",
      "System design decisions with org-wide impact",
    ],
    hermes: `name: eng-loop
version: "1.0"
model: claude-sonnet-4-20250514

persona: |
  You are the Engineering Improvement Agent for LOOP/OS.
  You monitor all system failures, identify root causes,
  write fixes, and deploy them autonomously within defined
  risk thresholds. When you sleep, the codebase gets smarter.

sensors:
  - id: ci_failures
    type: webhook
    source: github_actions
    events: [workflow_failed, test_failed, deployment_failed]
  - id: error_logs
    type: poll
    source: log_aggregator
    interval: 5m
    filter: severity=error
  - id: query_analytics
    type: poll
    source: db_analytics
    interval: 1h
    filter: success_rate < 0.95

policy:
  auto_deploy: true
  auto_merge_threshold: risk_score < 0.3
  nightly_batch: "02:00 UTC"
  max_tokens_per_run: 50000
  require_human_review:
    - production_schema_changes
    - security_related_changes
    - dependency_major_upgrades

tools:
  - github_api          # read/write issues, PRs, merge
  - code_generation     # write and refactor fixes
  - test_runner         # run full test suite
  - deploy_pipeline     # push to staging → prod
  - vector_search       # search prior solutions
  - skills_file_rw      # update agent skills context

quality_gate:
  run_tests:
    required: true
    fail_action: abort
  static_analysis:
    required: true
  diff_review_agent:
    required: true
  human_review:
    trigger: risk_score > 0.7

learning:
  on_success:
    - update_skills_file: true
    - log_pattern: resolved_patterns.jsonl
  on_failure:
    - log_failure_pattern: true
    - increase_monitoring: 24h
  weekly:
    - distill_top_failures: true
    - update_db_indexes: true
    - report_to_brain: true`
  },
  {
    id: "product", name: "Product", color: "#00FF88", angle: -18,
    tagline: "Friction → A/B → Ship · self-optimizing funnel",
    layers: [
      { label: "01 · SENSOR", text: "Funnel analytics · rage clicks · session recordings · drop-off events · NPS" },
      { label: "02 · POLICY", text: "A/B test budget · feature flag scope · rollout % · significance threshold" },
      { label: "03 · TOOLS", text: "Analytics API · feature flags · A/B framework · deploy pipeline · design gen" },
      { label: "04 · QA GATE", text: "Statistical significance check · UX heuristics agent · rollback trigger" },
      { label: "05 · LEARNING", text: "Winning variant archive · product context update · funnel baseline refresh" },
    ],
    dri: "IC Product",
    driScope: "Pricing changes · Core navigation · Brand decisions · Roadmap priority",
    escapeHatches: [
      "Pricing or packaging changes",
      "Core navigation restructures",
      "Brand or tone-of-voice decisions",
      "Strategic product direction calls",
    ],
    hermes: `name: product-loop
version: "1.0"
model: claude-sonnet-4-20250514

persona: |
  You are the Product Optimization Agent for LOOP/OS.
  You analyze user behavior, identify friction points,
  design experiments, deploy A/B tests, pick winners,
  and ship improvements — fully autonomously. The funnel
  gets better while no one is watching.

sensors:
  - id: funnel_analytics
    type: poll
    source: product_analytics
    interval: 24h
  - id: session_signals
    type: webhook
    source: session_recorder
    events: [rage_click, dead_click, drop_off, exit_intent]
  - id: nps
    type: poll
    source: survey_platform
    interval: 7d

policy:
  min_sample_size: 500
  significance_threshold: 0.95
  max_concurrent_experiments: 3
  require_human_review:
    - pricing_changes
    - core_navigation_changes
    - brand_decisions

tools:
  - analytics_api
  - feature_flag_api
  - ab_test_framework
  - deploy_pipeline
  - design_generation

quality_gate:
  statistical_significance:
    required: true
    threshold: 0.95
  ux_heuristic_check:
    required: true
  rollback_ready:
    required: true

learning:
  on_experiment_complete:
    - update_product_context: true
    - archive_winning_pattern: true
  weekly:
    - update_funnel_baseline: true
    - report_to_brain: true`
  },
  {
    id: "support", name: "Support", color: "#FFD600", angle: 54,
    tagline: "Ticket → Triage → Resolve · close the loop on bugs",
    layers: [
      { label: "01 · SENSOR", text: "Support tickets · churn signals · email replies · NPS detractors" },
      { label: "02 · POLICY", text: "Escalation rules · SLA thresholds · refund authority · tone guardrails" },
      { label: "03 · TOOLS", text: "CRM · email send · ticketing API · KB writer · code generation · deploy" },
      { label: "04 · QA GATE", text: "Response tone check · factual accuracy · resolution confidence threshold" },
      { label: "05 · LEARNING", text: "FAQ updates · playbook refinement · recurring bug pattern flagging" },
    ],
    dri: "IC Support",
    driScope: "Legal threats · Media mentions · Enterprise accounts · Churn risk > $X",
    escapeHatches: [
      "Legal threats or regulatory mentions",
      "Media or press escalations",
      "Enterprise/key account issues",
      "Refunds above authority limit",
    ],
    hermes: `name: support-loop
version: "1.0"
model: claude-sonnet-4-20250514

persona: |
  You are the Customer Support Agent for LOOP/OS.
  You triage incoming issues, resolve what you can
  autonomously, escalate high-stakes cases to IC humans,
  and ship code fixes for recurring bugs — without
  a human in the loop for standard cases.

sensors:
  - id: tickets
    type: webhook
    source: support_platform
    events: [ticket_created, ticket_escalated]
  - id: emails
    type: webhook
    source: email_inbox
    filter: customer_domain
  - id: churn
    type: poll
    source: crm
    filter: churn_risk > 0.7
    interval: 1h

policy:
  auto_respond: true
  refund_authority_usd: 50
  sla_first_response: 2h
  escalate_to_human:
    - legal_threats
    - media_mentions
    - enterprise_accounts
    - refund_above_authority

tools:
  - crm_api
  - email_send
  - ticketing_api
  - kb_writer
  - code_generation
  - deploy_pipeline

quality_gate:
  response_tone_check:
    required: true
  factual_accuracy:
    required: true
  resolution_confidence:
    threshold: 0.85
    fail_action: escalate_human

learning:
  on_novel_question:
    - update_faq: true
  on_resolution:
    - update_playbook: true
  on_recurring_bug:
    - flag_to_eng_loop: true
    - create_github_issue: true`
  },
  {
    id: "sales", name: "Sales", color: "#FF6B35", angle: 126,
    tagline: "Signal → Research → Sequence · qualify and hand off",
    layers: [
      { label: "01 · SENSOR", text: "Intent data · website visits · ICP signals · market changes · job postings" },
      { label: "02 · POLICY", text: "Outreach limits · ICP score threshold · messaging guardrails · GDPR rules" },
      { label: "03 · TOOLS", text: "CRM · email sequencer · LinkedIn API · research API · company intelligence" },
      { label: "04 · QA GATE", text: "ICP score check · message quality review · compliance validation" },
      { label: "05 · LEARNING", text: "ICP model refinement · winning message archive · pipeline pattern update" },
    ],
    dri: "IC Sales",
    driScope: "Enterprise deals · Complex negotiations · Key account relationships",
    escapeHatches: [
      "Enterprise account negotiations",
      "Inbound from strategic targets",
      "Custom pricing or contract terms",
      "Co-sell or partnership discussions",
    ],
    hermes: `name: sales-loop
version: "1.0"
model: claude-sonnet-4-20250514

persona: |
  You are the Sales Intelligence Agent for LOOP/OS.
  You identify qualified leads, research prospects,
  craft personalized outreach, and manage sequences.
  You hand off to IC Sales humans for complex negotiations
  and enterprise accounts. You are the top of funnel engine.

sensors:
  - id: intent
    type: poll
    source: intent_data_platform
    interval: 1h
  - id: website
    type: webhook
    source: website_analytics
    events: [high_intent_visit, pricing_page_view, demo_request]
  - id: crm_stale
    type: poll
    source: crm
    filter: opportunity_stale > 7d
    interval: 24h

policy:
  max_outreach_per_day: 50
  icp_score_threshold: 0.75
  gdpr_compliant: true
  escalate_to_human:
    - enterprise_accounts
    - inbound_target_accounts
    - negotiation_stage
    - custom_pricing_requests

tools:
  - crm_api
  - email_sequencer
  - linkedin_api
  - research_api
  - company_intel_api

quality_gate:
  icp_score_check:
    required: true
    threshold: 0.75
  message_quality:
    required: true
  compliance_check:
    required: true

learning:
  on_closed_deal:
    - update_icp_model: true
    - archive_winning_sequence: true
  weekly:
    - update_pipeline_patterns: true
    - report_to_brain: true`
  },
  {
    id: "knowledge", name: "Knowledge", color: "#B44BFF", angle: 198,
    tagline: "Record → Diorize → Synthesize · the living brain",
    layers: [
      { label: "01 · SENSOR", text: "Meetings · emails · Slack/DMs · decisions · external signals · job changes" },
      { label: "02 · POLICY", text: "PII scrubbing · privacy rules · data retention policy · classification tiers" },
      { label: "03 · TOOLS", text: "Transcription · summarization · vector DB · knowledge graph · skills writer" },
      { label: "04 · QA GATE", text: "Accuracy score · relevance filter · contradiction detection · PII check" },
      { label: "05 · LEARNING", text: "Living brain update · skill distillation · context compression · manual regen" },
    ],
    dri: "IC Ops",
    driScope: "Privacy decisions · Retention policy · What enters the brain and what doesn't",
    escapeHatches: [
      "Sensitive information classification decisions",
      "Data retention and deletion requests",
      "Cross-functional knowledge conflicts",
      "Confidential partner or legal context",
    ],
    hermes: `name: knowledge-loop
version: "1.0"
model: claude-sonnet-4-20250514

persona: |
  You are the Knowledge Distillation Agent for LOOP/OS.
  You ingest all company signals — meetings, emails, Slack,
  decisions — and continuously update the company brain.
  You are the memory of the organization. If it wasn't
  recorded, it didn't happen. You make everything legible.

sensors:
  - id: meetings
    type: webhook
    source: meeting_recorder
    events: [recording_complete, transcript_ready]
  - id: emails
    type: webhook
    source: email_system
    events: [email_sent, email_received]
  - id: slack
    type: webhook
    source: slack
    events: [message_posted, channel_update, dm_sent]
  - id: external
    type: poll
    source: rss_and_apis
    interval: 12h

policy:
  pii_scrubbing: strict
  retention_days: 730
  classification_tiers:
    - confidential
    - internal
    - public
  auto_ingest: true

tools:
  - transcription_api
  - summarization_engine
  - vector_db           # semantic search layer
  - knowledge_graph     # entity relationships
  - skills_file_writer  # distilled skills context
  - manual_generator    # regenerate user manual

quality_gate:
  pii_check:
    required: true
    fail_action: scrub_and_retry
  accuracy_score:
    threshold: 0.9
  contradiction_check:
    required: true
    fail_action: flag_for_review

learning:
  always:
    - update_company_brain: true
  weekly:
    - distill_skills: true
    - regenerate_manual: true
  on_threshold:
    - compress_context: true
    - prune_stale_entries: true`
  },
];

// ─── ORBITAL DIAGRAM ─────────────────────────────────────────────────────────

function OrbitalDiagram({ loops, selected, onSelect, tick }) {
  const CX = 230, CY = 230, LOOP_R = 155, INNER_R = 52;

  return (
    <svg viewBox="0 0 460 460" width="100%" style={{ maxWidth: 460, overflow: "visible" }}>
      <defs>
        <radialGradient id="brainGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A1A80" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#060615" stopOpacity="0.95" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Human edge ring */}
      <circle cx={CX} cy={CY} r={215}
        fill="none" stroke="#3A1515" strokeWidth="1" strokeDasharray="3 12" />

      {/* Orbital ring */}
      <circle cx={CX} cy={CY} r={LOOP_R}
        fill="none" stroke="#1A1A3A" strokeWidth="1" strokeDasharray="4 8" />

      {/* Connection lines + particles */}
      {loops.map((l, li) => {
        const rad = (l.angle * Math.PI) / 180;
        const lx = CX + LOOP_R * Math.cos(rad);
        const ly = CY + LOOP_R * Math.sin(rad);
        const isSel = l.id === selected;
        const t = ((tick * 1.5 + li * 40) % 160) / 160;
        const px = CX + (lx - CX) * t;
        const py = CY + (ly - CY) * t;
        const t2 = ((tick * 1.5 + li * 40 + 80) % 160) / 160;
        const px2 = lx + (CX - lx) * t2;
        const py2 = ly + (CY - ly) * t2;
        return (
          <g key={l.id}>
            <line x1={CX} y1={CY} x2={lx} y2={ly}
              stroke={l.color}
              strokeWidth={isSel ? 1.5 : 0.8}
              strokeOpacity={isSel ? 0.5 : 0.12}
              strokeDasharray="3 7"
            />
            <circle cx={px} cy={py} r="2.5" fill={l.color} opacity={0.7} />
            <circle cx={px2} cy={py2} r="1.5" fill={l.color} opacity={0.4} />
          </g>
        );
      })}

      {/* Brain center */}
      <circle cx={CX} cy={CY} r={INNER_R + 10}
        fill={`rgba(20,20,120,${0.05 + Math.sin(tick * 0.05) * 0.03})`}
      />
      <circle cx={CX} cy={CY} r={INNER_R}
        fill="url(#brainGrad)"
        stroke="#2828B0"
        strokeWidth="1.5"
        filter="url(#glow)"
      />
      <text x={CX} y={CY - 10} textAnchor="middle"
        fontSize="9" fill="#5555CC" letterSpacing="2" fontFamily="'Courier New',monospace">
        COMPANY
      </text>
      <text x={CX} y={CY + 5} textAnchor="middle"
        fontSize="15" fill="#8888FF" fontWeight="bold" fontFamily="'Courier New',monospace">
        BRAIN
      </text>
      <text x={CX} y={CY + 19} textAnchor="middle"
        fontSize="8" fill="#303090" letterSpacing="3" fontFamily="'Courier New',monospace">
        CONTEXT
      </text>

      {/* Loop nodes */}
      {loops.map((l) => {
        const rad = (l.angle * Math.PI) / 180;
        const lx = CX + LOOP_R * Math.cos(rad);
        const ly = CY + LOOP_R * Math.sin(rad);
        const isSel = l.id === selected;
        const pulse = Math.sin(tick * 0.07 + l.angle * 0.1) * 4;
        const r = 34;

        return (
          <g key={l.id} onClick={() => onSelect(l.id)} style={{ cursor: "pointer" }}>
            <circle cx={lx} cy={ly} r={r + 14 + pulse}
              fill={l.color} opacity={isSel ? 0.1 : 0.04} />
            <circle cx={lx} cy={ly} r={r}
              fill="#080812"
              stroke={l.color}
              strokeWidth={isSel ? 2.5 : 1}
              strokeOpacity={isSel ? 1 : 0.45}
              filter={isSel ? "url(#glow)" : undefined}
            />
            <text x={lx} y={ly - 5} textAnchor="middle"
              fontSize="8.5" fill={l.color} letterSpacing="0.5"
              opacity={isSel ? 1 : 0.75}
              fontFamily="'Courier New',monospace">
              {l.name.toUpperCase()}
            </text>
            <text x={lx} y={ly + 8} textAnchor="middle"
              fontSize="7" fill={l.color} opacity={isSel ? 0.6 : 0.35}
              fontFamily="'Courier New',monospace">
              LOOP
            </text>
          </g>
        );
      })}

      {/* Human DRI badges */}
      {[
        { label: "FOUNDER", angle: -54, r: 218 },
        { label: "IC ENG", angle: 18, r: 218 },
        { label: "IC SALES", angle: 90, r: 218 },
      ].map(h => {
        const rad = (h.angle * Math.PI) / 180;
        const hx = CX + h.r * Math.cos(rad);
        const hy = CY + h.r * Math.sin(rad);
        return (
          <g key={h.label}>
            <circle cx={hx} cy={hy} r={16}
              fill="#0A0508" stroke="#FF4444" strokeWidth="1" strokeOpacity="0.4"
              strokeDasharray="2 3" />
            <text x={hx} y={hy + 3} textAnchor="middle"
              fontSize="6.5" fill="#FF4444" opacity={0.65}
              fontFamily="'Courier New',monospace" letterSpacing="0.3">
              {h.label}
            </text>
          </g>
        );
      })}

      {/* Human edge label */}
      <text x={CX} y={17} textAnchor="middle"
        fontSize="8" fill="#4A1515" letterSpacing="3"
        fontFamily="'Courier New',monospace">
        HUMAN EDGE
      </text>
    </svg>
  );
}

// ─── DETAIL PANEL ────────────────────────────────────────────────────────────

function Intro() {
  const principles = [
    ["Burn tokens,", "not headcount"],
    ["No middle", "management"],
    ["ICs + DRIs", "not committees"],
    ["Record", "everything"],
    ["Software is", "ephemeral"],
    ["Context is", "the value"],
  ];
  return (
    <div>
      <div style={{ fontSize: 10, color: "#3030A0", letterSpacing: 5, marginBottom: 14 }}>
        OPERATING MODEL
      </div>
      <h2 style={{ fontSize: 22, margin: "0 0 12px", color: "#DDDDF0", letterSpacing: 1, fontWeight: "normal" }}>
        Not a Roman Legion.
      </h2>
      <p style={{ color: "#505070", fontSize: 12, lineHeight: 1.9, maxWidth: 460, marginBottom: 28 }}>
        Traditional companies are hierarchies — humans as conduits for information
        flowing up and down. LOOP/OS replaces that structure with five recursive
        self-improving AI loops, each running via a dedicated Hermes agent. Humans
        sit at the edges, handling what models can't reach yet.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 28 }}>
        {principles.map(([a, b]) => (
          <div key={a} style={{
            padding: "12px 14px",
            border: "1px solid #1A1A2E",
            borderRadius: 3,
            background: "#0A0A14",
          }}>
            <div style={{ fontSize: 12, color: "#DDDDF0" }}>{a}</div>
            <div style={{ fontSize: 11, color: "#404060" }}>{b}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "14px 18px", background: "#0A0508", border: "1px solid #2A1515", borderRadius: 3 }}>
        <div style={{ fontSize: 10, color: "#FF4444", opacity: 0.6, letterSpacing: 3, marginBottom: 8 }}>
          HUMAN ROLES
        </div>
        <div style={{ fontSize: 12, color: "#705050", lineHeight: 1.8 }}>
          Founder · IC Engineers · IC Sales — each a named DRI.
          They sit at the edges: novel situations, ethical calls,
          high-stakes moments, and anywhere the model can't go yet.
        </div>
      </div>
      <div style={{ fontSize: 10, color: "#252535", marginTop: 24, letterSpacing: 2 }}>
        SELECT A LOOP TO INSPECT ITS HERMES AGENT CONFIG ↑
      </div>
    </div>
  );
}

function LoopDetail({ loop, tab, setTab }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(loop.hermes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 9, color: loop.color, letterSpacing: 5, marginBottom: 8, opacity: 0.7 }}>
          HERMES AGENT · RECURSIVE LOOP
        </div>
        <div style={{ fontSize: 20, color: loop.color, letterSpacing: 2, fontWeight: "bold" }}>
          {loop.name.toUpperCase()} LOOP
        </div>
        <div style={{ fontSize: 11, color: "#505070", marginTop: 6 }}>
          {loop.tagline}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #1A1A2E", marginBottom: 22 }}>
        {[["layers", "5-LAYER MODEL"], ["hermes", "HERMES CONFIG"], ["dri", "DRI + ESCALATION"]].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "8px 18px",
            fontSize: 9, letterSpacing: 2,
            fontFamily: "'Courier New',monospace",
            color: tab === id ? loop.color : "#404060",
            borderBottom: tab === id ? `2px solid ${loop.color}` : "2px solid transparent",
            marginBottom: -1,
          }}>
            {label}
          </button>
        ))}
      </div>

      {/* LAYERS */}
      {tab === "layers" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {loop.layers.map((layer, i) => (
            <div key={i} style={{
              padding: "14px 18px",
              borderLeft: `3px solid ${loop.color}`,
              border: `1px solid ${loop.color}20`,
              borderLeftWidth: 3,
              borderLeftColor: loop.color,
              borderRadius: 3,
              background: "#0A0A14",
            }}>
              <div style={{ fontSize: 9, color: loop.color, letterSpacing: 3, marginBottom: 6 }}>
                {layer.label}
              </div>
              <div style={{ fontSize: 12, color: "#9090B0", lineHeight: 1.7 }}>
                {layer.text}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* HERMES CONFIG */}
      {tab === "hermes" && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontSize: 9, color: "#404060", letterSpacing: 2 }}>
              agents/{loop.id}-loop.yaml
            </div>
            <button onClick={handleCopy} style={{
              background: "none",
              border: `1px solid ${loop.color}50`,
              color: loop.color,
              cursor: "pointer",
              padding: "4px 14px",
              fontSize: 9, letterSpacing: 2,
              fontFamily: "'Courier New',monospace",
              borderRadius: 2,
            }}>
              {copied ? "COPIED ✓" : "COPY YAML"}
            </button>
          </div>
          <pre style={{
            background: "#06060E",
            border: "1px solid #14142A",
            borderRadius: 3,
            padding: "18px 20px",
            fontSize: 11,
            color: "#7070BB",
            lineHeight: 1.85,
            overflowX: "auto",
            margin: 0,
            maxHeight: 420,
            overflowY: "auto",
          }}>
            {loop.hermes}
          </pre>
        </div>
      )}

      {/* DRI */}
      {tab === "dri" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{
            padding: "20px",
            border: "1px solid #2A1515",
            borderRadius: 3,
            background: "#0A0508",
          }}>
            <div style={{ fontSize: 9, color: "#FF4444", letterSpacing: 3, marginBottom: 10 }}>
              DIRECTLY RESPONSIBLE INDIVIDUAL
            </div>
            <div style={{ fontSize: 17, color: "#DDDDF0", marginBottom: 8 }}>{loop.dri}</div>
            <div style={{ fontSize: 11, color: "#604040", lineHeight: 1.8 }}>
              {loop.driScope}
            </div>
          </div>
          <div style={{
            padding: "18px 20px",
            border: "1px solid #1A1A2E",
            borderRadius: 3,
            background: "#0A0A14",
          }}>
            <div style={{ fontSize: 9, color: "#404060", letterSpacing: 2, marginBottom: 12 }}>
              HUMAN ESCALATION TRIGGERS
            </div>
            {loop.escapeHatches.map((item, i) => (
              <div key={i} style={{
                fontSize: 12, color: "#707090",
                padding: "7px 0",
                borderBottom: i < loop.escapeHatches.length - 1 ? "1px solid #12121E" : "none",
                display: "flex", gap: 12, alignItems: "center",
              }}>
                <span style={{ color: "#FF4444", opacity: 0.5, fontSize: 10 }}>→</span>
                {item}
              </div>
            ))}
          </div>
          <div style={{
            padding: "14px 18px",
            border: `1px solid ${loop.color}20`,
            borderRadius: 3,
            background: "#09090F",
          }}>
            <div style={{ fontSize: 9, color: "#303050", letterSpacing: 2, marginBottom: 8 }}>
              EVERYTHING ELSE
            </div>
            <div style={{ fontSize: 11, color: "#404060", lineHeight: 1.7 }}>
              Handled autonomously by the Hermes agent. No committee. No approval chain.
              The loop runs, learns, and improves.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function LoopOS() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("layers");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 80);
    return () => clearInterval(id);
  }, []);

  const loop = LOOPS.find(l => l.id === selected);

  const handleSelect = (id) => {
    setSelected(prev => prev === id ? null : id);
    setTab("layers");
  };

  return (
    <div style={{
      fontFamily: "'Courier New', monospace",
      background: "#06060C",
      color: "#DDDDF0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* HEADER */}
      <header style={{
        padding: "16px 28px",
        borderBottom: "1px solid #141428",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#07070E",
      }}>
        <div>
          <div style={{ fontSize: 9, color: "#2525A0", letterSpacing: 5, marginBottom: 5 }}>
            LOOP/OS · COMPANY OPERATING SYSTEM
          </div>
          <div style={{ fontSize: 18, letterSpacing: 2, color: "#D0D0EE" }}>
            SELF-IMPROVING COMPANY BLUEPRINT
          </div>
          <div style={{ fontSize: 10, color: "#404060", marginTop: 3 }}>
            5 recursive AI loops · Hermes agent harness · Humans at the edges
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {LOOPS.map(l => {
            const glowSize = 5 + Math.sin(tick * 0.08 + l.angle * 0.05) * 3;
            return (
              <div key={l.id}
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => handleSelect(l.id)}>
                <div style={{
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: l.color,
                  boxShadow: `0 0 ${glowSize}px ${l.color}`,
                  margin: "0 auto 5px",
                  border: selected === l.id ? `1px solid ${l.color}` : "none",
                }} />
                <div style={{ fontSize: 8, color: selected === l.id ? l.color : "#363650", letterSpacing: 1 }}>
                  {l.name.slice(0, 4).toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      </header>

      {/* BODY */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "460px 1fr",
        flex: 1,
        minHeight: 0,
      }}>
        {/* LEFT: diagram */}
        <div style={{
          borderRight: "1px solid #141428",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
          background: "#07070D",
        }}>
          <OrbitalDiagram
            loops={LOOPS}
            selected={selected}
            onSelect={handleSelect}
            tick={tick}
          />
          <div style={{ fontSize: 9, color: "#1E1E30", marginTop: 12, textAlign: "center", letterSpacing: 2 }}>
            CLICK NODE TO INSPECT LOOP
          </div>
        </div>

        {/* RIGHT: detail */}
        <div style={{
          padding: "28px 36px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 72px)",
        }}>
          {loop ? <LoopDetail loop={loop} tab={tab} setTab={setTab} /> : <Intro />}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        padding: "10px 28px",
        borderTop: "1px solid #101020",
        display: "flex",
        justifyContent: "space-between",
        background: "#05050B",
        fontSize: 9, color: "#202035", letterSpacing: 2,
      }}>
        <span>LOOP/OS · YC BATCH TALK · TOM BLOMFIELD</span>
        <span>HERMES AGENT HARNESS · FULLY AUTONOMOUS</span>
        <span>HUMANS AT THE EDGES · ICS + DRIS ONLY</span>
      </footer>
    </div>
  );
}
