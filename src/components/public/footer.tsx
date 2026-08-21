import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Olympiads",
    links: [
      { href: "/olympiads/srmo", label: "SRMO Mathematics" },
      { href: "/olympiads/cvrso", label: "CVRSO Science" },
      { href: "/olympiads/state-english-olympiad", label: "State English Olympiad" },
      { href: "/olympiads/abdul-kalam-olympiad", label: "Abdul Kalam Olympiad" },
      { href: "/olympiads/nsrmo", label: "NSRMO National" },
      { href: "/olympiads/state-cyber-olympiad", label: "State Cyber Olympiad" },
    ],
  },
  {
    title: "Students",
    links: [
      { href: "/register", label: "Register for Olympiad" },
      { href: "/student-login", label: "Student Login" },
      { href: "/registration-status", label: "Registration Status" },
      { href: "/results", label: "Check Results" },
      { href: "/verify-hall-ticket", label: "Verify Hall Ticket" },
      { href: "/verify-certificate", label: "Verify Certificate" },
    ],
  },
  {
    title: "Schools",
    links: [
      { href: "/school-registration", label: "School Registration" },
      { href: "/coordinator-registration", label: "Coordinator Registration" },
      { href: "/exam-centres", label: "Exam Centres" },
      { href: "/downloads", label: "Downloads" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { href: "/about", label: "About SRF" },
      { href: "/awards", label: "Awards" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-srf-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/srf-logo.svg"
                alt="Srinivasa Ramanujan Foundation logo"
                width={220}
                height={96}
                className="h-auto w-52 rounded-md bg-white p-2"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.legalName}, Hyderabad — a premium national-level Olympiad and examination
              platform for students, parents and schools.
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/70">
              <p>{siteConfig.address.line1}</p>
              <p>
                {siteConfig.address.line2}, {siteConfig.address.city}
              </p>
              <p>
                {siteConfig.address.state} {siteConfig.address.pincode}
              </p>
              <p className="pt-2">
                <a className="hover:text-srf-gold" href={`tel:${siteConfig.phone[0]}`}>
                  {siteConfig.phone[0]}
                </a>
              </p>
              <p>
                <a className="hover:text-srf-gold" href={`mailto:${siteConfig.email[0]}`}>
                  {siteConfig.email[0]}
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-srf-gold">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/75 transition hover:text-srf-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-srf-gold/30 pt-6 text-sm text-srf-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
