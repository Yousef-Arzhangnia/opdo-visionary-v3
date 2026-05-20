import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          Opdo
        </div>
        <p className="text-sm text-muted-foreground">
          Precision optics, designed by AI. © {new Date().getFullYear()} Opdo.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/ai-agents">AI agents</Link>
          <Link to="/fast-parts">Fast parts</Link>
          <Link to="/capabilities">Capabilities</Link>
          <Link to="/knowledge">Knowledge</Link>
        </div>
      </div>
    </footer>
  );
}