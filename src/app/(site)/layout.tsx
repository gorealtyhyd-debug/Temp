import { StudioFooter, StudioHeader } from "@/components/public/studio-chrome";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StudioHeader />
      <div className="ms-frame">{children}</div>
      <StudioFooter />
    </>
  );
}
