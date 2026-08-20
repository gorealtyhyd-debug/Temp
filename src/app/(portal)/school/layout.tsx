import type { Metadata } from "next";
import { SchoolShell } from "@/components/portal/shell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "School Portal | SRF",
  description: "SRF school portal for bulk registrations, payments and hall tickets.",
  path: "/school",
  noIndex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SchoolShell>{children}</SchoolShell>;
}
