import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Awards and achievements | SRF",
  description: "Explore awards, recognition and toppers from Srinivasa Ramanujan Foundation Olympiads.",
  path: "/awards",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Awards" title="Awards and achievements" description={"Explore awards, recognition and toppers from Srinivasa Ramanujan Foundation Olympiads."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Awards and achievements" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>SRF celebrates outstanding performers through a prestigious awards programme. Rank holders and high achievers receive certificates and recognition aligned with the black-and-gold institutional identity of the foundation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
