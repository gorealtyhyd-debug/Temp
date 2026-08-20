import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Srinivasa Ramanujan Foundation | SRF",
  description: "Learn about Srinivasa Ramanujan Foundation (SRF), Hyderabad — a trusted Olympiad organisation nurturing academic excellence across Mathematics, Science, English and more.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="About SRF" title="About Srinivasa Ramanujan Foundation" description={"Learn about Srinivasa Ramanujan Foundation (SRF), Hyderabad — a trusted Olympiad organisation nurturing academic excellence across Mathematics, Science, English and more."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About Srinivasa Ramanujan Foundation" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Srinivasa Ramanujan Foundation (SRF), Hyderabad, conducts premium school Olympiads including SRMO, CVRSO, SEO, AKO, NSRMO and SCO. The foundation focuses on transparent evaluation, class-wise papers and accessible examination centres at schools for Level-1.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
