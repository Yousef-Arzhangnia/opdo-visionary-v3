import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Opdo" },
      {
        name: "description",
        content:
          "Tell us about your optical problem. We will show you what the agents can verify and how fast you could have a part.",
      },
      { property: "og:title", content: "Contact — Opdo" },
      {
        property: "og:description",
        content: "Tell us about your optical problem.",
      },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      intro="Tell us about your optical problem. We will show you what the agents can verify and how fast you could have a part."
    >
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
          <a
            href="mailto:sk@opdo.ai"
            className="mt-3 inline-block font-display text-2xl font-semibold tracking-tight text-foreground hover:underline md:text-3xl"
          >
            sk@opdo.ai
          </a>
        </div>
        <form
          className="md:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const subject = `Opdo enquiry — ${String(data.get("name") || "")}`;
            const body = `Name: ${data.get("name")}
Company: ${data.get("company")}
Email: ${data.get("email")}

${data.get("problem")}`;
            window.location.href = `mailto:sk@opdo.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <div className="grid gap-5">
            <Field name="name" label="Name" required />
            <Field name="company" label="Company" required />
            <Field name="email" label="Email" type="email" required />
            <div className="flex flex-col gap-2">
              <label htmlFor="problem" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Short description of the optical problem
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                maxLength={2000}
                rows={6}
                className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-foreground/60"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Send
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Opening your email client… if nothing happens, write us at sk@opdo.ai.
              </p>
            )}
          </div>
        </form>
      </div>
    </PageShell>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-foreground/60"
      />
    </div>
  );
}