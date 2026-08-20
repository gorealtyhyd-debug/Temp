import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { getOlympiadBySlug, getPublishedOlympiads } from "@/lib/content/olympiads";
import { breadcrumbJsonLd, buildMetadata, eventJsonLd } from "@/lib/seo";
import { formatDate, formatInrFromPaise } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublishedOlympiads().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const olympiad = getOlympiadBySlug(slug);
  if (!olympiad) return {};
  return buildMetadata({
    title: olympiad.seoTitle,
    description: olympiad.seoDescription,
    path: `/olympiads/${olympiad.slug}`,
  });
}

export default async function OlympiadDetailPage({ params }: Props) {
  const { slug } = await params;
  const olympiad = getOlympiadBySlug(slug);
  if (!olympiad) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Olympiads", path: "/olympiads" },
    { name: olympiad.shortName, path: `/olympiads/${olympiad.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd(crumbs),
            eventJsonLd({
              name: olympiad.name,
              description: olympiad.description,
              startDate: olympiad.level1Date,
              url: `/olympiads/${olympiad.slug}`,
            }),
          ]),
        }}
      />
      <PageHero eyebrow={olympiad.code} title={olympiad.name} description={olympiad.tagline} />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Olympiads", href: "/olympiads" },
            { name: olympiad.shortName },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="rounded-xl border border-srf-soft-gray bg-white p-6 md:p-8">
            <div className="h-px w-16 bg-srf-gold" />
            <p className="mt-6 text-base leading-relaxed text-srf-charcoal">{olympiad.description}</p>
            <h2 className="mt-8 font-display text-2xl text-srf-black">Exam pattern</h2>
            <p className="mt-2 text-srf-muted">{olympiad.examPattern}</p>
            <h2 className="mt-8 font-display text-2xl text-srf-black">Eligibility</h2>
            <p className="mt-2 text-srf-muted">{olympiad.eligibleClasses}</p>
            <ul className="mt-8 space-y-2">
              {olympiad.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-srf-charcoal">
                  <span className="h-1.5 w-1.5 rounded-full bg-srf-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register" className={buttonVariants({ size: "lg" })}>
                Register for {olympiad.code}
              </Link>
              <Link href="/exam-details" className={buttonVariants({ variant: "outline", size: "lg" })}>
                View exam details
              </Link>
              <Link href="/faq" className={buttonVariants({ variant: "soft", size: "lg" })}>
                Olympiad FAQ
              </Link>
            </div>
          </article>

          <aside className="h-fit rounded-xl border border-srf-soft-gray bg-srf-off-white p-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-srf-gold">Important dates</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-srf-muted">Registration deadline</dt>
                <dd className="mt-1 font-semibold text-srf-black">
                  {formatDate(olympiad.registrationDeadline)}
                </dd>
              </div>
              <div>
                <dt className="text-srf-muted">Level-1 exam</dt>
                <dd className="mt-1 font-semibold text-srf-black">{formatDate(olympiad.level1Date)}</dd>
              </div>
              <div>
                <dt className="text-srf-muted">Level-2 exam</dt>
                <dd className="mt-1 font-semibold text-srf-black">{formatDate(olympiad.level2Date)}</dd>
              </div>
              <div className="border-t border-srf-soft-gray pt-4">
                <dt className="text-srf-muted">Examination fee</dt>
                <dd className="mt-1 font-display text-3xl text-srf-gold">
                  {formatInrFromPaise(olympiad.feePaise)}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </>
  );
}
