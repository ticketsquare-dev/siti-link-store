"use client";

import type { MouseEvent } from "react";

import { resolveStoreTarget } from "@/app/storeLinks";

interface Props {
  initialStoreUrl: string;
}

export default function DownloadLink({ initialStoreUrl }: Props) {
  const handleClickDownload = (event: MouseEvent<HTMLAnchorElement>) => {
    const storeTarget = resolveStoreTarget(
      navigator.userAgent,
      navigator.platform,
      navigator.maxTouchPoints
    );
    const storeUrl = storeTarget.nativeUrl ?? storeTarget.webUrl;

    if (!storeTarget.nativeUrl) {
      return;
    }

    if (
      storeTarget.nativeUrl.startsWith("intent:") &&
      storeUrl === initialStoreUrl
    ) {
      return;
    }

    event.preventDefault();
    window.location.assign(storeUrl);

    if (storeTarget.nativeUrl.startsWith("intent:")) {
      return;
    }

    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.assign(storeTarget.webUrl);
      }
    }, 1200);
  };

  return (
    <a
      aria-label="Siti 앱 다운로드"
      className="download-link"
      href={initialStoreUrl}
      onClick={handleClickDownload}
    >
      앱 다운로드
    </a>
  );
}
