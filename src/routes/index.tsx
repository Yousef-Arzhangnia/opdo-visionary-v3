import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroWaves from "@/assets/hero-waves.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroOptic } from "@/components/hero-optic";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Opdo — AI-native optics" },
      {
        name: "description",
        content:
          "Opdo designs precision optics with AI. From custom lens systems to fast-turn parts, engineered by intelligent agents.",
      },
      { property: "og:title", content: "Opdo — AI-native optics" },
      {
        property: "og:description",
        content: "Precision optics designed by AI agents. Fast parts, deep capabilities.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO — dark */}
      <section className="relative isolate min-h-screen overflow-hidden bg-ink text-ink-foreground">
        <SiteHeader variant="dark" />

        {/* Full-screen wave structure */}
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
          width={1920}
          height={1080}
        />
        <HeroOptic />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.85)_100%)]"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-40 md:px-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Opdo
              <br />
              <span className="text-ink-foreground/70">AI-native</span>
              <br />
              optics.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">
              Verify your optical design in days.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/capabilities"
                className="rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Order Prototype
              </Link>
              <Link
                to="/ai-agents"
                className="rounded-full border border-ink-foreground/30 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Meet the agents
              </Link>
            </div>
          </div>
        </div>

        {/* footer bar of hero */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-ink-foreground/10">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:px-10">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60 transition-colors hover:text-ink-foreground"
            >
              Scroll ↓
            </button>
          </div>
        </div>
      </section>

      {/* LIGHT SECTION */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                What we build
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Optics, accelerated by intelligence.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                Opdo combines generative design, ray-tracing agents and an in-house
                fabrication network. The result: bespoke optical assemblies engineered
                end-to-end without the traditional six-month wait.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {[
                  { k: "01", t: "AI agents", d: "Autonomous design loops covering tolerancing, stray-light and thermal." },
                  { k: "02", t: "Fast parts", d: "Prototype-to-precision parts in days, shipped from validated suppliers." },
                  { k: "03", t: "Capabilities", d: "Freeform, aspheric, diffractive, metasurface. From UV to LWIR." },
                  { k: "04", t: "Knowledge", d: "An evolving optical corpus — papers, datasets, and reference designs." },
                ].map((c) => (
                  <div key={c.k} className="border-t border-border pt-4">
                    <div className="font-mono text-xs text-muted-foreground">{c.k}</div>
                    <h3 className="mt-2 text-xl font-semibold">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — dark band */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60">
            How it works
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            From spec to shipped part in four steps.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              { k: "Brief", d: "Drop a spec, sketch or reference. Agents extract constraints automatically." },
              { k: "Design", d: "Generative ray-tracing explores thousands of candidate prescriptions." },
              { k: "Tolerance", d: "Monte-Carlo and stray-light analysis converge on a manufacturable design." },
              { k: "Fabricate", d: "Routed to a qualified shop. Parts arrive measured and certified." },
            ].map((s, i) => (
              <div key={s.k} className="border-t border-ink-foreground/20 pt-6">
                <div className="font-mono text-xs text-ink-foreground/50">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-semibold">{s.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { n: "5 days", l: "Median design-to-prototype" },
              { n: "λ/20", l: "Surface accuracy on freeform" },
              { n: "200 nm – 12 µm", l: "Spectral coverage" },
            ].map((m) => (
              <div key={m.l}>
                <div className="font-display text-5xl font-semibold md:text-7xl">{m.n}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {m.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <blockquote className="font-display text-3xl font-medium leading-snug tracking-tight md:text-5xl">
            “Opdo gave us a manufacturable freeform prescription in under a week.
            The traditional cycle would have been three months.”
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Lead optical engineer · stealth imaging startup
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 md:px-10">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            Have a system that needs optics?
          </h2>
          <p className="max-w-2xl text-lg text-ink-foreground/70">
            Brief our agents in minutes. Get a feasibility study, design candidates
            and a quote — without scheduling a single intro call.
          </p>
          <Link
            to="/capabilities"
            className="rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
