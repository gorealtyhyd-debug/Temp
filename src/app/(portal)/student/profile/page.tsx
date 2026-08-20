import { EmptyState } from "@/components/ui/page";

export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Profile</h1>
      <p className="mt-2 text-srf-muted">Personal, parent, school and academic details.</p>
      <div className="mt-8">
        <EmptyState title="Profile" description="Connected to PostgreSQL + Prisma once authentication and records are live. Demo shell ready for integration." />
      </div>
    </div>
  );
}
