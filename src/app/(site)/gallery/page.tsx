import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Event and examination gallery | SRF",
  description: "Browse SRF Olympiad event photographs, award ceremonies and examination highlights.",
  path: "/gallery",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Event and examination gallery" description={"Browse SRF Olympiad event photographs, award ceremonies and examination highlights."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Event and examination gallery" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Gallery content is managed through the CMS. Upload high-quality images with meaningful filenames and alt text for SEO and accessibility.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
