import Image from "next/image";
import { headers } from "next/headers";

import DownloadLink from "./_components/DownloadLink";
import { resolveStoreUrl } from "./storeLinks";

export default async function HomePage() {
  const requestHeaders = await headers();
  const initialStoreUrl = resolveStoreUrl(
    requestHeaders.get("user-agent") ?? ""
  );

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
