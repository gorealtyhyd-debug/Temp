import { HeroSection } from "@/components/public/hero";
import { HomeSections } from "@/components/public/home-sections";
import { faqJsonLd } from "@/lib/seo";
import { faqs } from "@/lib/content/olympiads";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <HeroSection />
      <HomeSections />
    </>
  );
}
