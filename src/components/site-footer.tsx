import { Link } from "@tanstack/react-router";
import logo from "@/assets/opdo-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3 font-display text-lg font-semibold">
          <img src={logo} alt="Opdo" width={28} height={28} className="h-7 w-7" />
          Opdo
        </div>
        <p className="text-sm text-muted-foreground">
          Precision optics, designed by AI. © {new Date().getFullYear()} Opdo.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/ai-agents">AI Agents</Link>
          <Link to="/fast-parts">Fast Parts</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
    </footer>
  );
}