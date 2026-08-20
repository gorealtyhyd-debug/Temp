import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page";
import { buildMetadata } from "@/lib/seo";
import { formatInrFromPaise } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Registration Successful | SRF",
  description: "Your SRF Olympiad registration payment has been verified.",
  path: "/payment/success",
  noIndex: true,
});

type Props = { searchParams: Promise<{ amount?: string; name?: string }> };

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const params = await searchParams;
  const amount = Number(params.amount || 12000);
  const name = params.name || "Student";
  const registrationNumber = "SRF26-000001";

  return (
    <>
      <PageHero eyebrow="Confirmed" title="Registration successful" />
      <div className="mx-auto max-w-3xl px-4 py-12 text-center md:px-6">
        <CheckCircle2 className="mx-auto h-16 w-16 text-srf-success" aria-hidden />
        <h2 className="mt-6 font-display text-4xl text-srf-black">Registration Successful</h2>
        <p className="mt-3 text-srf-muted">
          {name} · Amount paid {formatInrFromPaise(amount)}
        </p>
        <div className="mx-auto mt-8 max-w-md rounded-xl border border-srf-gold bg-srf-off-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-srf-gold">
            Registration number
          </p>
          <p className="mt-3 font-display text-3xl text-srf-black">{registrationNumber}</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/student" className={buttonVariants({ size: "lg" })}>
            Go to dashboard
          </Link>
          <Link href="/student/hall-tickets" className={buttonVariants({ variant: "black", size: "lg" })}>
            Hall ticket
          </Link>
          <button type="button" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Download receipt
          </button>
        </div>
        <p className="mt-6 text-sm text-srf-muted">
          Hall ticket download activates only after SRF publishes hall tickets for your exam.
        </p>
      </div>
    </>
  );
}
