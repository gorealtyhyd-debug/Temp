"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const utilityLinks = [
  { href: "/school-registration", label: "School Register" },
  { href: "/register", label: "Student Register" },
  { href: "/coordinator-registration", label: "Coordinator" },
  { href: "/contact", label: "Invite / Join With Us" },
];

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/results", label: "Results" },
  { href: "/awards", label: "Awards" },
  { href: "/gallery", label: "Gallery" },
  { href: "/gallery", label: "Media Gallery" },
  { href: "/exam-details", label: "Exam" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact Us" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-srf-black text-srf-gold">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-center text-[11px] font-semibold tracking-wide sm:flex-row sm:items-center sm:justify-between sm:text-left md:px-6">
        <p className="uppercase">{siteConfig.announcement}</p>
        <Link
          href="/register"
          className="inline-flex items-center justify-center rounded-md border border-srf-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-srf-gold transition hover:bg-srf-gold hover:text-srf-black"
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
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Tier 1 — utility strip (matches srmoe.com top quick links) */}
      <div className="border-b border-srf-gold/20 bg-srf-charcoal text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-[11px] md:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {utilityLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:text-srf-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href={`tel:${siteConfig.phone[0]}`}
            className="inline-flex items-center gap-1.5 font-semibold text-srf-gold"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone[0]}
          </a>
        </div>
      </div>

      {/* Tier 2 — brand banner */}
      <div
        className={cn(
          "border-b border-srf-soft-gray transition-all",
          scrolled ? "hidden" : "bg-srf-beige",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="SRF home">
            <Image
              src="/brand/srf-mark.svg"
              alt="SRF logo"
              width={64}
              height={64}
              className="h-14 w-14 rounded-xl shadow-[0_8px_20px_rgba(18,18,18,0.12)]"
              priority
            />
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-srf-black md:text-2xl">
                Srinivasa Ramanujan Foundation
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-srf-gold">
                Official Olympiad Platform · 1729
              </p>
            </div>
          </Link>

          <div className="hidden text-right text-sm text-srf-muted lg:block">
            <p className="font-semibold text-srf-ink">Hyderabad, Telangana</p>
            <p>{siteConfig.email[0]}</p>
          </div>
        </div>
      </div>

      {/* Tier 3 — primary navbar (srmoe.com main menu, premium black/gold) */}
      <div
        className={cn(
          "border-b transition-colors",
          scrolled
            ? "border-white/10 bg-srf-black/95 text-white backdrop-blur-md"
            : "border-srf-black bg-srf-black text-white",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-6">
          {scrolled && (
            <Link href="/" className="flex items-center gap-2 xl:hidden">
              <Image src="/brand/srf-mark.svg" alt="" width={32} height={32} className="rounded-md" />
              <span className="font-display text-lg text-srf-gold">SRF</span>
            </Link>
          )}

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/90 transition hover:bg-srf-gold hover:text-srf-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLoginOpen((v) => !v)}
                className="inline-flex items-center gap-1 rounded-md border border-white/25 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white transition hover:border-srf-gold hover:text-srf-gold"
              >
                Login <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {loginOpen && (
                <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-srf-soft-gray bg-white shadow-xl">
                  <Link
                    href="/student-login"
                    className="block px-4 py-3 text-sm font-medium text-srf-black hover:bg-srf-beige"
                    onClick={() => setLoginOpen(false)}
                  >
                    Student Login
                  </Link>
                  <Link
                    href="/school"
                    className="block px-4 py-3 text-sm font-medium text-srf-black hover:bg-srf-beige"
                    onClick={() => setLoginOpen(false)}
                  >
                    School Login
                  </Link>
                  <Link
                    href="/admin"
                    className="block px-4 py-3 text-sm font-medium text-srf-black hover:bg-srf-beige"
                    onClick={() => setLoginOpen(false)}
                  >
                    Admin Login
                  </Link>
                </div>
              )}
            </div>
            <Link href="/register" className={buttonVariants({ size: "sm" })}>
              Register Now
            </Link>
          </div>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="xl:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-srf-charcoal px-4 py-4 xl:hidden">
            <nav className="flex flex-col gap-1">
              {utilityLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-srf-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-white/10" />
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/student-login" className={cn(buttonVariants({ variant: "secondary" }), "mt-3")} onClick={() => setOpen(false)}>
                Student Login
              </Link>
              <Link href="/register" className={buttonVariants()} onClick={() => setOpen(false)}>
                Register Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
