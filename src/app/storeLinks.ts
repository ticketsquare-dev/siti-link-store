export const APP_STORE_WEB_URL = "https://apps.apple.com/kr/app/id6746325816";
export const GOOGLE_PLAY_WEB_URL =
  "https://play.google.com/store/apps/details?id=com.remarkable.siti";

const APP_STORE_NATIVE_URL = "itms-apps://itunes.apple.com/app/id6746325816";
const GOOGLE_PLAY_PACKAGE_NAME = "com.remarkable.siti";
const GOOGLE_PLAY_NATIVE_URL = `intent://details?id=${GOOGLE_PLAY_PACKAGE_NAME}#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(
  GOOGLE_PLAY_WEB_URL
)};end`;
const IOS_USER_AGENT_PATTERN = /iphone|ipad|ipod/i;
const ANDROID_USER_AGENT_PATTERN = /android/i;

export interface StoreTarget {
  nativeUrl?: string;
  webUrl: string;
}

export function resolveStoreTarget(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0
) {
  if (ANDROID_USER_AGENT_PATTERN.test(userAgent)) {
    return {
      nativeUrl: GOOGLE_PLAY_NATIVE_URL,
      webUrl: GOOGLE_PLAY_WEB_URL,
    };
  }

  if (
    IOS_USER_AGENT_PATTERN.test(userAgent) ||
    (platform === "MacIntel" && maxTouchPoints > 1)
  ) {
    return {
      nativeUrl: APP_STORE_NATIVE_URL,
      webUrl: APP_STORE_WEB_URL,
    };
  }

  return {
    webUrl: APP_STORE_WEB_URL,
  };
}

export function resolveStoreUrl(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0
) {
  const storeTarget = resolveStoreTarget(userAgent, platform, maxTouchPoints);

  return storeTarget.nativeUrl ?? storeTarget.webUrl;
}
