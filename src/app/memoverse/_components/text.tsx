import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/* Typography primitives shared by /memoverse/privacidade and /memoverse/suporte.
   The project has no @tailwindcss/typography plugin, so `prose` classes are
   inert here and styles are applied explicitly (same look as /mindrack). */

export const MEMOVERSE_EMAIL = "memoverseapp@gmail.com";

export function siteUrl(path: string) {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://gabriel-castro-portfolio.vercel.app"
  ).replace(/\/$/, "");
  return `${base}${path}`;
}

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <header className="mb-8 md:mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display leading-tight">
        {children}
      </h1>
    </header>
  );
}

/* Heading of the second-language article: an h2 styled as a page title. */
export function LangTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="my-12 md:my-16 border-t" />
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 font-display leading-tight">
          {children}
        </h2>
      </header>
    </>
  );
}

export function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24" id={id}>
      {children}
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-10 mb-3 font-display">
      {children}
    </h2>
  );
}

export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mb-4 leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 mb-4 space-y-2 leading-relaxed text-muted-foreground">
      {children}
    </ul>
  );
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

const linkClass =
  "text-foreground underline underline-offset-4 hover:text-primary transition-colors";

export function MailLink() {
  return (
    <Link href={`mailto:${MEMOVERSE_EMAIL}`} className={cn(linkClass, "font-semibold")}>
      {MEMOVERSE_EMAIL}
    </Link>
  );
}

export function InLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

export function FooterCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="mt-12 bg-primary/5 border-primary/20">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{children}</p>
      </CardContent>
    </Card>
  );
}
