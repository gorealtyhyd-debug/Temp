import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { OlympiadCard } from "@/components/public/olympiad-card";
import { faqs, getPublishedOlympiads, processSteps, toppers, whySrf } from "@/lib/content/olympiads";
import { siteConfig } from "@/lib/site";
import { cn, formatDate, formatInrFromPaise } from "@/lib/utils";

const covers = [
  "/images/stock/study.jpg",
  "/images/stock/classroom.jpg",
  "/images/stock/exam.jpg",
  "/images/stock/books.jpg",
  "/images/stock/desk.jpg",
  "/images/stock/classroom-2.jpg",
];

const gallery = [
  "/images/stock/students-1.jpg",
  "/images/stock/award.jpg",
  "/images/stock/team.jpg",
  "/images/stock/graduation.jpg",
  "/images/gallery/event-1.jpg",
  "/images/gallery/event-2.jpg",
  "/images/stock/trophy.jpg",
  "/images/gallery/event-4.jpg",
];

export function HomeSections() {
  const list = getPublishedOlympiads();

  return (
    <>
      {/* Trust strip */}
      <section className="border-b border-srf-soft-gray bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {[
            ["6+", "Olympiad programmes"],
            ["₹150", "Per Olympiad fee"],
            ["L1 + L2", "Clear exam pathway"],
            ["1729", "SRF academic legacy"],
          ].map(([value, label]) => (
            <div key={label} className="text-center md:text-left">
              <p className="display text-3xl text-srf-gold">{value}</p>
              <p className="mt-1 text-sm text-srf-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal spotlight programmes */}
      <section className="section-pad surface-noise">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Programmes</p>
              <h2 className="display mt-3 text-4xl text-srf-black md:text-5xl">
                Choose your Olympiad
              </h2>
              <p className="mt-3 max-w-xl text-srf-muted">
                Swipe through SRF programmes for {siteConfig.academicYear}. Clear dates, fees and
                eligibility — ready to register.
              </p>
            </div>
            <Link href="/olympiads" className={cn(buttonVariants({ variant: "outline" }), "hidden sm:inline-flex")}>
              See all
            </Link>
          </div>
          <div className="scroll-row">
            {list.map((item, index) => (
              <OlympiadCard key={item.slug} olympiad={item} cover={covers[index % covers.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature story */}
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/hero/library.jpg"
                alt="Students studying in an academic library"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 max-w-xs rounded-2xl border border-srf-gold/40 bg-srf-black p-5 text-white shadow-2xl md:right-6">
              <p className="text-xs uppercase tracking-[0.16em] text-srf-gold">Why families choose SRF</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Transparent evaluation, class-wise papers and a complete digital journey from
                registration to certificate.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Why SRF</p>
            <h2 className="display mt-3 text-4xl text-srf-black md:text-5xl">
              Designed for clarity and trust
            </h2>
            <div className="mt-8 space-y-5">
              {whySrf.map((item, index) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-srf-soft-gray p-4 transition hover:border-srf-gold hover:bg-srf-beige/50">
                  <span className="display text-2xl text-srf-gold">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-srf-black">{item.title}</h3>
                    <p className="mt-1 text-sm text-srf-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pathway rail */}
      <section className="section-pad bg-srf-black text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Simple pathway</p>
            <h2 className="display mt-3 text-4xl text-white md:text-5xl">
              From explore to certificate
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="display text-3xl text-srf-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65">{step.detail}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-srf-gold md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating programme strips */}
      <section className="section-pad surface-noise">
        <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-6">
          <div className="mb-4">
            <p className="eyebrow">Featured programmes</p>
            <h2 className="display mt-3 text-4xl text-srf-black md:text-5xl">Deep dive into SRF Olympiads</h2>
          </div>
          {list.slice(0, 4).map((item, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={item.slug}
                className={cn(
                  "grid overflow-hidden rounded-[2rem] border border-srf-soft-gray bg-white shadow-[0_16px_40px_rgba(11,11,11,0.06)] md:grid-cols-2",
                  reverse && "md:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative min-h-[280px]">
                  <Image
                    src={covers[index % covers.length]}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-srf-gold">{item.code}</p>
                  <h3 className="display mt-3 text-3xl text-srf-black">{item.name}</h3>
                  <p className="mt-3 text-srf-muted">{item.description}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-srf-muted">Level-1</dt>
                      <dd className="mt-1 font-semibold">{formatDate(item.level1Date)}</dd>
                    </div>
                    <div>
                      <dt className="text-srf-muted">Fee</dt>
                      <dd className="mt-1 font-display text-2xl text-srf-gold">{formatInrFromPaise(item.feePaise)}</dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/olympiads/${item.slug}`} className={buttonVariants({ variant: "outline" })}>
                      View details
                    </Link>
                    <Link href="/register" className={buttonVariants()}>
                      Register
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Awards cinematic */}
      <section className="relative overflow-hidden py-24 text-white">
        <Image src="/images/stock/award.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/55" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Trophy className="h-8 w-8 text-srf-gold" />
              <h2 className="display mt-4 text-4xl text-srf-gold md:text-5xl">Celebrating toppers</h2>
              <p className="mt-3 max-w-xl text-white/70">Recognition that feels like an academic award ceremony — not a school notice board.</p>
            </div>
            <Link href="/awards" className={buttonVariants({ variant: "secondary" })}>
              View awards
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toppers.map((topper, index) => (
              <div
                key={topper.studentName}
                className={cn(
                  "rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md",
                  index === 0 && "border-srf-gold/60 bg-srf-gold/10",
                )}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-srf-gold">
                  Rank {String(topper.rank).padStart(2, "0")}
                </p>
                <h3 className="mt-4 display text-2xl">{topper.studentName}</h3>
                <p className="mt-2 text-sm text-white/70">{topper.olympiad} · {topper.classLevel}</p>
                <p className="mt-1 text-sm text-white/45">{topper.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic gallery + marquee */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="eyebrow">Campus & ceremonies</p>
              <h2 className="display mt-3 text-4xl text-srf-black">A living academic brand</h2>
            </div>
            <Link href="/gallery" className={buttonVariants({ variant: "outline" })}>
              Open gallery
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            {gallery.map((src, index) => (
              <div
                key={src}
                className={cn(
                  "relative overflow-hidden rounded-2xl",
                  index === 0 && "min-h-[220px] md:col-span-2 md:row-span-2 md:min-h-[420px]",
                  index !== 0 && "min-h-[160px] md:min-h-[200px]",
                )}
              >
                <Image src={src} alt="SRF academic and event imagery" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 overflow-hidden border-y border-srf-soft-gray bg-srf-beige py-4">
          <div className="marquee text-sm font-semibold uppercase tracking-[0.18em] text-srf-ink">
            {[...Array(2)].map((_, copy) => (
              <div key={copy} className="flex gap-8">
                {["SRMO", "CVRSO", "SEO", "AKO", "NSRMO", "SCO", "Register Now", "Hall Tickets", "Results"].map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-8">
                    <span>{item}</span>
                    <span className="text-srf-gold">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help centre style FAQ */}
      <section className="section-pad surface-noise">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-srf-black p-8 text-white md:p-10">
              <GraduationCap className="h-8 w-8 text-srf-gold" />
              <h2 className="display mt-5 text-4xl">Need help deciding?</h2>
              <p className="mt-4 text-white/70">
                Start with eligibility and dates, then register in a few guided steps.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  [BookOpenCheck, "Compare Olympiads", "/olympiads"],
                  [ClipboardCheck, "Check exam details", "/exam-details"],
                  [Sparkles, "Start registration", "/register"],
                ].map(([Icon, label, href]) => (
                  <Link
                    key={label as string}
                    href={href as string}
                    className="inline-flex items-center justify-between rounded-xl border border-white/15 px-4 py-3 text-sm hover:border-srf-gold hover:bg-white/5"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-4 w-4 text-srf-gold" />
                      {label as string}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-srf-soft-gray bg-white p-2">
              {faqs.slice(0, 5).map((faq) => (
                <details key={faq.question} className="group border-b border-srf-soft-gray px-5 py-4 last:border-0">
                  <summary className="cursor-pointer list-none text-base font-semibold text-srf-black marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-srf-gold transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-srf-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28 text-center text-white">
        <Image src="/images/stock/graduation.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <CheckCircle2 className="mx-auto h-10 w-10 text-srf-gold" />
          <h2 className="display mt-6 text-4xl text-srf-gold md:text-6xl">Ready when you are</h2>
          <p className="mt-4 text-lg text-white/75">
            Register for your preferred SRF Olympiad and begin a clear journey toward academic excellence.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/register" className={buttonVariants({ size: "xl" })}>
              Register Now
            </Link>
            <Link href="/student-login" className={buttonVariants({ variant: "secondary", size: "xl" })}>
              Student Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
