import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui/page";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | SRF Olympiads",
  description:
    "Browse premium academic, campus and ceremony imagery representing Srinivasa Ramanujan Foundation Olympiad programmes.",
  path: "/gallery",
});

const images = [
  { src: "/images/stock/students-1.jpg", alt: "Students collaborating on campus" },
  { src: "/images/stock/award.jpg", alt: "Academic award celebration" },
  { src: "/images/stock/study.jpg", alt: "Focused exam preparation" },
  { src: "/images/stock/classroom.jpg", alt: "Classroom learning environment" },
  { src: "/images/stock/graduation.jpg", alt: "Graduation and achievement moment" },
  { src: "/images/stock/team.jpg", alt: "Students working together" },
  { src: "/images/hero/library.jpg", alt: "Library study atmosphere" },
  { src: "/images/gallery/event-1.jpg", alt: "SRF event archive photograph" },
  { src: "/images/gallery/event-2.jpg", alt: "SRF recognition ceremony" },
  { src: "/images/stock/trophy.jpg", alt: "Trophy and excellence symbolism" },
  { src: "/images/stock/books.jpg", alt: "Academic books and learning materials" },
  { src: "/images/hero/campus.jpg", alt: "Campus architecture and student life" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A premium visual story of academic excellence"
        description="Original academic photography combined with official SRF event archives."
      />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Gallery" }]} />
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div className={index % 3 === 0 ? "relative aspect-[3/4]" : "relative aspect-[4/3]"}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-sm text-white">
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
