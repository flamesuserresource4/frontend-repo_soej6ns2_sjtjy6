import React from 'react';

const studies = [
  {
    id: 0,
    title: 'Which Tech Project Will Actually Make Us Money?',
    problem: 'Leadership unsure which digital initiative would drive profitable growth.',
    solution: 'Built an ROI model and validated with rapid prototypes; launched only what cleared payback targets.',
    outcome: 'Projected 14-month payback → achieved in 9 months, +28% LTV/CAC uplift.',
    services: ['ROI Audit', 'Rapid Prototyping', 'Product Strategy'],
  },
  {
    id: 1,
    title: 'Checkout Conversion Lift',
    problem: 'Cart abandonment was 74% across mobile web.',
    solution: 'Redesigned funnel, reduced steps, added wallet pay and trust cues.',
    outcome: '+19.4% conversion, −27% support tickets.',
    services: ['UX', 'Experimentation', 'Frontend'],
  },
  {
    id: 2,
    title: 'Field Ops Automation',
    problem: 'Manual scheduling caused missed SLAs and overtime.',
    solution: 'Optimized routing with constraints + mobile app for crews.',
    outcome: '−35% travel time, +22% jobs per day.',
    services: ['Operations', 'Mobile', 'Optimization'],
  },
  {
    id: 3,
    title: 'B2B Lead Quality',
    problem: 'Sales spent time on low-intent inbound.',
    solution: 'Scoring model and qualification workflow integrated to CRM.',
    outcome: '+31% SQL rate, −18% cycle time.',
    services: ['Data', 'RevOps', 'Integrations'],
  },
  {
    id: 4,
    title: 'Self-Serve Onboarding',
    problem: 'Enterprise onboarding blocked by CSM availability.',
    solution: 'Interactive setup flows with guardrails and in-product education.',
    outcome: 'Time-to-value reduced from 21 to 6 days.',
    services: ['Product', 'Design Systems', 'Content'],
  },
  {
    id: 5,
    title: 'Pricing Experiment Platform',
    problem: 'Static pricing limited margin optimization.',
    solution: 'Rules engine with guardrails and experiment analysis.',
    outcome: '+6.7% gross margin without conversion loss.',
    services: ['Platform', 'Data Science', 'Analytics'],
  },
  {
    id: 6,
    title: 'Support Deflection',
    problem: 'Tier-1 tickets overwhelming agents.',
    solution: 'Knowledge graph + guided flows + in-app nudges.',
    outcome: '−42% ticket volume, CSAT +0.3.',
    services: ['AI Assist', 'CX', 'Product'],
  },
  {
    id: 7,
    title: 'Retail Inventory Accuracy',
    problem: 'Phantom stock hurting sales and trust.',
    solution: 'Computer vision audits and exception workflows.',
    outcome: '+3.1% net sales in pilot stores.',
    services: ['Computer Vision', 'Data Platform'],
  },
  {
    id: 8,
    title: 'Streaming Analytics Revamp',
    problem: 'Dashboard latency made daily ops reactive.',
    solution: 'Event pipeline with real-time KPIs and alerts.',
    outcome: 'Decisions moved from weekly to hourly cadence.',
    services: ['Data Engineering', 'Observability'],
  },
  {
    id: 9,
    title: 'Design System Unification',
    problem: 'Fragmented UI slowed delivery and created inconsistencies.',
    solution: 'Tokenized design system and shared components.',
    outcome: 'Ship velocity +38%, NPS +12.',
    services: ['Design Systems', 'Frontend'],
  },
  {
    id: 10,
    title: 'Fraud Risk Reduction',
    problem: 'Chargebacks spiking without clear patterns.',
    solution: 'Feature store and layered rules with model-driven reviews.',
    outcome: '−58% fraud loss, negligible false positives.',
    services: ['Risk', 'Machine Learning'],
  },
];

function CaseCard({ title, problem, solution, outcome, services }) {
  return (
    <article className="group relative rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 opacity-70" />
      <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">{title}</h3>
      <div className="space-y-2 text-sm leading-relaxed text-gray-700">
        <p><span className="font-semibold text-gray-900">Problem: </span>{problem}</p>
        <p><span className="font-semibold text-gray-900">Solution: </span>{solution}</p>
        <p><span className="font-semibold text-gray-900">Outcome: </span>{outcome}</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {services.map((s) => (
          <li key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-200">
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="relative w-full bg-gradient-to-b from-white to-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Case Studies</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Real business problems, clear solutions, measurable outcomes. Designed to work as cards or full-bleed stories.
            </p>
          </div>
          <a href="#philosophy" className="text-sm font-semibold text-gray-900 underline-offset-4 hover:underline">
            Our Philosophy
          </a>
        </div>

        {/* Intermission / Quote inside the flow for a visual pause */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-black text-white">
          <div className="relative isolate">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-600/30 via-violet-600/20 to-cyan-500/30" />
            <div className="relative px-6 py-10 sm:px-10 sm:py-12">
              <blockquote className="max-w-4xl text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                “We build systems that think — and strategies that scale.”
              </blockquote>
              <p className="mt-3 text-sm text-white/80">Two Adityas, one mission: clarity through technology.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((cs) => (
            <CaseCard key={cs.id} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
