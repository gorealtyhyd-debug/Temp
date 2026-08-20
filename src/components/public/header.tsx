"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const nav = [
  { href: "/olympiads", label: "Olympiads" },
  { href: "/exam-details", label: "Exam Details" },
  { href: "/results", label: "Results" },
  { href: "/awards", label: "Awards" },
  { href: "/downloads", label: "Downloads" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-srf-black text-srf-gold">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2.5 text-center text-xs font-semibold tracking-wide sm:flex-row sm:items-center sm:justify-between sm:text-left md:px-6">
        <p className="uppercase">{siteConfig.announcement}</p>
        <Link
          href="/register"
          className="inline-flex items-center justify-center rounded-md border border-srf-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-srf-gold transition hover:bg-srf-gold hover:text-srf-black"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-srf-charcoal bg-srf-black text-white"
          : "border-srf-soft-gray bg-white text-srf-black",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="SRF home">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border font-display text-lg font-bold",
              scrolled ? "border-srf-gold text-srf-gold" : "border-srf-black text-srf-black",
            )}
          >
            SRF
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-semibold tracking-tight">
              {siteConfig.shortName}
            </span>
            <span className={cn("block text-[11px] uppercase tracking-[0.16em]", scrolled ? "text-white/70" : "text-srf-muted")}>
              Olympiad Platform
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-srf-gold after:transition-all hover:after:w-full",
                scrolled ? "text-white/90 hover:text-white" : "text-srf-charcoal hover:text-srf-black",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/student-login"
            className={cn(
              buttonVariants({ variant: scrolled ? "secondary" : "outline", size: "sm" }),
              scrolled && "border-white/40 text-white hover:border-srf-gold",
            )}
          >
            Student Login
          </Link>
          <Link href="/register" className={buttonVariants({ size: "sm" })}>
            Register Now
          </Link>
        </div>

        <Button
          type="button"
          variant={scrolled ? "secondary" : "outline"}
          size="sm"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-srf-soft-gray bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-srf-charcoal hover:bg-srf-off-white hover:text-srf-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/student-login" className={buttonVariants({ variant: "outline" })} onClick={() => setOpen(false)}>
              Student Login
            </Link>
            <Link href="/register" className={buttonVariants()} onClick={() => setOpen(false)}>
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
