import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { OlympiadRecord } from "@/lib/content/olympiads";
import { cn, formatDate, formatInrFromPaise } from "@/lib/utils";

type OlympiadCardProps = {
  olympiad: OlympiadRecord;
  selectable?: boolean;
  selected?: boolean;
  onToggle?: () => void;
};

export function OlympiadCard({ olympiad, selectable, selected, onToggle }: OlympiadCardProps) {
  const content = (
    <>
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-srf-gold">{olympiad.code}</p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-srf-black">{olympiad.shortName}</h3>
        </div>
        <span className="rounded-md border border-srf-soft-gray px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-srf-muted">
          {olympiad.status === "PUBLISHED" ? "Open" : olympiad.status}
        </span>
      </div>
      <div className="mb-4 h-px w-12 bg-srf-gold" />
      <p className="text-sm leading-relaxed text-srf-muted">{olympiad.tagline}</p>
      <dl className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-srf-muted">Eligible</dt>
          <dd className="text-right font-medium text-srf-charcoal">{olympiad.eligibleClasses}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-srf-muted">Level-1</dt>
          <dd className="font-medium text-srf-charcoal">{formatDate(olympiad.level1Date)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-srf-muted">Deadline</dt>
          <dd className="font-medium text-srf-charcoal">{formatDate(olympiad.registrationDeadline)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-srf-soft-gray pt-3">
          <dt className="text-srf-muted">Fee</dt>
          <dd className="font-display text-xl text-srf-gold">{formatInrFromPaise(olympiad.feePaise)}</dd>
        </div>
      </dl>
      {!selectable && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-srf-black">
          View details <ArrowRight className="h-4 w-4 text-srf-gold" />
        </span>
      )}
    </>
  );

  const className = cn(
    "group block rounded-xl border bg-white p-6 shadow-[0_10px_30px_rgba(18,18,18,0.04)] transition duration-300",
    selected
      ? "border-srf-gold shadow-[0_16px_40px_rgba(201,162,39,0.18)] -translate-y-1"
      : "border-srf-soft-gray hover:-translate-y-1 hover:border-srf-gold hover:shadow-[0_16px_40px_rgba(201,162,39,0.12)]",
  );

  if (selectable) {
    return (
      <button type="button" onClick={onToggle} className={cn(className, "w-full text-left")}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-srf-muted">
            {selected ? "Selected" : "Select"}
          </span>
          <span
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-full border",
              selected ? "border-srf-gold bg-srf-gold text-srf-black" : "border-srf-soft-gray",
            )}
            aria-hidden
          >
            {selected ? "✓" : ""}
          </span>
        </div>
        {content}
      </button>
    );
  }

  return (
    <Link href={`/olympiads/${olympiad.slug}`} className={className}>
      {content}
    </Link>
  );
}
