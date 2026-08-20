import type { Metadata } from "next";
import Link from "next/link";
import { OlympiadCard } from "@/components/public/olympiad-card";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { getPublishedOlympiads } from "@/lib/content/olympiads";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "SRF Olympiads 2026–27 | All Programmes",
  description:
    "Explore SRMO, CVRSO, State English Olympiad, Abdul Kalam Olympiad, NSRMO and State Cyber Olympiad. View eligibility, dates, fees and register online.",
  path: "/olympiads",
});

export default function OlympiadsPage() {
  const list = getPublishedOlympiads();
  return (
    <>
      <PageHero
        eyebrow={`Academic year ${siteConfig.academicYear}`}
        title="SRF Olympiad programmes"
        description="All Olympiad dates, fees and eligibility are catalogue-driven and designed to be managed from the admin panel."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Olympiads" }]} />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((olympiad) => (
            <OlympiadCard key={olympiad.slug} olympiad={olympiad} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/register" className={buttonVariants({ size: "lg" })}>
            Register for Olympiad
          </Link>
        </div>
      </div>
    </>
  );
}
