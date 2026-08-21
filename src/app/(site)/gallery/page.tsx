import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | SRF Olympiads",
  description:
    "Browse SRF Olympiad event photographs, award ceremonies and examination highlights from Srinivasa Ramanujan Foundation.",
  path: "/gallery",
});

const images = [
  { src: "/images/gallery/event-1.jpg", alt: "SRF Olympiad award ceremony" },
  { src: "/images/gallery/event-2.jpg", alt: "Students receiving recognition" },
  { src: "/images/gallery/event-3.jpg", alt: "Academic excellence celebration" },
  { src: "/images/gallery/event-4.jpg", alt: "Olympiad participants and guests" },
  { src: "/images/gallery/event-5.jpg", alt: "Examination programme moments" },
  { src: "/images/gallery/event-6.jpg", alt: "SRF event documentation" },
  { src: "/images/gallery/about.jpg", alt: "About Srinivasa Ramanujan Foundation" },
  { src: "/images/hero/slide-1.jpg", alt: "SRF programme highlight" },
  { src: "/images/hero/slide-2.jpg", alt: "SRF campus and event imagery" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="SRF moments of excellence"
        description="Official photographs from Srinivasa Ramanujan Foundation programmes and Olympiad events."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Gallery" }]} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure key={image.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl gold-frame">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/register" className={buttonVariants()}>
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
}
