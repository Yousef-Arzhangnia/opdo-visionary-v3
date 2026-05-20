import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/ai-agents")({
  component: AiAgents,
  head: () => ({
    meta: [
      { title: "AI agents — Opdo" },
      { name: "description", content: "Autonomous optical design agents for tolerancing, ray-tracing and verification." },
    ],
  }),
});

function AiAgents() {
  return (
    <PageShell
      eyebrow="Autonomous design"
      title="Agents that design optics."
      intro="A fleet of specialised agents handles ray-tracing, tolerancing, stray-light analysis, thermal modelling and manufacturability — running in parallel, converging on production-ready designs."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { t: "Designer", d: "Generates and optimises optical prescriptions from a target spec." },
          { t: "Verifier", d: "Runs Monte-Carlo tolerancing and stray-light sweeps in minutes." },
          { t: "Sourcer", d: "Matches each part to the right vendor with realistic lead times." },
        ].map((a) => (
          <div key={a.t} className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-semibold">{a.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}