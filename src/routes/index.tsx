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
            <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink-foreground/60">
              <span className="h-px w-8 bg-ink-foreground/60" />
              Precision optics · est. 2026
            </p>
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
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.2em] text-ink-foreground/50 md:px-10">
            <span>Wavefront · diffraction · freeform</span>
            <span className="hidden md:inline">Scroll ↓</span>
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

      <SiteFooter />
    </div>
  );
}
