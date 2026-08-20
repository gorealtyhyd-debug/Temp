import { DashboardCard } from "@/components/ui/page";

export default function SchoolDashboardPage() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">School dashboard</h1>
      <p className="mt-2 text-srf-muted">Manage bulk registrations, payments and hall tickets for your school.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard label="Registered students" value="128" />
        <DashboardCard label="Pending payments" value="12" />
        <DashboardCard label="Hall tickets" value="96" />
        <DashboardCard label="Results published" value="54" />
      </div>
    </div>
  );
}
