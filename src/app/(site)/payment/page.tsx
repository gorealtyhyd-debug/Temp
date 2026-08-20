import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { formatInrFromPaise } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Secure Payment | SRF Olympiads",
  description: "Complete your SRF Olympiad registration with gateway-verified secure payment.",
  path: "/payment",
  noIndex: true,
});

type Props = { searchParams: Promise<{ amount?: string; name?: string }> };

export default async function PaymentPage({ searchParams }: Props) {
  const params = await searchParams;
  const amount = Number(params.amount || 12000);
  const name = params.name || "Student";

  return (
    <>
      <PageHero
        eyebrow="Secure checkout"
        title="Complete payment"
        description="Payment success is confirmed only after server-side gateway verification."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Register", href: "/register" },
            { name: "Payment" },
          ]}
        />
        <div className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-srf-muted">Payment summary</p>
          <div className="mt-3 h-px w-16 bg-srf-gold" />
          <p className="mt-4 text-sm text-srf-muted">Student</p>
          <p className="font-semibold text-srf-black">{name}</p>
          <p className="mt-6 text-sm text-srf-muted">Total payable</p>
          <p className="font-display text-5xl text-srf-black">{formatInrFromPaise(amount)}</p>
          <p className="mt-4 text-sm leading-relaxed text-srf-muted">
            In production this page opens the configured Indian payment gateway (UPI / cards / net
            banking). Merchant settlement including organizational UPI is configured in the gateway
            dashboard. Demo mode simulates order creation without confirming success client-side.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/payment/success?amount=${amount}&name=${encodeURIComponent(name)}`}
              className={buttonVariants({ size: "lg" })}
            >
              Continue demo payment
            </Link>
            <Link href="/register" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Back to registration
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
