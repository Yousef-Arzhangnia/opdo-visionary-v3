import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/ai-agents")({
  component: AiAgents,
  head: () => ({
    meta: [
      { title: "AI Agents — Opdo" },
      {
        name: "description",
        content:
          "A configured AI agent space that verifies your optical design — coatings, tolerancing, stray light, thermal and more.",
      },
      { property: "og:title", content: "AI Agents — Opdo" },
      {
        property: "og:description",
        content: "Verification, not generation. The agents propose; you decide.",
      },
    ],
  }),
});

const verifyCards = [
  {
    t: "Coatings",
    bring: "your coating prescription and layer stack.",
    check: "spectral performance, angle sensitivity, and manufacturability of the stack.",
    get: "flagged deviations from spec with the physics reason, plus suggested stack adjustments.",
  },
  {
    t: "Tolerancing",
    bring: "your optical design and tolerance budget.",
    check: "sensitivity analysis and which tolerances drive yield and performance risk.",
    get: "ranked tolerance risks and suggested adjustments, with an as-built performance estimate.",
  },
  {
    t: "Stray light",
    bring: "your optical design and mechanical layout.",
    check: "stray light paths, ghost reflections, and scatter sources.",
    get: "identified stray light paths traced to their origin, with suggested baffling or surface changes.",
  },
  {
    t: "Thermal",
    bring: "your design and its thermal environment.",
    check: "thermal defocus, stress, and performance shift across the temperature range.",
    get: "flagged thermal sensitivities with suggested athermalization options.",
  },
  {
    t: "Ghost & flare analysis",
    bring: "your optical layout and source geometry.",
    check: "ghost image formation, flare intensity, and worst-case viewing scenarios.",
    get: "ranked ghost paths and surface changes to suppress them.",
  },
  {
    t: "Manufacturability (DfM) review",
    bring: "your prescription, materials, and tolerance budget.",
    check: "fabrication feasibility against real shop capabilities and yields.",
    get: "manufacturability score with concrete edits to de-risk fabrication.",
  },
  {
    t: "Freeform surface verification",
    bring: "your freeform surface description and target spec.",
    check: "surface form, slope, and sag against metrology constraints.",
    get: "deviation maps and reparameterizations the shop can actually cut.",
  },
  {
    t: "Alignment & assembly tolerancing",
    bring: "your assembly drawing and alignment scheme.",
    check: "cumulative alignment sensitivities and adjuster ranges.",
    get: "ranked alignment risks with suggested compensators and tolerances.",
  },
  {
    t: "Optical performance vs. specification",
    bring: "your design and the full performance spec.",
    check: "MTF, wavefront, distortion, and uniformity across field and wavelength.",
    get: "a per-requirement pass/fail with the physics behind each margin.",
  },
  {
    t: "Material & glass selection",
    bring: "your design and environmental constraints.",
    check: "glass map options for dispersion, transmission, and availability.",
    get: "ranked material swaps with the impact on performance and cost.",
  },
];

function AiAgents() {
  return (
    <PageShell
      eyebrow="AI Agents"
      title="AI agents for optical verification"
      intro="Opdo delivers a configured AI agent space — built by us, set up around your specific optical problem. The agents take a design you have already thought through and verify it: checking it against your spec, testing it with state-of-the-art optical tools, and suggesting improvements you approve. They do not generate designs from scratch. They make the design you bring better, faster, and ready to manufacture."
    >
      {/* What the agents do */}
      <section className="mt-8">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">What the agents do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { t: "Ask Opdo", d: "Ask questions about your design in plain language and get answers grounded in its physics." },
            { t: "Run test", d: "The agents run state-of-the-art optical tools and return clear pass/fail results." },
            { t: "Refine setup", d: "Tune the verification to your specific problem, constraints, and tolerances." },
            { t: "Fix errors", d: "The agents suggest concrete corrections. Nothing changes until you approve it." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How a run works */}
      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">How a verification run works</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          Nothing is a black box. Each run returns a sequence you review and approve at every step.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { k: "01", t: "Flagged issues", d: "Every issue the agents find, where it is, how severe it is, and the physics reason behind it." },
            { k: "02", t: "Suggested edits", d: "Concrete fixes you accept or reject. Nothing is applied to your design without your approval." },
            { k: "03", t: "Optimized manufacturing design", d: "Once you have approved the changes, a manufacturing-ready design — the milestone that connects verification to a real part." },
          ].map((s) => (
            <div key={s.k} className="border-t border-border pt-6">
              <div className="font-mono text-xs text-muted-foreground">{s.k}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
          The agents propose. You decide. You remain the engineer of record.
        </p>
      </section>

      {/* Gallery */}
      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">What the agents verify</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          Every optical problem is different. We configure the agent space for yours. A few examples:
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {verifyCards.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">You bring</dt>
                  <dd className="mt-1 text-foreground/85">{c.bring}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">The agents check</dt>
                  <dd className="mt-1 text-foreground/85">{c.check}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">You get back</dt>
                  <dd className="mt-1 text-foreground/85">{c.get}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Runs on your infra */}
      <section className="mt-24 rounded-2xl border border-border bg-card p-10">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Runs on your infrastructure</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
          The agent space can be deployed locally. Your design data and IP stay on your network.
          We configure it for you; you run it.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">See if Opdo fits your problem</h2>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Contact us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}