import type { Metadata } from "next";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { Input, Label } from "@/components/ui/form-controls";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Check SRF Olympiad Results",
  description: "Search SRF Olympiad results using registration number or hall ticket number. Only published results are visible.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <PageHero eyebrow="Results" title="Check your results" description="Search published results. Unpublished results remain private until released by SRF admin." />
      <div className="mx-auto max-w-xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} />
        <form className="mt-8 space-y-4 rounded-xl border border-srf-soft-gray bg-white p-6">
          <div>
            <Label htmlFor="reg">Registration number</Label>
            <Input id="reg" name="registrationNumber" placeholder="SRF26-000001" />
          </div>
          <div>
            <Label htmlFor="ht">Hall ticket number</Label>
            <Input id="ht" name="hallTicketNumber" placeholder="HT-SRMO-000001" />
          </div>
          <Button type="submit" className="w-full">Search results</Button>
        </form>
        <div className="mt-8 rounded-xl border border-srf-soft-gray bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-srf-muted">Sample published result</p>
          <h2 className="mt-3 font-display text-3xl text-srf-black">Aarav Reddy</h2>
          <p className="mt-1 text-sm text-srf-muted">SRMO · Class 8 · Hyderabad Public School</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-srf-muted">Score</p>
              <p className="font-display text-3xl text-srf-black">46</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-srf-muted">Total</p>
              <p className="font-display text-3xl text-srf-black">50</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-srf-muted">Rank</p>
              <p className="inline-flex rounded-md bg-srf-gold px-3 py-1 font-display text-2xl text-srf-black">01</p>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="black">Download result</Button>
            <Button>Download certificate</Button>
          </div>
        </div>
      </div>
    </>
  );
}
