import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { OlympiadCard } from "@/components/public/olympiad-card";
import { faqs, getPublishedOlympiads, processSteps, toppers, whySrf } from "@/lib/content/olympiads";
import { siteConfig } from "@/lib/site";

export function HomeSections() {
  const olympiadList = getPublishedOlympiads();

  return (
    <>
      <section className="bg-srf-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Quick overview</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black md:text-5xl">Olympiads for {siteConfig.academicYear}</h2>
            <p className="mt-4 text-srf-muted">
              Choose from mathematics, science, English, cyber and multi-disciplinary Olympiads —
              all managed through one secure registration platform.
            </p>
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Why SRF</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black md:text-5xl">
              Built for academic excellence
            </h2>
            <p className="mt-4 text-srf-muted">
              A premium examination ecosystem for students, parents and schools — with verified
              payments, hall tickets, results and certificates.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whySrf.map((item) => (
              <article key={item.title} className="border-l-2 border-srf-gold pl-4">
                <h3 className="font-display text-xl text-srf-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-srf-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-srf-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">Examination process</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black">Your journey with SRF</h2>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-xl border border-srf-soft-gray bg-white p-5">
                <span className="font-display text-3xl text-srf-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-base font-bold text-srf-black">{step.title}</h3>
                <p className="mt-2 text-sm text-srf-muted">{step.detail}</p>
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

      <section className="bg-srf-black py-16 text-white md:py-20">
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
                className="rounded-xl border border-srf-gold/40 bg-srf-charcoal/60 p-5"
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

      <section className="bg-srf-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">FAQ</p>
            <h2 className="mt-3 font-display text-4xl text-srf-black">Common questions</h2>
          </div>
          <div className="mt-8 divide-y divide-srf-soft-gray rounded-xl border border-srf-soft-gray bg-white">
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

      <section className="bg-srf-black py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <CheckCircle2 className="mx-auto h-10 w-10 text-srf-gold" aria-hidden />
          <h2 className="mt-6 font-display text-4xl text-srf-gold md:text-5xl">
            Ready to show your potential?
          </h2>
          <p className="mt-4 text-white/70">
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
