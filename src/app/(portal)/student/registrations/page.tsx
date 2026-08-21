import { EmptyState } from "@/components/ui/page";

export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Registrations</h1>
      <p className="mt-2 text-srf-muted">All Olympiad registrations linked to this student account.</p>
      <div className="mt-8">
        <EmptyState title="Registrations" description="Connected to SQL Server + Prisma once authentication and records are live. Demo shell ready for integration." />
      </div>
    </div>
  );
}
