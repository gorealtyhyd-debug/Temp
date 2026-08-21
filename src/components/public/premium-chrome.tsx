"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const nav = [
  { href: "/olympiads", label: "The Olympiads" },
  { href: "/about", label: "The Foundation" },
  { href: "/school-registration", label: "For Schools" },
  { href: "/register", label: "Student registration" },
];

export function PremiumHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="srf-shell srf-header">
        <Link className="srf-brand" href="/" aria-label="SRF home">
          <Image src="/brand/srf-logo.png" alt="SRF logo" width={126} height={90} className="h-auto w-[63px]" priority />
          <span className="srf-brand__words">
            Srinivasa Ramanujan
            <br />
            Foundation
          </span>
        </Link>
        <nav className="srf-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} data-active={pathname === item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
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
          </nav>
        )}
      </header>
      <div className="srf-alert">
        <div className="srf-shell srf-alert__inner">
          <span className="srf-alert__live">
            <i /> Live for 2026–27
          </span>
          <span>School registration is open · Level 1 exam window: 04—07 November</span>
          <Link href="/exam-details">
            See all dates <ChevronRight size={12} style={{ verticalAlign: "middle" }} />
          </Link>
        </div>
      </div>
    </>
  );
}

export function PremiumFooter() {
  return (
    <footer className="srf-footer">
      <div className="srf-shell">
        <div className="srf-footer__top">
          <Link className="srf-brand" href="/" aria-label="SRF home">
            <Image src="/brand/srf-logo.png" alt="SRF logo" width={126} height={90} className="h-auto w-[63px]" />
            <span className="srf-brand__words">
              Srinivasa Ramanujan
              <br />
              Foundation
            </span>
          </Link>
          <div className="srf-footer__links">
            <Link href="/about">About</Link>
            <Link href="/results">Results</Link>
            <Link href="/awards">Awards</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/downloads">Downloads</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/school">School login</Link>
            <Link href="/student-login">Student login</Link>
          </div>
        </div>
        <div className="srf-footer__bottom">
          <span>© {new Date().getFullYear()} Srinivasa Ramanujan Foundation</span>
          <span>Mathematics · Science · Language · Reasoning</span>
        </div>
      </div>
    </footer>
  );
}
