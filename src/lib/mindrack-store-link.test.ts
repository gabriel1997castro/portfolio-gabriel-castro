import { describe, expect, it } from "vitest";
import {
  appStoreUrl,
  campaignFromParams,
  cleanValue,
  detectPlatform,
  playStoreUrl,
  storeUrlFor,
} from "./mindrack-store-link";

const IPHONE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_36.5.0";
const ANDROID =
  "Mozilla/5.0 (Linux; Android 14; SM-A546E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36 trill_360500";
const MAC =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";

describe("detectPlatform", () => {
  it("reads iPhone and Android, including TikTok's in-app browser", () => {
    expect(detectPlatform(IPHONE)).toBe("ios");
    expect(detectPlatform(ANDROID)).toBe("android");
  });

  it("treats desktop and missing user agents as other", () => {
    expect(detectPlatform(MAC)).toBe("other");
    expect(detectPlatform(undefined)).toBe("other");
  });
});

describe("campaignFromParams", () => {
  it("keeps only safe characters and defaults medium to paid", () => {
    const c = campaignFromParams(
      new URLSearchParams("origem=TikTok!&campanha=promote out26&criativo=video-03"),
    );
    expect(c).toEqual({
      source: "tiktok",
      medium: "paid",
      campaign: "promoteout26",
      content: "video-03",
    });
  });

  it("leaves everything empty without params", () => {
    expect(campaignFromParams(new URLSearchParams())).toEqual({
      source: undefined,
      medium: undefined,
      campaign: undefined,
      content: undefined,
    });
  });

  it("caps values at 48 characters", () => {
    expect(cleanValue("a".repeat(60))).toHaveLength(48);
  });
});

describe("store URLs", () => {
  const c = { source: "tiktok", medium: "paid", campaign: "promote-out26" };

  it("builds the App Store campaign link when there is a provider token", () => {
    expect(appStoreUrl(c, "123456")).toBe(
      "https://apps.apple.com/app/apple-store/id6799562297?pt=123456&ct=tiktok-promote-out26&mt=8",
    );
  });

  it("falls back to the plain App Store link without a token", () => {
    expect(appStoreUrl(c, "")).toBe(
      "https://apps.apple.com/app/apple-store/id6799562297?mt=8",
    );
  });

  it("encodes the Play referrer in the format the app reads", () => {
    const url = new URL(playStoreUrl(c));
    expect(url.searchParams.get("id")).toBe("com.gabrielcastro.mindrack");
    expect(url.searchParams.get("referrer")).toBe(
      "utm_source=tiktok&utm_medium=paid&utm_campaign=promote-out26",
    );
  });

  it("has no store for desktop", () => {
    expect(storeUrlFor("other", c)).toBeNull();
  });
});
