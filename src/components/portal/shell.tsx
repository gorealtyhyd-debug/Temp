import Link from "next/link";
import { cn } from "@/lib/utils";

const studentLinks = [
  { href: "/student", label: "Dashboard" },
  { href: "/student/registrations", label: "Registrations" },
  { href: "/student/payments", label: "Payments" },
  { href: "/student/hall-tickets", label: "Hall Tickets" },
  { href: "/student/results", label: "Results" },
  { href: "/student/certificates", label: "Certificates" },
  { href: "/student/notifications", label: "Notifications" },
  { href: "/student/profile", label: "Profile" },
];

const schoolLinks = [
  { href: "/school", label: "Dashboard" },
  { href: "/school/students", label: "Students" },
  { href: "/school/registrations", label: "Registrations" },
  { href: "/school/payments", label: "Payments" },
  { href: "/school/hall-tickets", label: "Hall Tickets" },
  { href: "/school/results", label: "Results" },
  { href: "/school/profile", label: "Profile" },
];

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/olympiads", label: "Olympiads" },
  { href: "/admin/students", label: "Students" },
  { href: "/admin/schools", label: "Schools" },
  { href: "/admin/registrations", label: "Registrations" },
  { href: "/admin/payments", label: "Payments" },
  { href: "/admin/hall-tickets", label: "Hall Tickets" },
  { href: "/admin/results", label: "Results" },
  { href: "/admin/certificates", label: "Certificates" },
  { href: "/admin/announcements", label: "Announcements" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/downloads", label: "Downloads" },
  { href: "/admin/awards", label: "Awards" },
  { href: "/admin/faqs", label: "FAQs" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/seo", label: "SEO" },
  { href: "/admin/settings", label: "Settings" },
];

export function PortalShell({
  title,
  links,
  children,
}: {
  title: string;
  links: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-srf-off-white lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="bg-srf-black text-white">
        <div className="border-b border-white/10 px-5 py-5">
          <Link href="/" className="font-display text-2xl text-srf-gold">
            SRF
          </Link>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{title}</p>
        </div>
        <nav className="space-y-1 p-3" aria-label={`${title} navigation`}>
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm transition",
                index === 0
                  ? "border-l-2 border-srf-gold bg-srf-gold/15 text-srf-gold"
                  : "text-white/80 hover:bg-white/5 hover:text-srf-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="px-4 py-8 md:px-8">{children}</div>
    </div>
  );
}

export function StudentShell({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell title="Student Portal" links={studentLinks}>
      {children}
    </PortalShell>
  );
}

export function SchoolShell({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell title="School Portal" links={schoolLinks}>
      {children}
    </PortalShell>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell title="Admin Console" links={adminLinks}>
      {children}
    </PortalShell>
  );
}
