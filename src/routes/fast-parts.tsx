import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WaveBackdrop } from "@/components/wave-backdrop";

export const Route = createFileRoute("/fast-parts")({
  component: FastParts,
  head: () => ({
    meta: [
      { title: "Fast Parts — Opdo" },
      {
        name: "description",
        content:
          "Verified, manufacturing-ready optical designs go straight to fast prototyping — real parts, fast.",
      },
      { property: "og:title", content: "Fast Parts — Opdo" },
      {
        property: "og:description",
        content: "From verified design to real part fast.",
      },
    ],
  }),
});

function FastParts() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader variant="dark" />

      {/* BLOCK 1 — DARK: Hero */}
      <section className="relative isolate overflow-hidden bg-ink pb-24 pt-40 text-ink-foreground md:pt-48">
        <WaveBackdrop variant="spectrum" tint="dark" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            Fast Parts
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            From verified design to real part fast
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Digital verification tells you a design should work. Physical verification proves it.
            Once your design is verified and optimized in Opdo's agent space, you can bring it
            straight to prototyping as a real optical component.
          </p>
        </div>
      </section>

      {/* BLOCK 1 cont. — DARK: Why it's fast */}
      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-foreground/30 to-transparent"
        />
        <WaveBackdrop variant="ridge" tint="dark" />
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            01 · Why it's fast
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Why it's fast
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink-foreground/75">
            Your design is verified by AI and checked for manufacturability. Quoting is almost
            instant so your prototyping can start immediately.
          </p>
          <p className="mt-6 max-w-3xl text-sm italic text-ink-foreground/50">
            [Prototype turnaround: prototypes in [X] weeks, not months.]
          </p>
        </div>
      </section>

      {/* BLOCK 2 — LIGHT: Verification loop */}
      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <WaveBackdrop variant="mirror" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            02 · The loop, closed
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            The verification loop, closed
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
            Verify in software. Confirm in hardware. Iterate. Because each loop is fast, you run
            more of them. And more iterations means better optics.
          </p>
        </div>
      </section>

      {/* BLOCK 2 cont. — LIGHT: Production specs */}
      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
        />
        <WaveBackdrop variant="tilt" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            03 · Production
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Production specifications
          </h2>
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-sm text-muted-foreground">
            [Insert production specs — part classes, tolerances, lead times, materials.]
          </div>
        </div>
      </section>

      {/* BLOCK 3 — DARK: CTA */}
      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <WaveBackdrop variant="ghost" tint="dark" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            04 · Get started
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Bring us a verified design
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Order a prototype
            </Link>
            <Link
              to="/contact"
              className="inline-block rounded-full border border-ink-foreground/40 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
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
