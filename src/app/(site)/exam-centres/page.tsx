import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Examination centres | SRF",
  description: "Understand SRF Olympiad centre allocation for Level-1 school centres and Level-2 venues finalised by SRF.",
  path: "/exam-centres",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Exam Centres" title="Examination centres" description={"Understand SRF Olympiad centre allocation for Level-1 school centres and Level-2 venues finalised by SRF."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Examination centres" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Level-1 examinations are conducted at the student’s own school wherever applicable. Level-2 centres are finalised by SRF and published with hall tickets.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
