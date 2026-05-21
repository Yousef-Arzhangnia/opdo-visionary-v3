import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/insights")({
  component: Insights,
  head: () => ({
    meta: [
      { title: "Insights — Opdo" },
      {
        name: "description",
        content:
          "Notes on agentic AI, optical verification, and how engineering teams are changing the way they work.",
      },
      { property: "og:title", content: "Insights — Opdo" },
      {
        property: "og:description",
        content: "Notes on agentic AI and optical verification.",
      },
    ],
  }),
});

const posts = [
  {
    t: "Why optics verification belongs earlier in the design cycle",
    d: "The 60% argument from chip design, applied to optics and fab lead times.",
    tag: "Verification",
  },
  {
    t: "What chip design teaches photonics about agentic AI",
    d: "The cross-industry parallel and why optics is the next domino.",
    tag: "Agentic AI",
  },
  {
    t: "Verification, not generation: where AI actually helps optical engineers",
    d: "The positioning piece on the engineer staying in control.",
    tag: "Perspective",
  },
];

function Insights() {
  return (
    <PageShell
      eyebrow="Insights"
      title="Insights"
      intro="Notes on agentic AI, optical verification, and how engineering teams are changing the way they work."
    >
      <ul className="divide-y divide-border border-y border-border">
        {posts.map((p) => (
          <li key={p.t} className="flex flex-col gap-2 py-8 md:flex-row md:items-start md:justify-between md:gap-12">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-snug md:text-3xl">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
            <span className="text-sm text-muted-foreground md:pt-3">Coming soon</span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}