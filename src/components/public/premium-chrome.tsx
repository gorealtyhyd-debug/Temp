"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const nav = [
  { href: "/olympiads", label: "Olympiads" },
  { href: "/exam-details", label: "Dates" },
  { href: "/about", label: "Foundation" },
  { href: "/school-registration", label: "Schools" },
];

export function PremiumHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={solid ? "srf-header srf-header--solid" : "srf-header"}>
      <Link className="srf-brand" href="/" aria-label="SRF home">
        <Image src="/brand/srf-logo.png" alt="SRF logo" width={126} height={90} className="h-auto w-[46px]" priority />
        <span className="srf-brand__words">
          SRF
          <small>Hyderabad</small>
        </span>
      </Link>
      <nav className="srf-nav" aria-label="Main navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} data-active={pathname === item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="srf-header__cta" href="/register">
        Join 2026–27 <ArrowUpRight size={16} />
      </Link>
      <button className="srf-menu-trigger" type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <nav className="srf-mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/register" onClick={() => setOpen(false)}>
            Join 2026–27
          </Link>
        </nav>
      )}
    </header>
  );
}

export function PremiumFooter() {
  return (
    <footer className="srf-footer">
      <div className="srf-shell">
        <p className="srf-footer__mark">SRF</p>
        <div className="srf-footer__top">
          <div>
            <p className="srf-footer__kicker">Srinivasa Ramanujan Foundation</p>
            <p className="srf-footer__place">Hyderabad · Official Olympiad Platform</p>
          </div>
          <div className="srf-footer__links">
            <Link href="/olympiads">Olympiads</Link>
            <Link href="/register">Register</Link>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/student-login">Student</Link>
            <Link href="/school">School</Link>
          </div>
        </div>
        <div className="srf-footer__bottom">
          <span>© {new Date().getFullYear()} SRF · Mathematics · Science · Language · Reasoning</span>
          <a href="tel:9948481729">9948481729</a>
        </div>
      </div>
    </footer>
  );
}
