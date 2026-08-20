import { EmptyState } from "@/components/ui/page";
export default function Page() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Profile</h1>
      <div className="mt-8"><EmptyState title="Profile" description="School portal module ready for Prisma-backed workflows including CSV/Excel bulk upload." /></div>
    </div>
  );
}
