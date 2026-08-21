import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge, Card, CardContent } from "@/components/ui/card";
import { OlympiadCard } from "@/components/public/olympiad-card";
import { faqs, getPublishedOlympiads, processSteps, toppers, whySrf } from "@/lib/content/olympiads";
import { siteConfig } from "@/lib/site";

const gallery = [
  { src: "/images/gallery/event-1.jpg", alt: "SRF Olympiad award ceremony" },
  { src: "/images/gallery/event-2.jpg", alt: "Students receiving recognition at SRF event" },
  { src: "/images/gallery/event-3.jpg", alt: "SRF academic excellence celebration" },
  { src: "/images/gallery/event-4.jpg", alt: "SRF Olympiad participants and guests" },
  { src: "/images/gallery/event-5.jpg", alt: "SRF examination programme moments" },
  { src: "/images/gallery/about.jpg", alt: "About Srinivasa Ramanujan Foundation" },
];

export function HomeSections() {
  const olympiadList = getPublishedOlympiads();

  return (
    <>
      <section className="section-beige py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Quick overview</p>
              <h2 className="mt-3 font-display text-4xl text-srf-black md:text-5xl">
                Olympiads for {siteConfig.academicYear}
              </h2>
              <p className="mt-4 max-w-2xl text-srf-muted">
                Choose from mathematics, science, English, cyber and multi-disciplinary Olympiads —
                all managed through one secure registration platform.
              </p>
            </div>
            <div className="relative hidden overflow-hidden rounded-2xl gold-frame md:block md:h-40">
              <Image
                src="/images/hero/slide-2.jpg"
                alt="SRF Olympiad programme highlight"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {olympiadList.slice(0, 3).map((olympiad) => (
              <OlympiadCard key={olympiad.slug} olympiad={olympiad} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/olympiads" className={buttonVariants({ variant: "outline" })}>
              View all Olympiads
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
          <div>
            <Badge variant="soft">Why SRF</Badge>
            <h2 className="mt-4 font-display text-4xl text-srf-black md:text-5xl">
              Built for academic excellence
            </h2>
            <p className="mt-4 text-srf-muted">
              A premium examination ecosystem for students, parents and schools — with verified
              payments, hall tickets, results and certificates.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl gold-frame">
              <Image
                src="/images/gallery/about.jpg"
                alt="Srinivasa Ramanujan Foundation institutional photograph"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whySrf.map((item) => (
              <Card key={item.title} className="bg-srf-beige/60 p-0">
                <CardContent className="p-5">
                  <Sparkles className="h-5 w-5 text-srf-gold" />
                  <h3 className="mt-4 font-display text-xl text-srf-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-srf-muted">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-beige py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Examination process</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black">Your journey with SRF</h2>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <Card className="h-full p-0">
                  <CardContent className="p-5">
                    <span className="font-display text-3xl text-srf-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-srf-black">{step.title}</h3>
                    <p className="mt-2 text-sm text-srf-muted">{step.detail}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Featured Olympiads</p>
              <h2 className="mt-3 font-display text-4xl text-srf-black">All programmes at a glance</h2>
            </div>
            <Link href="/register" className={buttonVariants()}>
              Start registration
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {olympiadList.map((olympiad) => (
              <OlympiadCard key={olympiad.slug} olympiad={olympiad} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Awards & toppers</p>
            <h2 className="mt-3 font-display text-4xl text-srf-gold md:text-5xl">Celebrating excellence</h2>
            <p className="mt-4 text-white/70">
              A prestigious academic awards presentation for outstanding performers across SRF Olympiads.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {toppers.map((topper) => (
              <article
                key={`${topper.studentName}-${topper.olympiad}`}
                className="rounded-xl border border-srf-gold/35 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-srf-gold hover:bg-white/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-srf-gold">
                  Rank {String(topper.rank).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl">{topper.studentName}</h3>
                <p className="mt-2 text-sm text-white/70">
                  {topper.olympiad} · {topper.classLevel}
                </p>
                <p className="mt-1 text-sm text-white/50">{topper.school}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/awards" className={buttonVariants({ variant: "secondary" })}>
              View awards gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section-beige py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl gold-frame">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">FAQ</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black">Common questions</h2>
          </div>
          <div className="mt-8 divide-y divide-srf-soft-gray overflow-hidden rounded-2xl border border-srf-soft-gray bg-srf-beige/40">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="group px-5 py-4">
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
          <div className="mt-6">
            <Link href="/faq" className={buttonVariants({ variant: "outline" })}>
              Browse all FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark relative overflow-hidden py-20 text-center text-white">
        <Image
          src="/images/gallery/event-4.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6">
          <CheckCircle2 className="mx-auto h-10 w-10 text-srf-gold" aria-hidden />
          <h2 className="mt-6 font-display text-4xl text-srf-gold md:text-5xl">
            Ready to show your potential?
          </h2>
          <p className="mt-4 text-white/75">
            Register for your preferred SRF Olympiad and begin your journey towards academic excellence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
