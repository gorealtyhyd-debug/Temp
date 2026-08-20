import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Student portal login | SRF",
  description: "Login to the SRF student portal using secure mobile OTP authentication to access registrations, hall tickets and results.",
  path: "/student-login",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Student Login" title="Student portal login" description={"Login to the SRF student portal using secure mobile OTP authentication to access registrations, hall tickets and results."} />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Student portal login" }]} />
        <article className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 leading-relaxed text-srf-charcoal md:p-8">
          <div className="mb-6 h-px w-16 bg-srf-gold" />
          <p>Preferred student authentication is Mobile Number + OTP with rate limiting and expiry. Demo login routes to the student dashboard shell.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/student" className={buttonVariants()}>Enter student portal</Link>
            <Link href="/register" className={buttonVariants({ variant: "outline" })}>Register Now</Link>
          </div>
        </article>
      </div>
    </>
  );
}
