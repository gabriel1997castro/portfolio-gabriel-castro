/**
 * Smart download link for MindRack: /mindrack/baixar sends each phone to its
 * own store, carrying the campaign so installs show up with their source.
 *
 * - iOS: App Store campaign link (`pt` + `ct`), reported in App Store Connect
 *   → Analytics → Campaigns.
 * - Android: Play `referrer` with `utm_*`, which the app reads at first launch
 *   (see METRICAS.md in the MindRack repo for the accepted format).
 * - Anything else (desktop, iPadOS that reports itself as a Mac): the page
 *   shows both store buttons.
 *
 * Query params, all optional: `origem` (utm_source), `meio` (utm_medium,
 * default `paid` when there is an origem), `campanha` (utm_campaign),
 * `criativo` (utm_content). Example:
 *   /mindrack/baixar?origem=tiktok&campanha=promote-out26&criativo=video-03
 */

export const APP_STORE_ID = "6799562297";
export const PLAY_PACKAGE = "com.gabrielcastro.mindrack";

/**
 * Provider token from App Store Connect (Analytics → Campaigns → Generate a
 * Campaign Link, the `pt` in the generated URL). Without it Apple ignores
 * `ct`, so the link still opens the store but the campaign isn't counted.
 */
export const APPLE_PROVIDER_TOKEN = "129249493";

export type Platform = "ios" | "android" | "other";

export interface Campaign {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
}

/** Same rule the app applies to the Play referrer: a-z 0-9 . _ - and ≤ 48. */
export function cleanValue(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  const cleaned = value
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "")
    .slice(0, 48);
  return cleaned || undefined;
}

export function campaignFromParams(params: URLSearchParams): Campaign {
  const source = cleanValue(params.get("origem"));
  return {
    source,
    medium: cleanValue(params.get("meio")) ?? (source ? "paid" : undefined),
    campaign: cleanValue(params.get("campanha")),
    content: cleanValue(params.get("criativo")),
  };
}

export function detectPlatform(userAgent: string | null | undefined): Platform {
  const ua = userAgent ?? "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "other";
}

/** App Store `ct` is limited to 40 characters. */
export function appStoreUrl(c: Campaign, providerToken = APPLE_PROVIDER_TOKEN): string {
  const url = new URL(`https://apps.apple.com/app/apple-store/id${APP_STORE_ID}`);
  const ct = [c.source, c.campaign, c.content].filter(Boolean).join("-").slice(0, 40);
  if (providerToken && ct) {
    url.searchParams.set("pt", providerToken);
    url.searchParams.set("ct", ct);
  }
  url.searchParams.set("mt", "8");
  return url.toString();
}

export function playStoreUrl(c: Campaign): string {
  const url = new URL("https://play.google.com/store/apps/details");
  url.searchParams.set("id", PLAY_PACKAGE);
  const referrer = new URLSearchParams();
  if (c.source) referrer.set("utm_source", c.source);
  if (c.medium) referrer.set("utm_medium", c.medium);
  if (c.campaign) referrer.set("utm_campaign", c.campaign);
  if (c.content) referrer.set("utm_content", c.content);
  const encoded = referrer.toString();
  if (encoded) url.searchParams.set("referrer", encoded);
  return url.toString();
}

export function storeUrlFor(platform: Platform, c: Campaign): string | null {
  if (platform === "ios") return appStoreUrl(c);
  if (platform === "android") return playStoreUrl(c);
  return null;
}
