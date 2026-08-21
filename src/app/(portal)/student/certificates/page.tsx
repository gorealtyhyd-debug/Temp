import { EmptyState } from "@/components/ui/page";

export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Certificates</h1>
      <p className="mt-2 text-srf-muted">Download issued digital certificates.</p>
      <div className="mt-8">
        <EmptyState title="Certificates" description="Connected to SQL Server + Prisma once authentication and records are live. Demo shell ready for integration." />
      </div>
    </div>
  );
}
