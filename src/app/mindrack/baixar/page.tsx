import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  appStoreUrl,
  campaignFromParams,
  detectPlatform,
  playStoreUrl,
  storeUrlFor,
} from "@/lib/mindrack-store-link";

// Reads the user agent on every request, so it can never be static.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Baixar o MindRack",
  description: "MindRack na App Store e no Google Play.",
  // A redirect link for ads, not a page worth indexing.
  robots: { index: false, follow: false },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function toParams(raw: Awaited<SearchParams>): URLSearchParams {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(raw)) {
    const first = Array.isArray(value) ? value[0] : value;
    if (first) params.set(key, first);
  }
  return params;
}

export default async function MindRackDownloadPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const campaign = campaignFromParams(toParams(await searchParams));
  const platform = detectPlatform((await headers()).get("user-agent"));
  const target = storeUrlFor(platform, campaign);
  if (target) redirect(target);

  const ios = appStoreUrl(campaign);
  const android = playStoreUrl(campaign);

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-6xl">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-display">
          Baixe o MindRack
        </h1>
        <p className="mb-8 leading-relaxed text-muted-foreground">
          Onze jogos de lógica num app só. Abra este link no celular ou escolha
          a sua loja.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={ios}
            className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            App Store (iPhone)
          </a>
          <a
            href={android}
            className="rounded-md border border-border px-5 py-3 font-semibold text-foreground hover:bg-muted transition-colors"
          >
            Google Play (Android)
          </a>
        </div>
      </div>
      {/* iPadOS identifies itself as a Mac; touch support gives it away. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `if (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1) location.replace(${JSON.stringify(ios)});`,
        }}
      />
    </div>
  );
}
