import { EmptyState } from "@/components/ui/page";

export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Results</h1>
      <p className="mt-2 text-srf-muted">Published marks, ranks and qualification status.</p>
      <div className="mt-8">
        <EmptyState title="Results" description="Connected to SQL Server + Prisma once authentication and records are live. Demo shell ready for integration." />
      </div>
    </div>
  );
}
