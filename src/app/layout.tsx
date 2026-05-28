import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

const pretendard = localFont({
  display: "swap",
  src: "../design-system/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Siti 앱 다운로드",
  description: "Siti 앱을 다운로드하세요.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className={pretendard.variable} lang="ko">
      <body>{children}</body>
    </html>
  );
}
