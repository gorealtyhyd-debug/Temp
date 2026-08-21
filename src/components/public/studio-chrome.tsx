"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/olympiads", label: "Olympiads" },
  { href: "/exam-details", label: "Dates" },
  { href: "/school-registration", label: "Schools" },
  { href: "/about", label: "Foundation" },
];

export function StudioHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "ms-nav ms-nav--on" : "ms-nav"} data-ui="studio-v3">
      <Link href="/" className="ms-nav__brand">
        <Image src="/brand/srf-logo.png" alt="SRF" width={120} height={86} priority />
        <span>
          SRF
          <small>Hyderabad</small>
        </span>
      </Link>
      <nav>
        {links.map((item) => (
          <Link key={item.href} href={item.href} data-on={pathname === item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="ms-pill" href="/register">
        Register <ArrowUpRight size={16} />
      </Link>
      <button className="ms-burger" type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu">
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <div className="ms-drawer">
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/register" onClick={() => setOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </header>
  );
}

export function StudioFooter() {
  return (
    <footer className="ms-foot">
      <p className="ms-foot__giant">SRF</p>
      <div className="ms-foot__row">
        <div>
          <p>Srinivasa Ramanujan Foundation</p>
          <p>Quthbullapur, Hyderabad 500029</p>
        </div>
        <div className="ms-foot__links">
          <Link href="/olympiads">Olympiads</Link>
          <Link href="/register">Register</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/student-login">Student</Link>
          <Link href="/school">School</Link>
        </div>
      </div>
      <div className="ms-foot__legal">
        <span>© {new Date().getFullYear()} SRF · Duplicate OMR like TSPSC</span>
        <a href="tel:9948481729">9948481729</a>
      </div>
    </footer>
  );
}
