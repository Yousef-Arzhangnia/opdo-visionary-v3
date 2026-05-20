import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-background pb-20 pt-32 md:pt-40">
        <SiteHeader variant="light" />
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
            {intro}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10">{children}</div>
      <SiteFooter />
    </div>
  );
}