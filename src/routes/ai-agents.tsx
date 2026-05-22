import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaveBackdrop } from "@/components/wave-backdrop";

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
    <div className="min-h-screen bg-background">
      <SiteHeader variant="dark" />

      {/* BLOCK 1 — DARK: Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-24 pt-40 text-ink-foreground md:pt-48">
        <WaveBackdrop variant="spectrum" tint="dark" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            AI Agents
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            AI agents for optical verification
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Every optical problem is different. We configure the agent space for it. A few examples:
          </p>
        </div>
      </section>

      {/* BLOCK 1 cont. — DARK: What the agents do */}
      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-foreground/30 to-transparent"
        />
        <WaveBackdrop variant="ridge" tint="dark" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            01 · Functionality
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            What the agents do
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { t: "Ask Opdo", d: "Ask questions about your design in plain language and get answers grounded in its physics." },
              { t: "Run test", d: "The agents run state-of-the-art optical tools and return clear pass/fail results." },
              { t: "Refine setup", d: "Tune the verification to your specific problem, constraints, and tolerances." },
              { t: "Fix errors", d: "The agents suggest concrete corrections. Nothing changes until you approve it." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-8 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 2 — LIGHT: How a verification run works */}
      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <WaveBackdrop variant="mirror" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            02 · Process
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            How a verification run works
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
            Nothing is a black box. Each run returns a sequence you review and approve at every step.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
          <p className="mt-12 font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
            The agents propose. You decide. You remain the engineer of record.
          </p>
        </div>
      </section>

      {/* BLOCK 3 — DARK: What the agents verify */}
      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <WaveBackdrop variant="ghost" tint="dark" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            03 · Use Cases
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            What the agents verify
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-foreground/75">
            Every optical problem is different. We configure the agent space for yours. A few examples:
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {verifyCards.map((c) => (
              <div key={c.t} className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 p-8 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-semibold">{c.t}</h3>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-foreground/50">You bring</dt>
                    <dd className="mt-1 text-ink-foreground/85">{c.bring}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-foreground/50">The agents check</dt>
                    <dd className="mt-1 text-ink-foreground/85">{c.check}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-foreground/50">You get back</dt>
                    <dd className="mt-1 text-ink-foreground/85">{c.get}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 4 — LIGHT: Runs on your infra + CTA */}
      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <WaveBackdrop variant="edge" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            04 · Deployment
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Runs on your infrastructure
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
            The agent space can be deployed locally. Your design data and IP stay on your network.
            We configure it for you; you run it.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background pb-32 md:pb-40">
        <WaveBackdrop variant="tilt" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            See if Opdo fits your problem
          </h2>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
