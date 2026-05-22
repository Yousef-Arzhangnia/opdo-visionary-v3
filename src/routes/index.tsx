import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroWaves from "@/assets/hero-waves.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroOptic } from "@/components/hero-optic";
import { WaveBackdrop, OpticSchematic } from "@/components/wave-backdrop";

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
      <SiteHeader variant="dark" />
      {/* =========================================================
          BLOCK 1 — DARK PAIR: Hero + Bottleneck
         ========================================================= */}

      {/* HERO — dark */}
      <section className="relative isolate min-h-screen overflow-hidden bg-ink text-ink-foreground">
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
              AI-native
              <br />
              optics.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">
              Verify in days. Iterate without the wait.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/ai-agents"
                className="rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                See the agents work
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

      {/* Optics is the bottleneck — DARK (continues the hero block) */}
      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-foreground/30 to-transparent"
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
              <span className="inline-block h-px w-8 bg-ink-foreground/40" />
              01 · The problem
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Optics is the
              <br />
              <span className="italic text-ink-foreground/70">bottleneck.</span>
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              Photonics powers mission-critical systems: sensing, communication, defense,
              space. But optical components are almost always custom, and verifying them is
              slow. Most problems surface late, at the fab, after months of lead time. A
              single re-spin can cost a program weeks.
            </p>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink-foreground/15 bg-ink-foreground/5 font-mono text-xs">
              {[
                ["60%", "of dev time spent verifying"],
                ["8–20w", "typical optics lead time"],
                ["1", "re-spin can sink a program"],
                ["λ/20", "tolerance, routinely"],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink p-5">
                  <div className="font-display text-3xl font-semibold tracking-tight text-ink-foreground md:text-4xl">
                    {k}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink-foreground/55">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCK 2 — LIGHT PAIR: Verification + How it works
         ========================================================= */}

      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <WaveBackdrop variant="mirror" tint="light" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <OpticSchematic tint="light" className="h-64 w-full" />
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              02 · Why now
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Verification is where the time goes.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              More than 60% of development time, paid in fabrication lead times and
              simulation cycles. We shift verification earlier with agentic AI and local,
              fast prototyping.
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
        />
        <WaveBackdrop variant="tilt" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              03 · How it works
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Verify twice. First digitally, then in reality.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              Opdo verifies your optical design in two connected stages.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Stage 01
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Digital
                </div>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                Agentic verification
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                AI agents, configured to your specific problem, check a design you have
                already thought through — surfacing issues, testing performance, and
                suggesting improvements before anything is committed.
              </p>
            </div>
            <div className="bg-background p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Stage 02
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Physical
                </div>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                Fast prototyping
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The verified design goes straight to fast prototyping, so you confirm in a
                real part what the agents confirmed in simulation.
              </p>
            </div>
          </div>

          <p className="mt-16 max-w-3xl font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
            The agents verify and refine your design and make it manufacturing-ready.
          </p>
        </div>
      </section>

      {/* =========================================================
          BLOCK 3 — DARK PAIR: No black boxes + Built for your problem
         ========================================================= */}

      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <WaveBackdrop variant="spectrum" tint="dark" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
              04 · What you get back
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              No black boxes.
            </h2>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              Every verification run gives you a sequence you review and approve. A
              flagged-issue list, its location, its severity, and the physics reason behind
              it. Suggested edits you accept or reject. And once you have approved them, an
              optimized, manufacturing-ready design.
            </p>
            <p className="mt-6 font-display text-2xl leading-snug text-ink-foreground/90">
              The agents propose. You decide. You stay the author.
            </p>
          </div>
          <div className="md:col-span-5">
            <ul className="divide-y divide-ink-foreground/10 border-y border-ink-foreground/15 font-mono text-sm">
              {[
                ["FLAG-014", "Nominal MTF below spec, 0.6 field", "high"],
                ["FLAG-021", "Ghost S3 → S7 near focal plane", "med"],
                ["FLAG-033", "Thermal defocus 42µm @ +18°C", "med"],
                ["FLAG-047", "Wavefront error 0.15λ over spec", "low"],
                ["FLAG-052", "Stray light path, off-axis 12°", "high"],
              ].map(([id, label, sev]) => (
                <li key={id} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <span className="text-ink-foreground/40">{id}</span>
                    <span className="text-ink-foreground/90">{label}</span>
                  </div>
                  <span
                    className={
                      "rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] " +
                      (sev === "high"
                        ? "bg-ink-foreground/15 text-ink-foreground"
                        : sev === "med"
                          ? "bg-ink-foreground/10 text-ink-foreground/80"
                          : "bg-ink-foreground/5 text-ink-foreground/60")
                    }
                  >
                    {sev}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-40">
        <WaveBackdrop variant="ghost" tint="dark" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-foreground/15 to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
              05 · Built for your problem
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              A verification space, configured for you.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
              Every optical problem is different, so Opdo does not ship a generic tool. We
              configure an AI agent space around your specific design challenge — set up
              with real optical process physics, not generic AI.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-ink-foreground/10 bg-ink-foreground/10 md:grid-cols-5">
            {[
              "Coatings",
              "Tolerancing",
              "Stray light",
              "Thermal",
              "Freeform",
              "Ghost & flare",
              "DfM",
              "Alignment",
              "Materials",
              "Wavefront",
            ].map((label, i) => (
              <div key={label} className="group relative bg-ink p-6">
                <div className="font-mono text-[10px] text-ink-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-display text-base font-medium text-ink-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCK 4 — LIGHT PAIR: Runs on your infra + Beyond one design
         ========================================================= */}

      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <WaveBackdrop variant="edge" tint="light" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              06 · Runs on your infrastructure
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Your IP stays yours.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              Opdo's agent space can be deployed locally, on your own infrastructure. Your
              design data never leaves your network. We configure it for you; you keep it
              and run it.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-sm border border-border bg-card p-6 font-mono text-xs leading-relaxed text-foreground/80">
              <div className="flex items-center justify-between border-b border-border pb-3 text-muted-foreground">
                <span>opdo · deployment</span>
                <span>local · air-gapped</span>
              </div>
              <pre className="mt-3 whitespace-pre-wrap text-[11px]">
{`▸ runtime ............. on-prem / private cloud
▸ models .............. local weights, no egress
▸ design data ......... never leaves your network
▸ audit log ........... per-flag, per-decision
▸ integrations ........ Zemax · Code V · CODE V LDM
▸ handoff ............. STEP · IGES · Zemax .zar`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-background py-32 md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
        />
        <WaveBackdrop variant="tilt" tint="light" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              07 · Beyond one design
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              More than a single verification.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              Teams that work with Opdo do not stop at one design. They rethink how optics
              moves through their entire engineering workflow and bring AI into it end to
              end.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              ["Single design", "Verify one part. Confirm physics before fab."],
              ["Program rhythm", "Run iterations weekly, not quarterly."],
              ["Workflow shift", "Optics becomes a paced, predictable stage."],
            ].map(([h, b], i) => (
              <div key={h} className="border-t border-border pt-6">
                <div className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">{h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING — DARK
         ========================================================= */}

      <section className="relative isolate overflow-hidden bg-ink py-32 text-ink-foreground md:py-48">
        <WaveBackdrop variant="spectrum" tint="dark" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%)]"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-foreground/50">
            08 · Next step
          </div>
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            See what the agents
            <br />
            can verify.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/ai-agents"
              className="rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              See the agents work
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ink-foreground/30 px-6 py-3 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
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
