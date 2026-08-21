import "dotenv/config";
import { PrismaMssql } from "@prisma/adapter-mssql";
import { PrismaClient } from "../src/generated/prisma/client";
import { olympiads } from "../src/lib/content/olympiads";

const adapter = new PrismaMssql(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const [index, item] of olympiads.entries()) {
    await prisma.olympiad.upsert({
      where: { slug: item.slug },
      update: {
        code: item.code,
        name: item.name,
        shortName: item.shortName,
        tagline: item.tagline,
        description: item.description,
        eligibleClasses: item.eligibleClasses,
        examPattern: item.examPattern,
        level1Date: new Date(item.level1Date),
        level2Date: new Date(item.level2Date),
        registrationDeadline: new Date(item.registrationDeadline),
        feePaise: item.feePaise,
        discountPaise: item.discountPaise,
        status: item.status,
        seoTitle: item.seoTitle,
        seoDescription: item.seoDescription,
        sortOrder: index,
      },
      create: {
        slug: item.slug,
        code: item.code,
        name: item.name,
        shortName: item.shortName,
        tagline: item.tagline,
        description: item.description,
        eligibleClasses: item.eligibleClasses,
        examPattern: item.examPattern,
        level1Date: new Date(item.level1Date),
        level2Date: new Date(item.level2Date),
        registrationDeadline: new Date(item.registrationDeadline),
        feePaise: item.feePaise,
        discountPaise: item.discountPaise,
        status: item.status,
        seoTitle: item.seoTitle,
        seoDescription: item.seoDescription,
        sortOrder: index,
      },
    });
  }

  console.log(`Seeded ${olympiads.length} olympiads`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
