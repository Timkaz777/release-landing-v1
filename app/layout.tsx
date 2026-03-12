import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://musharaqahub.com"),
  title: "MusharaqaHUB | Shariah-compliant RWA Infrastructure",
  description:
    "MusharaqaHUB is a platform concept focused on Shariah-compliant infrastructure for real-world asset tokenization and ethical digital financial architecture.",
  openGraph: {
    title: "MusharaqaHUB | Shariah-compliant RWA Infrastructure",
    description:
      "Shariah-compliant infrastructure for real-world asset tokenization and ethical, asset-backed digital financial architecture.",
    type: "website",
    siteName: "MusharaqaHUB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MusharaqaHUB",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MusharaqaHUB | Shariah-compliant RWA Infrastructure",
    description:
      "Shariah-compliant infrastructure for real-world asset tokenization and ethical digital financial architecture.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
