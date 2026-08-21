import Link from "next/link";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-srf-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-srf-gold">
                  {item.name}
                </Link>
              ) : (
                <span className={cn(isLast && "text-srf-gold")}>{item.name}</span>
              )}
              {!isLast && <span aria-hidden className="text-srf-soft-gray">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-white/10 bg-[#052659]/70">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-srf-gold">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-white md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-[#c1e8ff]">{description}</p>}
      </div>
    </div>
  );
}

export function DashboardCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#052659]/70 p-5 shadow-[0_18px_40px_rgba(2,16,36,0.35)]">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7da0ca]">{label}</p>
      <p className="mt-3 font-display text-4xl text-srf-gold">{value}</p>
      {hint && <p className="mt-2 text-sm text-[#c1e8ff]">{hint}</p>}
    </article>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#5483b3]/50 bg-[#052659]/50 px-6 py-12 text-center">
      <h2 className="font-display text-2xl text-white">{title}</h2>
      <p className="mt-2 text-sm text-[#7da0ca]">{description}</p>
    </div>
  );
}
