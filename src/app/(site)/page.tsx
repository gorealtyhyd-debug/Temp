import { PremiumHome } from "@/components/public/premium-home";
import { faqJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content/olympiads";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <PremiumHome />
    </>
  );
}
