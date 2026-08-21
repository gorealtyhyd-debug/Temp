import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero-media relative min-h-[92vh] text-white">
      <Image
        src="/images/hero/slide-1.jpg"
        alt="SRF Olympiad examination and award ceremony moments"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="math-watermark" aria-hidden>
        <span className="animate-soft-pulse left-[8%] top-[18%] text-6xl md:text-8xl">∑</span>
        <span className="right-[14%] top-[26%] text-5xl md:text-7xl">π</span>
        <span className="bottom-[22%] left-[16%] text-4xl md:text-6xl">√</span>
        <span className="bottom-[18%] right-[18%] text-5xl md:text-7xl">∞</span>
        <span className="left-1/2 top-[12%] -translate-x-1/2 text-4xl">1729</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-6">
        <div className="animate-fade-up mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-srf-gold/40 bg-black/35 px-4 py-2 backdrop-blur-sm">
          <Image src="/brand/srf-mark.svg" alt="" width={28} height={28} className="rounded-md" />
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-srf-gold">
            {siteConfig.legalName} · {siteConfig.academicYear}
          </p>
        </div>

        <div className="animate-draw-line h-px w-24 bg-srf-gold" />

        <h1 className="animate-fade-up-delay mt-8 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Unlock Your <span className="text-srf-gold">Academic Potential</span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          Compete. Learn. Excel. — Register for SRF Olympiads and begin a prestigious journey in
          Mathematics, Science, English, Cyber and multi-disciplinary excellence.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/register" className={buttonVariants({ size: "xl" })}>
            Register for Olympiad
          </Link>
          <Link href="/olympiads" className={buttonVariants({ variant: "secondary", size: "xl" })}>
            Explore Olympiads
          </Link>
        </div>
      </div>
    </section>
  );
}
