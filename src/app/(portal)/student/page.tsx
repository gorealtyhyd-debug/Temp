import Link from "next/link";
import { DashboardCard } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";

export default function StudentDashboardPage() {
  return (
    <div>
      <h1 className="font-display text-4xl text-srf-black">Student dashboard</h1>
      <p className="mt-2 text-srf-muted">Track registrations, payments, hall tickets and results in one place.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard label="My registrations" value="03" hint="Confirmed Olympiads" />
        <DashboardCard label="Upcoming exams" value="02" hint="Next: 04 Nov 2026" />
        <DashboardCard label="Hall tickets" value="01" hint="Published" />
        <DashboardCard label="Results" value="02" hint="Certificates available" />
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/student/hall-tickets" className={buttonVariants()}>View hall tickets</Link>
        <Link href="/student/results" className={buttonVariants({ variant: "outline" })}>Check results</Link>
        <Link href="/register" className={buttonVariants({ variant: "black" })}>Register another Olympiad</Link>
      </div>
    </div>
  );
}
