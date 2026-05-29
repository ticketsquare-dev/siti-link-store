import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import DownloadLink from "./_components/DownloadLink";
import { resolveMobileStoreUrl, resolveStoreUrl } from "./storeLinks";

export default async function HomePage() {
  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent") ?? "";
  const mobileStoreUrl = resolveMobileStoreUrl(userAgent);

  if (mobileStoreUrl) {
    redirect(mobileStoreUrl);
  }

  const initialStoreUrl = resolveStoreUrl(userAgent);

  return (
    <main className="download-page">
      <Image
        priority
        alt="Siti"
        className="siti-logo"
        height={49}
        src="/logo/siti-app-logo.svg"
        width={76}
      />
      <DownloadLink initialStoreUrl={initialStoreUrl} />
    </main>
  );
}
