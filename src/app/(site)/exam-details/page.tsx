import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Examination pattern and schedule | SRF",
  description: "View SRF Olympiad Level-1 and Level-2 dates, exam patterns, fee structure and centre information for 2026–27.",
  path: "/exam-details",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Exam Details" title="Examination pattern and schedule" description={"View SRF Olympiad Level-1 and Level-2 dates, exam patterns, fee structure and centre information for 2026–27."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Examination pattern and schedule" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Level-1 exams are scheduled across early November 2026 with Level-2 on Sunday, 6 December 2026. Level-1 centres are typically the student’s own school. Examination fee is ₹150 per Olympiad (Level I & II), with ₹30 adjustable towards examination expenditure.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
