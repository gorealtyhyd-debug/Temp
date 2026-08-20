export const siteConfig = {
  name: "Srinivasa Ramanujan Foundation",
  shortName: "SRF",
  legalName: "Srinivasa Ramanujan Foundation",
  tagline: "Official Olympiad Platform",
  description:
    "Register for SRF Olympiads including SRMO, CVRSO, SEO, AKO, NSRMO and more. Premium national-level Olympiad registration, hall tickets, results and certificates.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.srmoe.com",
  legacyUrl: "https://www.srmoe.com",
  locale: "en_IN",
  phone: ["9948481729", "9908313951", "9704766583"],
  email: ["srmoe1729@gmail.com", "srf1729@gmail.com"],
  whatsapp: "9908313951",
  address: {
    line1: "#4-21/53, Dasari Sunita Reddy Towers",
    line2: "Near Venu Gopala Swamy Temple, Quthbullapur",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500029",
    country: "India",
  },
  academicYear: "2026-27",
  feePaise: 15000,
  feeNote:
    "Examination fee ₹150 for each Olympiad (Level I & II). ₹30 may be deducted per application towards examination expenditure (₹150 − ₹30 = ₹120).",
  registrationDeadlineLabel: "29 September 2026",
  level2DateLabel: "Sunday, 6 December 2026",
  announcement:
    "SRF OLYMPIADS 2026–27 REGISTRATIONS ARE NOW OPEN · Level-1 exams in November 2026",
} as const;

export type SiteConfig = typeof siteConfig;
