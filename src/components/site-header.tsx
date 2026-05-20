import { Link } from "@tanstack/react-router";
import logo from "@/assets/opdo-logo.png";

const nav = [
  { to: "/ai-agents", label: "AI agents" },
  { to: "/fast-parts", label: "Fast parts" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/knowledge", label: "Knowledge" },
] as const;

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <header
      className={
        "absolute inset-x-0 top-0 z-30 " +
        (isDark ? "text-ink-foreground" : "text-foreground")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight">
          <img src={logo} alt="Opdo" width={32} height={32} className="h-8 w-8" />
          <span className="sr-only">Opdo</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                "transition-opacity hover:opacity-100 " +
                (isDark ? "opacity-70" : "opacity-70")
              }
              activeProps={{ className: "opacity-100" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/capabilities"
          className={
            "hidden rounded-full border px-4 py-2 text-sm transition-colors md:inline-block " +
            (isDark
              ? "border-ink-foreground/40 hover:bg-ink-foreground hover:text-ink"
              : "border-foreground/40 hover:bg-foreground hover:text-background")
          }
        >
          Contact
        </Link>
      </div>
    </header>
  );
}