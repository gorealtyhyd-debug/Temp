"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const utilityLinks = [
  { href: "/school-registration", label: "School Register" },
  { href: "/register", label: "Student Register" },
  { href: "/coordinator-registration", label: "Coordinator" },
  { href: "/contact", label: "Join With Us" },
];

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/olympiads", label: "Olympiads" },
  { href: "/exam-details", label: "Exam Details" },
  { href: "/results", label: "Results" },
  { href: "/awards", label: "Awards" },
  { href: "/gallery", label: "Gallery" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-srf-black text-srf-gold">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[11px] font-semibold md:px-6">
        <p className="truncate uppercase tracking-[0.08em]">{siteConfig.announcement}</p>
        <Link
          href="/register"
          className="shrink-0 rounded-md bg-srf-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-srf-black"
        >
          Register
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-srf-charcoal text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs md:px-6">
          <div className="flex items-center gap-4">
            {utilityLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-white/75 transition hover:text-srf-gold">
                {link.label}
              </Link>
            ))}
          </div>
          <a href={`tel:${siteConfig.phone[0]}`} className="inline-flex items-center gap-1.5 text-srf-gold">
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone[0]}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all",
          scrolled
            ? "border-white/10 bg-srf-black/95 text-white backdrop-blur-xl"
            : "border-srf-soft-gray bg-srf-beige/95 text-srf-black backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/brand/srf-mark.svg"
              alt="SRF"
              width={48}
              height={48}
              className="h-11 w-11 rounded-xl"
              priority
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-semibold leading-tight md:text-xl">
                Srinivasa Ramanujan Foundation
              </span>
              <span className={cn("block text-[11px] tracking-[0.14em]", scrolled ? "text-srf-gold" : "text-srf-muted")}>
                Olympiad Platform · 1729
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition",
                  scrolled ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-srf-ink hover:bg-white hover:text-srf-black",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/olympiads"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg border",
                scrolled ? "border-white/20 text-white" : "border-srf-soft-gray text-srf-ink",
              )}
              aria-label="Search olympiads"
            >
              <Search className="h-4 w-4" />
            </Link>
            <div className="relative">
              <button
                type="button"
                onClick={() => setLoginOpen((v) => !v)}
                className={cn(
                  "inline-flex h-10 items-center gap-1 rounded-lg border px-3 text-sm font-semibold",
                  scrolled ? "border-white/20 text-white" : "border-srf-soft-gray text-srf-ink",
                )}
              >
                Login <ChevronDown className="h-4 w-4" />
              </button>
              {loginOpen && (
                <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-srf-soft-gray bg-white shadow-xl">
                  {[
                    ["Student", "/student-login"],
                    ["School", "/school"],
                    ["Admin", "/admin"],
                  ].map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="block px-4 py-3 text-sm text-srf-black hover:bg-srf-beige"
                      onClick={() => setLoginOpen(false)}
                    >
                      {label} Login
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/register" className={buttonVariants({ size: "md" })}>
              Register Now
            </Link>
          </div>

          <Button type="button" variant={scrolled ? "secondary" : "outline"} size="sm" className="xl:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {open && (
          <div className="border-t border-srf-soft-gray bg-white px-4 py-4 xl:hidden">
            <div className="grid gap-1">
              {[...utilityLinks, ...primaryNav].map((item) => (
                <Link key={item.label} href={item.href} className="rounded-lg px-3 py-3 text-sm font-medium text-srf-ink hover:bg-srf-beige" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              <Link href="/student-login" className={buttonVariants({ variant: "outline" })} onClick={() => setOpen(false)}>
                Student Login
              </Link>
              <Link href="/register" className={buttonVariants()} onClick={() => setOpen(false)}>
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
