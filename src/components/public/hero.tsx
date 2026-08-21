import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="hero-media text-white">
      <Image
        src="/images/hero/campus.jpg"
        alt="Students on an academic campus preparing for competitive exams"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
        <div className="max-w-3xl">
          <p className="animate-fade-up eyebrow text-srf-gold">
            {siteConfig.legalName} · {siteConfig.academicYear}
          </p>
          <div className="animate-draw-line mt-5 h-px w-24 bg-srf-gold" />
          <h1 className="animate-fade-up-delay display mt-7 text-5xl text-white sm:text-6xl lg:text-7xl">
            Compete with confidence.
            <span className="mt-2 block text-srf-gold">Excel with SRF.</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            A premium national Olympiad platform for Mathematics, Science, English, Cyber and
            multi-disciplinary excellence — built for students, parents and schools.
          </p>
          <div className="animate-fade-up-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className={buttonVariants({ size: "xl" })}>
              Register for Olympiad
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/olympiads" className={buttonVariants({ variant: "secondary", size: "xl" })}>
              Browse Olympiads
            </Link>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 mt-12 grid gap-3 sm:grid-cols-3">
          {[
            { icon: CalendarDays, label: "Level-1 in November 2026", detail: "Clear dates for every Olympiad" },
            { icon: ShieldCheck, label: "Secure verified payments", detail: "Gateway-confirmed registration" },
            { icon: Users, label: "Students & schools", detail: "Individual + bulk registration" },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="glass-panel rounded-2xl p-4">
              <Icon className="h-5 w-5 text-srf-gold" />
              <p className="mt-3 text-sm font-semibold text-white">{label}</p>
              <p className="mt-1 text-xs text-white/65">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
