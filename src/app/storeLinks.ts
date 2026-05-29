export const APP_STORE_WEB_URL = "https://apps.apple.com/kr/app/id6746325816";
export const GOOGLE_PLAY_WEB_URL =
  "https://play.google.com/store/apps/details?id=com.remarkable.siti";

const IOS_USER_AGENT_PATTERN = /iphone|ipad|ipod/i;
const ANDROID_USER_AGENT_PATTERN = /android/i;

export interface StoreTarget {
  webUrl: string;
}

export function resolveStoreTarget(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0
) {
  const mobileStoreUrl = resolveMobileStoreUrl(
    userAgent,
    platform,
    maxTouchPoints
  );

  if (mobileStoreUrl) {
    return {
      webUrl: mobileStoreUrl,
    };
  }

  return {
    webUrl: APP_STORE_WEB_URL,
  };
}

export function resolveMobileStoreUrl(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0
) {
  if (ANDROID_USER_AGENT_PATTERN.test(userAgent)) {
    return GOOGLE_PLAY_WEB_URL;
  }

  if (
    IOS_USER_AGENT_PATTERN.test(userAgent) ||
    (platform === "MacIntel" && maxTouchPoints > 1)
  ) {
    return APP_STORE_WEB_URL;
  }

  return undefined;
}

export function resolveStoreUrl(
  userAgent: string,
  platform = "",
  maxTouchPoints = 0
) {
  const storeTarget = resolveStoreTarget(userAgent, platform, maxTouchPoints);

  return storeTarget.webUrl;
}
