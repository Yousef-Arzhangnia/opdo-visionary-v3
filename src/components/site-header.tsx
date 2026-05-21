import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/opdo-logo.png";

const nav = [
  { to: "/ai-agents", label: "AI Agents" },
  { to: "/fast-parts", label: "Fast Parts" },
  { to: "/insights", label: "Insights" },
] as const;

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-30 transition-all duration-300 " +
        (isDark ? "text-ink-foreground" : "text-foreground") +
        (scrolled
          ? " backdrop-blur-md " +
            (isDark ? "bg-ink/70 border-b border-ink-foreground/10" : "bg-background/70 border-b border-foreground/10")
          : "")
      }
    >
      <div
        className={
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 md:px-10 " +
          (scrolled ? "py-4" : "py-8")
        }
      >
        <Link to="/" className="flex items-center gap-3 font-display font-semibold tracking-tight">
          <img
            src={logo}
            alt="Opdo"
            className={
              "w-auto transition-all duration-300 " + (scrolled ? "h-8" : "h-16 md:h-20")
            }
          />
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
          to="/contact"
          className={
            "hidden rounded-full border px-4 py-2 text-sm transition-colors md:inline-block " +
            (isDark
              ? "border-ink-foreground/40 hover:bg-ink-foreground hover:text-ink"
              : "border-foreground/40 hover:bg-foreground hover:text-background")
          }
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}