import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { faqs } from "@/lib/content/olympiads";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | SRF Olympiads",
  description: "Frequently asked questions about SRF Olympiad registration, fees, centres, hall tickets and results.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <PageHero eyebrow="Support" title="Frequently asked questions" description="Answers to common questions from students, parents and schools." />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <div className="mt-8 divide-y divide-srf-soft-gray rounded-xl border border-srf-soft-gray bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="px-5 py-4">
              <summary className="cursor-pointer font-semibold text-srf-black">{faq.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-srf-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
