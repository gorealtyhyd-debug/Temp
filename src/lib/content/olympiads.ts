export type OlympiadRecord = {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  eligibleClasses: string;
  examPattern: string;
  level1Date: string;
  level2Date: string;
  registrationDeadline: string;
  feePaise: number;
  discountPaise: number;
  status: "PUBLISHED" | "CLOSED" | "DRAFT";
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
};

/**
 * Canonical Olympiad catalogue for 2026–27.
 * Sourced from the existing SRF website (srmoe.com) and intended to be
 * managed dynamically via Admin → Olympiads once PostgreSQL is connected.
 */
export const olympiads: OlympiadRecord[] = [
  {
    slug: "srmo",
    code: "SRMO",
    name: "Srinivasa Ramanujan Mathematics Olympiad",
    shortName: "SRMO",
    tagline: "Mathematics excellence for every class",
    description:
      "The flagship mathematics Olympiad of Srinivasa Ramanujan Foundation. Students solve a class-wise paper covering Mathematics and Reasoning across Level-1 and Level-2.",
    eligibleClasses: "Classes 1–10 (separate paper for each class)",
    examPattern: "50 Questions · 50 Marks · Maths 40 + Reasoning 10",
    level1Date: "2026-11-04",
    level2Date: "2026-12-06",
    registrationDeadline: "2026-09-29",
    feePaise: 15000,
    discountPaise: 3000,
    status: "PUBLISHED",
    seoTitle: "SRMO Olympiad | Srinivasa Ramanujan Mathematics Olympiad | SRF",
    seoDescription:
      "Register for the Srinivasa Ramanujan Mathematics Olympiad (SRMO) conducted by Srinivasa Ramanujan Foundation. Check eligibility, exam pattern, dates, fees and registration details.",
    highlights: ["Class-wise papers", "Duplicate OMR like TSPSC", "Level-1 at own school"],
  },
  {
    slug: "cvrso",
    code: "CVRSO",
    name: "C. V. Raman Science Olympiad",
    shortName: "CVRSO",
    tagline: "Science and general knowledge challenge",
    description:
      "A science-focused Olympiad honouring C. V. Raman. Students attempt Science and G.K. questions designed to strengthen conceptual understanding.",
    eligibleClasses: "Classes 1–10 (separate paper for each class)",
    examPattern: "50 Questions · 50 Marks · Science 30 + G.K. 20",
    level1Date: "2026-11-04",
    level2Date: "2026-12-06",
    registrationDeadline: "2026-09-29",
    feePaise: 15000,
    discountPaise: 3000,
    status: "PUBLISHED",
    seoTitle: "CVRSO | C. V. Raman Science Olympiad | SRF",
    seoDescription:
      "Register for the C. V. Raman Science Olympiad (CVRSO) by Srinivasa Ramanujan Foundation. View exam pattern, eligibility, important dates and online registration.",
    highlights: ["Science + G.K.", "Level-1 & Level-2", "National recognition"],
  },
  {
    slug: "state-english-olympiad",
    code: "SEO",
    name: "State English Olympiad",
    shortName: "SEO",
    tagline: "Language, communication and current affairs",
    description:
      "Build English proficiency through a structured Olympiad covering English language skills with G.K. and current affairs.",
    eligibleClasses: "Classes 1–10 (separate paper for each class)",
    examPattern: "50 Questions · 50 Marks · English 30 + G.K. & Current Affairs 20",
    level1Date: "2026-11-06",
    level2Date: "2026-12-06",
    registrationDeadline: "2026-09-29",
    feePaise: 15000,
    discountPaise: 3000,
    status: "PUBLISHED",
    seoTitle: "State English Olympiad (SEO) | SRF Olympiads",
    seoDescription:
      "Register for the State English Olympiad conducted by Srinivasa Ramanujan Foundation. Check syllabus pattern, exam dates and registration process.",
    highlights: ["English 30 marks", "Current affairs", "School-level centres"],
  },
  {
    slug: "abdul-kalam-olympiad",
    code: "AKO",
    name: "Abdul Kalam Olympiad",
    shortName: "AKO",
    tagline: "Multi-disciplinary academic challenge",
    description:
      "A balanced multi-subject Olympiad inspired by Dr. A. P. J. Abdul Kalam covering Maths, Science, English, G.K. and Reasoning.",
    eligibleClasses: "Classes 1–10 (separate paper for each class)",
    examPattern: "50 Questions · Maths 10 + Science 10 + English 10 + G.K. 10 + Reasoning 10",
    level1Date: "2026-11-05",
    level2Date: "2026-12-06",
    registrationDeadline: "2026-09-29",
    feePaise: 15000,
    discountPaise: 3000,
    status: "PUBLISHED",
    seoTitle: "Abdul Kalam Olympiad (AKO) | SRF",
    seoDescription:
      "Register for the Abdul Kalam Olympiad by Srinivasa Ramanujan Foundation. Multi-subject exam covering Maths, Science, English, G.K. and Reasoning.",
    highlights: ["Five subjects", "Holistic assessment", "Prestigious awards"],
  },
  {
    slug: "nsrmo",
    code: "NSRMO",
    name: "National Srinivasa Ramanujan Mathematics Olympiad",
    shortName: "NSRMO",
    tagline: "National mathematics competition",
    description:
      "The national edition of SRF’s mathematics Olympiad for students seeking broader recognition beyond the state-level SRMO.",
    eligibleClasses: "Classes 1–10 (separate paper for each class)",
    examPattern: "50 Questions · 50 Marks · Maths 40 + Reasoning 10",
    level1Date: "2026-11-06",
    level2Date: "2026-12-06",
    registrationDeadline: "2026-09-29",
    feePaise: 15000,
    discountPaise: 3000,
    status: "PUBLISHED",
    seoTitle: "NSRMO | National Srinivasa Ramanujan Mathematics Olympiad | SRF",
    seoDescription:
      "Register for the National Srinivasa Ramanujan Mathematics Olympiad (NSRMO). View eligibility, pattern, fees and online registration for 2026–27.",
    highlights: ["National scope", "Maths + Reasoning", "Certificate & ranks"],
  },
  {
    slug: "state-cyber-olympiad",
    code: "SCO",
    name: "State Cyber Olympiad",
    shortName: "SCO",
    tagline: "Computer literacy and logical reasoning",
    description:
      "A cyber and computer awareness Olympiad covering Computer fundamentals with Reasoning and Telugu components as conducted by SRF.",
    eligibleClasses: "Classes 1–10 (separate paper for each class)",
    examPattern: "50 Questions · 50 Marks · Computer 40 + Reasoning 10 (Telugu 10 as applicable)",
    level1Date: "2026-11-07",
    level2Date: "2026-12-06",
    registrationDeadline: "2026-09-29",
    feePaise: 15000,
    discountPaise: 3000,
    status: "PUBLISHED",
    seoTitle: "State Cyber Olympiad (SCO) | SRF Olympiads",
    seoDescription:
      "Register for the State Cyber Olympiad by Srinivasa Ramanujan Foundation. Computer awareness exam with reasoning for school students.",
    highlights: ["Computer fundamentals", "Reasoning skills", "Modern digital literacy"],
  },
];

export function getPublishedOlympiads() {
  return olympiads.filter((item) => item.status === "PUBLISHED");
}

export function getOlympiadBySlug(slug: string) {
  return olympiads.find((item) => item.slug === slug);
}

export const faqs = [
  {
    question: "When do SRF Olympiad 2026–27 registrations close?",
    answer:
      "Schools may send registration forms by 29 September 2026. Online registrations follow the published deadline on each Olympiad page.",
  },
  {
    question: "What is the examination fee?",
    answer:
      "The examination fee is ₹150 for each Olympiad covering Level I & II, irrespective of class. ₹30 may be deducted per application towards examination expenditure.",
  },
  {
    question: "Where is the Level-1 exam centre?",
    answer:
      "For Level-1, the centre of the Olympiads will be the student’s own school. Level-2 centres are finalised by SRF.",
  },
  {
    question: "Are there benefits for government schools?",
    answer:
      "Government schools may receive fee concessions as announced for the academic year (for example, no entrance fee for a limited number of members per school). Check the latest announcement for exact entitlements.",
  },
  {
    question: "Does SRF provide a duplicate OMR sheet?",
    answer:
      "Yes. SRF provides a duplicate OMR sheet for students, similar to TSPSC practice, supporting transparency during evaluation.",
  },
  {
    question: "How do I download my hall ticket?",
    answer:
      "After payment is verified and hall tickets are published by SRF, log in to the Student Portal and open Hall Tickets to view or download your PDF.",
  },
];

export const processSteps = [
  { title: "Explore Olympiads", detail: "Compare SRMO, CVRSO, SEO, AKO, NSRMO and SCO." },
  { title: "Register Online", detail: "Complete student, school and exam selection steps." },
  { title: "Pay Securely", detail: "Gateway-verified UPI and card payments with server confirmation." },
  { title: "Download Hall Ticket", detail: "Access published hall tickets from the student portal." },
  { title: "Check Results", detail: "View marks, ranks and download certificates when published." },
];

export const whySrf = [
  {
    title: "Institutional credibility",
    detail: "A Hyderabad-based foundation dedicated to nurturing mathematical and academic excellence.",
  },
  {
    title: "Class-wise examination",
    detail: "Separate papers for each class ensure fair, age-appropriate assessment.",
  },
  {
    title: "Transparent evaluation",
    detail: "Duplicate OMR practice and structured Level-1 / Level-2 pathways.",
  },
  {
    title: "End-to-end digital journey",
    detail: "Registration, payment, hall tickets, results and certificates in one platform.",
  },
];

export const toppers = [
  { studentName: "Aarav Reddy", olympiad: "SRMO", classLevel: "Class 8", school: "Hyderabad Public School", rank: 1, year: "2025" },
  { studentName: "Saanvi Sharma", olympiad: "CVRSO", classLevel: "Class 7", school: "Delhi Public School", rank: 1, year: "2025" },
  { studentName: "Vihaan Rao", olympiad: "AKO", classLevel: "Class 9", school: "Narayana School", rank: 1, year: "2025" },
  { studentName: "Ananya Iyer", olympiad: "SEO", classLevel: "Class 6", school: "Chirec International", rank: 1, year: "2025" },
];
