import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Syllabus and form downloads | SRF",
  description: "Download SRF Olympiad syllabus PDFs, registration forms, guidelines and other official resources.",
  path: "/downloads",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Downloads" title="Syllabus and form downloads" description={"Download SRF Olympiad syllabus PDFs, registration forms, guidelines and other official resources."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Syllabus and form downloads" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Official downloads will be published and versioned from the admin CMS. Always use the latest academic-year documents before submitting registrations.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
