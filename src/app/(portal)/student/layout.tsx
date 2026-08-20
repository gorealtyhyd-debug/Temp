import type { Metadata } from "next";
import { StudentShell } from "@/components/portal/shell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Student Portal | SRF",
  description: "SRF student dashboard for registrations, payments, hall tickets, results and certificates.",
  path: "/student",
  noIndex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StudentShell>{children}</StudentShell>;
}
