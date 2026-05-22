import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

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
    <PageShell
      eyebrow="Fast Parts"
      title="From verified design to real part fast"
      intro="Digital verification tells you a design should work. Physical verification proves it. Once your design is verified and optimized in Opdo's agent space, you can bring it straight to prototyping as a real optical component."
    >
      <section className="mt-8">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">Why it's fast</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          Your design is verified by AI and checked for manufacturability. Quoting is almost instant so your prototyping can start immediately.
        </p>
        <p className="mt-4 max-w-3xl text-sm italic text-muted-foreground">
          [Prototype turnaround: prototypes in [X] weeks, not months.]
        </p>
      </section>

      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">The verification loop, closed</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          Verify in software. Confirm in hardware. Iterate. Because each loop is fast, you run
          more of them. And more iterations means better optics.
        </p>
      </section>

      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">Production specifications</h2>
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-10 text-sm text-muted-foreground">
          [Insert production specs — part classes, tolerances, lead times, materials.]
        </div>
      </section>

      <section className="mt-24">
        <h2 className="font-display text-3xl font-semibold md:text-5xl">Bring us a verified design</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Order a prototype
          </Link>
          <Link
            to="/contact"
            className="inline-block rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            Contact us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}