import { EmptyState } from "@/components/ui/page";

export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Payments</h1>
      <p className="mt-2 text-srf-muted">Gateway-verified payment history and receipts.</p>
      <div className="mt-8">
        <EmptyState title="Payments" description="Connected to PostgreSQL + Prisma once authentication and records are live. Demo shell ready for integration." />
      </div>
    </div>
  );
}
