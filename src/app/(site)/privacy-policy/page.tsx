import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy policy | SRF",
  description: "Read how Srinivasa Ramanujan Foundation collects, stores and protects student and school data.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Privacy policy" description={"Read how Srinivasa Ramanujan Foundation collects, stores and protects student and school data."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy policy" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>SRF processes personal data for registration, examination, hall tickets, results and certificates. Sensitive documents are not exposed via guessable public URLs.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
