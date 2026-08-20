import { DashboardCard } from "@/components/ui/page";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Admin dashboard</h1>
      <p className="mt-2 text-srf-muted">Enterprise operations console for SRF Olympiads.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard label="Total registrations" value="12,480" />
        <DashboardCard label="Today" value="186" />
        <DashboardCard label="Successful payments" value="11,902" />
        <DashboardCard label="Revenue" value="₹14.2L" />
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-srf-soft-gray bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-srf-gold">Registrations by Olympiad</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {[['SRMO','32%'],['CVRSO','21%'],['SEO','15%'],['AKO','14%'],['NSRMO','10%'],['SCO','8%']].map(([name, pct]) => (
              <li key={name} className="flex items-center justify-between">
                <span>{name}</span>
                <span className="font-semibold text-srf-gold">{pct}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-srf-soft-gray bg-white p-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-srf-gold">Payment health</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex justify-between"><span>Success</span><span className="text-srf-success">95.4%</span></li>
            <li className="flex justify-between"><span>Pending</span><span className="text-srf-gold">2.1%</span></li>
            <li className="flex justify-between"><span>Failed</span><span className="text-srf-error">2.5%</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
