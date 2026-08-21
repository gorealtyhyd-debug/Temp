import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { OlympiadRecord } from "@/lib/content/olympiads";
import { cn, formatDate, formatInrFromPaise } from "@/lib/utils";
import { Badge } from "@/components/ui/card";

type OlympiadCardProps = {
  olympiad: OlympiadRecord;
  selectable?: boolean;
  selected?: boolean;
  onToggle?: () => void;
  cover?: string;
};

export function OlympiadCard({
  olympiad,
  selectable,
  selected,
  onToggle,
  cover,
}: OlympiadCardProps) {
  const image = cover || olympiad.image;

  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={`${olympiad.name} visual`}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge variant="dark">{olympiad.code}</Badge>
          <Badge variant="gold">Open</Badge>
        </div>
        <p className="absolute bottom-4 left-4 right-4 font-display text-2xl text-white">
          {olympiad.shortName}
        </p>
      </div>

      <div className="relative space-y-4 p-5">
        <p className="text-sm leading-relaxed text-srf-muted">{olympiad.tagline}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-srf-beige px-3 py-2">
            <p className="text-[11px] uppercase tracking-wider text-srf-muted">Level-1</p>
            <p className="mt-1 font-semibold text-srf-ink">{formatDate(olympiad.level1Date)}</p>
          </div>
          <div className="rounded-xl bg-srf-beige px-3 py-2">
            <p className="text-[11px] uppercase tracking-wider text-srf-muted">Fee</p>
            <p className="mt-1 font-display text-xl text-srf-gold">{formatInrFromPaise(olympiad.feePaise)}</p>
          </div>
        </div>
        {!selectable ? (
          <span className="inline-flex items-center gap-2 text-sm font-bold text-srf-black">
            View details <ArrowRight className="h-4 w-4 text-srf-gold" />
          </span>
        ) : (
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em]">
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
      </div>
    </>
  );

  const className = cn("premium-card group block overflow-hidden p-0", selected && "border-srf-gold");

  if (selectable) {
    return (
      <button type="button" onClick={onToggle} className="w-full text-left">
        <article className={className}>{body}</article>
      </button>
    );
  }

  return (
    <Link href={`/olympiads/${olympiad.slug}`}>
      <article className={className}>{body}</article>
    </Link>
  );
}
