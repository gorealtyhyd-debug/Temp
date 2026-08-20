import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero-pattern relative overflow-hidden text-white">
      <div className="math-watermark" aria-hidden>
        <span className="animate-soft-pulse left-[8%] top-[18%] text-6xl md:text-8xl">∑</span>
        <span className="right-[12%] top-[28%] text-5xl md:text-7xl">π</span>
        <span className="bottom-[20%] left-[18%] text-4xl md:text-6xl">√</span>
        <span className="bottom-[24%] right-[20%] text-5xl md:text-7xl">∞</span>
        <span className="left-1/2 top-[12%] -translate-x-1/2 text-4xl">∫</span>
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-20 md:px-6">
        <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.28em] text-srf-gold">
          {siteConfig.legalName} · {siteConfig.academicYear}
        </p>
        <div className="animate-draw-line mt-5 h-px w-24 bg-srf-gold" />
        <h1 className="animate-fade-up-delay mt-8 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Unlock Your{" "}
          <span className="text-srf-gold">Academic Potential</span>
        </h1>
        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
          Compete. Learn. Excel. — Register for SRF Olympiads and begin a prestigious journey in
          Mathematics, Science, English, Cyber and multi-disciplinary excellence.
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/register" className={buttonVariants({ size: "xl" })}>
            Register for Olympiad
          </Link>
          <Link
            href="/olympiads"
            className={buttonVariants({ variant: "secondary", size: "xl" })}
          >
            Explore Olympiads
          </Link>
        </div>
      </div>
    </section>
  );
}
