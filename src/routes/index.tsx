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

      {/* Optics is the bottleneck */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The problem</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Optics is the bottleneck
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Photonics powers mission-critical systems — sensing, communication, defense, space.
            But optical components are almost always custom, and verifying them is slow. Most
            problems surface late, at the fab, after weeks of lead time. A single re-spin can
            cost a program weeks.
          </p>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60">Why now</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Verification is where the time goes
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
            Verification consumes more than 60% of development time. Paid in fabrication lead
            times and simulation cycles. We shift verification earlier, with agentic AI and
            local, fast prototyping.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Verify twice — first in software, then in hardware
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Opdo verifies your optical design in two connected stages.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border-t border-border pt-6">
              <div className="font-mono text-xs text-muted-foreground">01</div>
              <h3 className="mt-2 text-xl font-semibold">Digital verification</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                AI agents, configured to your specific problem, check a design you have already
                thought through — surfacing issues, testing performance, and suggesting
                improvements before anything is committed.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="font-mono text-xs text-muted-foreground">02</div>
              <h3 className="mt-2 text-xl font-semibold">Physical verification</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The verified design goes straight to fast prototyping, so you confirm in a real
                part what the agents confirmed in simulation.
              </p>
            </div>
          </div>
          <p className="mt-10 font-display text-2xl leading-snug text-foreground/90 md:text-3xl">
            The agents verify and refine. You bring the design; they make it manufacturing-ready.
          </p>
        </div>
      </section>

      {/* What you get back */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What you get back</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            No black boxes
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Every verification run gives you a sequence you review and approve. A flagged-issue
            list, its location, its severity, and the physics reason behind it. Suggested edits
            you accept or reject. And once you have approved them, an optimized,
            manufacturing-ready design. The agents propose. You decide. You stay the author of
            your design.
          </p>
        </div>
      </section>

      {/* Built for your problem */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-foreground/60">Built for your problem</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            A verification space, configured for you
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-foreground/75">
            Every optical problem is different, so Opdo does not ship a generic tool. We
            configure an AI agent space around your specific design challenge: coatings,
            tolerancing, stray light, thermal, and more. Set up with real optical process
            physics, not generic AI.
          </p>
        </div>
      </section>

      {/* Runs on your infrastructure */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Runs on your infrastructure</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Your IP stays yours
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Opdo's agent space can be deployed locally, on your own infrastructure. Your design
            data never leaves your network. We configure it for you; you keep it and run it.
          </p>
        </div>
      </section>

      {/* Beyond one design */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Beyond one design</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            More than a single verification
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Teams that work with Opdo do not stop at one design. They rethink how optics moves
            through their entire engineering workflow and bring AI into it end to end.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 md:px-10">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            See what the agents can verify
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
