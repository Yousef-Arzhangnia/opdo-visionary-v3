import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/capabilities")({
  component: Capabilities,
  head: () => ({
    meta: [
      { title: "Capabilities — Opdo" },
      { name: "description", content: "Freeform, aspheric, diffractive and metasurface optics from UV to LWIR." },
    ],
  }),
});

function Capabilities() {
  return (
    <PageShell
      eyebrow="What we can build"
      title="From UV to LWIR. Sub-micron throughout."
      intro="Opdo covers the full optical stack — singlets to multi-element imaging systems, illumination, and integrated photonics."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Imaging lenses",
          "Freeform optics",
          "Diffractive elements",
          "Metasurfaces",
          "Illumination",
          "Spectroscopy",
        ].map((c) => (
          <div key={c} className="bg-card p-8">
            <div className="font-mono text-xs text-muted-foreground">Capability</div>
            <h3 className="mt-2 font-display text-2xl font-semibold">{c}</h3>
          </div>
        ))}
      </div>
    </PageShell>
  );
}