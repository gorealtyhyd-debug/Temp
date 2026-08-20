import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Srinivasa Ramanujan Foundation | SRF",
  description: "Contact SRF Olympiads in Hyderabad for registration support, school coordination and examination queries.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Srinivasa Ramanujan Foundation" description={"Contact SRF Olympiads in Hyderabad for registration support, school coordination and examination queries."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Srinivasa Ramanujan Foundation" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Office: #4-21/53, Dasari Sunita Reddy Towers, Quthbullapur, Hyderabad, Telangana 500029. Phone: 9948481729 / 9908313951 / 9704766583. Email: srmoe1729@gmail.com.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className={buttonVariants()}>Register Now</Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact SRF</Link>
          </div>
        </article>
      </div>
    </>
  );
}
