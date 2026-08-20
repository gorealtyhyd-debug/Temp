import { AnnouncementBar, Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
