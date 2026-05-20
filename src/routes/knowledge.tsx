import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/knowledge")({
  component: Knowledge,
  head: () => ({
    meta: [
      { title: "Knowledge — Opdo" },
      { name: "description", content: "Papers, datasets and reference designs from the Opdo optical corpus." },
    ],
  }),
});

function Knowledge() {
  return (
    <PageShell
      eyebrow="The corpus"
      title="An evolving optical body of knowledge."
      intro="Every design, measurement and decision feeds back into our agents. A growing library of papers, datasets and reference designs."
    >
      <ul className="divide-y divide-border border-y border-border">
        {[
          { t: "Freeform tolerancing under thermal load", d: "Whitepaper · 2026" },
          { t: "Metasurface-assisted achromat design", d: "Reference design · 2026" },
          { t: "Agentic ray-tracing benchmarks", d: "Dataset · 2026" },
          { t: "Stray-light primer for compact sensors", d: "Guide · 2026" },
        ].map((p) => (
          <li key={p.t} className="flex items-center justify-between gap-6 py-6">
            <div>
              <h3 className="text-lg font-semibold">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
            <span className="text-sm text-muted-foreground">→</span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}