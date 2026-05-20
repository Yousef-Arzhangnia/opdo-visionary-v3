import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/fast-parts")({
  component: FastParts,
  head: () => ({
    meta: [
      { title: "Fast parts — Opdo" },
      { name: "description", content: "Prototype-to-precision optical parts shipped in days." },
    ],
  }),
});

function FastParts() {
  return (
    <PageShell
      eyebrow="Prototype to production"
      title="Parts in days, not quarters."
      intro="A validated network of precision shops, automated quoting, and AI-generated travelers — your optics arrive measured, certified and ready."
    >
      <div className="overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-6 py-4">Part class</th>
              <th className="px-6 py-4">Typical tolerance</th>
              <th className="px-6 py-4">Lead time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Spherical lens", "λ/10 PV", "5 days"],
              ["Asphere", "λ/4 PV", "10 days"],
              ["Freeform mirror", "200 nm RMS", "14 days"],
              ["Prism / wedge", "10 arcsec", "7 days"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border">
                {r.map((c, i) => (
                  <td key={i} className="px-6 py-4">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}