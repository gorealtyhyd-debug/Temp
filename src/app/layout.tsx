import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./studio.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title: "SRF Olympiads | Srinivasa Ramanujan Foundation",
    description: siteConfig.description,
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${ibmPlex.variable} h-full`}>
      <body className="srf-page min-h-full antialiased" data-ui="studio-v4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
