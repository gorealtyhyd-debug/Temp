import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Refund and cancellation policy | SRF",
  description: "Understand SRF Olympiad refund, cancellation and payment adjustment policies.",
  path: "/refund-policy",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Refund Policy" title="Refund and cancellation policy" description={"Understand SRF Olympiad refund, cancellation and payment adjustment policies."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Refund and cancellation policy" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Refund eligibility depends on examination timelines and verified payment status. Gateway-confirmed payments are required before any refund workflow.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
