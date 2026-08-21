import { PremiumFooter, PremiumHeader } from "@/components/public/premium-chrome";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PremiumHeader />
      <div className="srf-frame">{children}</div>
      <PremiumFooter />
    </>
  );
}
