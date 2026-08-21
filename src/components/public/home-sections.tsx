import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/card";
import { OlympiadCard } from "@/components/public/olympiad-card";
import { faqs, getPublishedOlympiads, processSteps, toppers, whySrf } from "@/lib/content/olympiads";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const gallery = [
  { src: "/images/gallery/event-1.jpg", alt: "SRF Olympiad award ceremony", tall: true },
  { src: "/images/gallery/event-2.jpg", alt: "Students receiving recognition", tall: false },
  { src: "/images/gallery/event-3.jpg", alt: "Academic excellence celebration", tall: false },
  { src: "/images/gallery/event-4.jpg", alt: "Olympiad participants and guests", tall: true },
  { src: "/images/gallery/event-5.jpg", alt: "Examination programme moments", tall: false },
  { src: "/images/gallery/about.jpg", alt: "About Srinivasa Ramanujan Foundation", tall: false },
];

const icons = [GraduationCap, BookOpen, ShieldCheck, Sparkles];

export function HomeSections() {
  const olympiadList = getPublishedOlympiads();
  const featured = olympiadList[0];

  return (
    <>
      {/* TEMPLATE 1 — Asymmetric bento overview */}
      <section className="section-beige overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Quick overview</p>
              <h2 className="mt-3 max-w-xl font-display text-4xl text-srf-black md:text-5xl">
                Olympiads for {siteConfig.academicYear}
              </h2>
            </div>
            <Link href="/olympiads" className={buttonVariants({ variant: "outline" })}>
              View all programmes
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
            <Link
              href={`/olympiads/${featured.slug}`}
              className="group relative min-h-[320px] overflow-hidden rounded-[1.5rem] gold-frame lg:col-span-7 lg:row-span-2"
            >
              <Image
                src="/images/hero/slide-2.jpg"
                alt={featured.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <Badge variant="gold">{featured.code}</Badge>
                <h3 className="mt-4 font-display text-3xl text-white md:text-4xl">{featured.name}</h3>
                <p className="mt-2 max-w-lg text-sm text-white/75">{featured.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-srf-gold">
                  Explore {featured.code} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {olympiadList.slice(1, 3).map((item, index) => (
              <Link
                key={item.slug}
                href={`/olympiads/${item.slug}`}
                className={cn(
                  "group relative min-h-[180px] overflow-hidden rounded-[1.5rem] border border-srf-soft-gray bg-white p-5 transition hover:-translate-y-1 hover:border-srf-gold",
                  "lg:col-span-5",
                )}
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-6 -translate-y-6 rounded-full bg-srf-gold/15 blur-2xl transition group-hover:bg-srf-gold/25" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-srf-gold">{item.code}</p>
                    <h3 className="mt-2 font-display text-2xl text-srf-black">{item.shortName}</h3>
                    <p className="mt-2 text-sm text-srf-muted">{item.tagline}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-srf-ink">Level-1 · {item.level1Date}</span>
                    <ArrowRight className="h-4 w-4 text-srf-gold" />
                  </div>
                </div>
                {index === 0 && (
                  <Image
                    src={item.image}
                    alt=""
                    width={120}
                    height={70}
                    className="absolute bottom-4 right-4 opacity-20"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE 2 — Editorial split + floating stats */}
      <section className="relative bg-white py-20">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-srf-beige lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="soft">Why SRF</Badge>
            <h2 className="mt-4 font-display text-4xl text-srf-black md:text-5xl">
              Authority. Excellence. Clarity.
            </h2>
            <p className="mt-4 text-lg text-srf-muted">
              A premium examination ecosystem for students, parents and schools — with verified
              payments, hall tickets, results and certificates.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whySrf.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div key={item.title} className="rounded-2xl border border-srf-soft-gray bg-srf-beige/50 p-5">
                    <Icon className="h-5 w-5 text-srf-gold" />
                    <h3 className="mt-3 font-display text-xl text-srf-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-srf-muted">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] gold-frame">
              <Image
                src="/images/gallery/about.jpg"
                alt="Srinivasa Ramanujan Foundation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3 rounded-2xl border border-srf-gold/40 bg-srf-black p-4 text-center text-white shadow-2xl">
              <div>
                <p className="font-display text-2xl text-srf-gold">06</p>
                <p className="text-[10px] uppercase tracking-wider text-white/60">Olympiads</p>
              </div>
              <div>
                <p className="font-display text-2xl text-srf-gold">1729</p>
                <p className="text-[10px] uppercase tracking-wider text-white/60">Legacy</p>
              </div>
              <div>
                <p className="font-display text-2xl text-srf-gold">L1+L2</p>
                <p className="text-[10px] uppercase tracking-wider text-white/60">Pathway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE 3 — Connected timeline process */}
      <section className="section-beige py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Examination process</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black">Your journey with SRF</h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-srf-gold via-srf-gold/40 to-transparent md:left-1/2 md:block" />
            <ol className="space-y-8">
              {processSteps.map((step, index) => {
                const left = index % 2 === 0;
                return (
                  <li
                    key={step.title}
                    className={cn(
                      "relative grid gap-4 md:grid-cols-2 md:gap-10",
                      left ? "" : "md:[&>*:first-child]:order-2",
                    )}
                  >
                    <div className={cn("md:text-right", !left && "md:text-left")}>
                      <div
                        className={cn(
                          "inline-block rounded-2xl border border-srf-soft-gray bg-white p-6 shadow-[0_16px_40px_rgba(18,18,18,0.06)]",
                          left ? "md:ml-auto" : "md:mr-auto",
                        )}
                      >
                        <p className="font-display text-3xl text-srf-gold">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-srf-black">{step.title}</h3>
                        <p className="mt-2 max-w-sm text-sm text-srf-muted">{step.detail}</p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-[0.65rem] top-6 h-4 w-4 rounded-full border-4 border-srf-beige bg-srf-gold md:left-1/2 md:-translate-x-1/2" />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* TEMPLATE 4 — Magazine featured grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-srf-soft-gray pb-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Featured Olympiads</p>
              <h2 className="mt-3 font-display text-4xl text-srf-black">All programmes at a glance</h2>
            </div>
            <Link href="/register" className={buttonVariants()}>
              Start registration
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {olympiadList.map((olympiad) => (
              <OlympiadCard key={olympiad.slug} olympiad={olympiad} />
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE 5 — Ceremonial awards podium */}
      <section className="section-dark relative overflow-hidden py-24 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <Image src="/images/gallery/event-1.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Trophy className="mx-auto h-10 w-10 text-srf-gold" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Awards & toppers</p>
            <h2 className="mt-3 font-display text-4xl text-srf-gold md:text-5xl">Celebrating excellence</h2>
            <p className="mt-4 text-white/70">
              A prestigious academic awards presentation for outstanding performers across SRF Olympiads.
            </p>
          </div>

          <div className="mt-14 grid items-end gap-5 md:grid-cols-4">
            {toppers.map((topper, index) => (
              <article
                key={`${topper.studentName}-${topper.olympiad}`}
                className={cn(
                  "rounded-2xl border border-srf-gold/35 bg-black/55 p-6 backdrop-blur-md transition hover:-translate-y-2 hover:border-srf-gold",
                  index === 0 && "md:-translate-y-6 border-srf-gold bg-gradient-to-b from-srf-gold/20 to-transparent",
                )}
              >
                <div className="flex items-center justify-between">
                  <Award className="h-5 w-5 text-srf-gold" />
                  <span className="rounded-md bg-srf-gold px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-srf-black">
                    Rank {String(topper.rank).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{topper.studentName}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {topper.olympiad} · {topper.classLevel}
                </p>
                <p className="mt-1 text-sm text-white/45">{topper.school}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/awards" className={buttonVariants({ variant: "secondary" })}>
              View awards gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TEMPLATE 6 — Masonry gallery */}
      <section className="section-beige py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Gallery</p>
              <h2 className="mt-3 font-display text-4xl text-srf-black">Moments from SRF</h2>
              <p className="mt-3 max-w-xl text-srf-muted">
                Photographs sourced from the official SRF archive at srmoe.com.
              </p>
            </div>
            <Link href="/gallery" className={buttonVariants({ variant: "outline" })}>
              Open gallery
            </Link>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className={cn(
                  "group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl gold-frame",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE 7 — Split FAQ + support panel */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div className="rounded-[2rem] bg-srf-black p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Support</p>
            <h2 className="mt-4 font-display text-4xl text-white">Common questions</h2>
            <p className="mt-4 text-white/70">
              Clear answers for students, parents and school coordinators before registration.
            </p>
            <Link href="/faq" className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}>
              Browse all FAQs
            </Link>
            <div className="mt-10 space-y-3 text-sm text-white/65">
              <p>Helpline: {siteConfig.phone[0]}</p>
              <p>Email: {siteConfig.email[0]}</p>
            </div>
          </div>

          <div className="divide-y divide-srf-soft-gray overflow-hidden rounded-[2rem] border border-srf-soft-gray bg-srf-beige/40">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="group px-6 py-5">
                <summary className="cursor-pointer list-none font-semibold text-srf-black marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="text-srf-gold transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-srf-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE 8 — Cinematic final CTA */}
      <section className="relative overflow-hidden py-28 text-center text-white">
        <Image
          src="/images/gallery/event-4.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6">
          <CheckCircle2 className="mx-auto h-10 w-10 text-srf-gold" aria-hidden />
          <h2 className="mt-6 font-display text-4xl text-srf-gold md:text-6xl">
            Ready to show your potential?
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Register for your preferred SRF Olympiad and begin your journey towards academic excellence.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/register" className={buttonVariants({ size: "xl" })}>
              Register Now
            </Link>
            <Link href="/olympiads" className={buttonVariants({ variant: "secondary", size: "xl" })}>
              Explore Olympiads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
