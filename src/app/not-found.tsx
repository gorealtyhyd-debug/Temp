import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page not found | SRF",
  description: "The requested SRF page could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">404</p>
      <h1 className="mt-4 font-display text-5xl text-white">Page not found</h1>
      <p className="mt-4 text-srf-muted">
        The page you are looking for may have moved, or the link may be incorrect.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className={buttonVariants()}>
          Back to home
        </Link>
        <Link href="/olympiads" className={buttonVariants({ variant: "outline" })}>
          Explore Olympiads
        </Link>
      </div>
    </div>
  );
}
