import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { OlympiadRecord } from "@/lib/content/olympiads";
import { cn, formatDate, formatInrFromPaise } from "@/lib/utils";
import { Badge, Card, CardContent } from "@/components/ui/card";

type OlympiadCardProps = {
  olympiad: OlympiadRecord;
  selectable?: boolean;
  selected?: boolean;
  onToggle?: () => void;
};

export function OlympiadCard({ olympiad, selectable, selected, onToggle }: OlympiadCardProps) {
  const body = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-srf-black">
        <Image
          src={olympiad.image}
          alt={`${olympiad.name} emblem`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-srf-black/70 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge variant="dark">{olympiad.code}</Badge>
          <Badge variant="gold">{olympiad.status === "PUBLISHED" ? "Open" : olympiad.status}</Badge>
        </div>
      </div>

      <CardContent className="relative">
        <div className="mb-3 h-px w-12 bg-srf-gold" />
        <h3 className="font-display text-2xl leading-tight text-srf-black">{olympiad.shortName}</h3>
        <p className="mt-2 text-sm leading-relaxed text-srf-muted">{olympiad.tagline}</p>

        <dl className="mt-5 space-y-2.5 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-srf-muted">Eligible</dt>
            <dd className="max-w-[60%] text-right font-medium text-srf-ink">{olympiad.eligibleClasses}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-srf-muted">Level-1</dt>
            <dd className="font-medium text-srf-ink">{formatDate(olympiad.level1Date)}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-srf-muted">Deadline</dt>
            <dd className="font-medium text-srf-ink">{formatDate(olympiad.registrationDeadline)}</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-srf-soft-gray pt-3">
            <dt className="text-srf-muted">Fee</dt>
            <dd className="font-display text-2xl text-srf-gold">{formatInrFromPaise(olympiad.feePaise)}</dd>
          </div>
        </dl>

        {!selectable && (
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-srf-black">
            View details <ArrowUpRight className="h-4 w-4 text-srf-gold" />
          </span>
        )}

        {selectable && (
          <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em]">
            <span className="text-srf-muted">{selected ? "Selected" : "Tap to select"}</span>
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border",
                selected ? "border-srf-gold bg-srf-gold text-srf-black" : "border-srf-soft-gray",
              )}
            >
              {selected ? "✓" : ""}
            </span>
          </div>
        )}
      </CardContent>
    </>
  );

  const className = cn(
    "group block overflow-hidden p-0",
    selected && "border-srf-gold shadow-[0_18px_40px_rgba(201,162,39,0.2)]",
  );

  if (selectable) {
    return (
      <button type="button" onClick={onToggle} className="w-full text-left">
        <Card className={className}>{body}</Card>
      </button>
    );
  }

  return (
    <Link href={`/olympiads/${olympiad.slug}`}>
      <Card className={className}>{body}</Card>
    </Link>
  );
}
