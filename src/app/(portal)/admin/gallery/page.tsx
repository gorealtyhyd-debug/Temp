import { EmptyState } from "@/components/ui/page";
export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Gallery</h1>
      <p className="mt-2 text-srf-muted">Admin module scaffold — wire to Prisma models, RBAC and audit logs.</p>
      <div className="mt-8"><EmptyState title="Gallery" description="Create, edit, publish and export records securely from this console." /></div>
    </div>
  );
}
