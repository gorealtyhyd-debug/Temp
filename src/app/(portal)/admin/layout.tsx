import type { Metadata } from "next";
import { AdminShell } from "@/components/portal/shell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin Console | SRF",
  description: "Secure SRF admin console for Olympiad operations.",
  path: "/admin",
  noIndex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
