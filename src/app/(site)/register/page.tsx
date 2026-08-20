import type { Metadata } from "next";
import { RegistrationWizard } from "@/components/public/registration-wizard";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Register for SRF Olympiads 2026–27",
  description:
    "Complete multi-step online registration for SRF Olympiads. Enter student details, school information, select exams and proceed to secure payment.",
  path: "/register",
});

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Register for SRF Olympiads"
        description="A premium multi-step registration journey for individual students and schools."
      />
      <div className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Register" }]} />
      </div>
      <RegistrationWizard />
    </>
  );
}
