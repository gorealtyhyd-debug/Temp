import { z } from "zod";

export const studentDetailsSchema = z.object({
  fullName: z.string().min(2, "Enter the student full name"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"]),
  classLevel: z.string().min(1, "Select class"),
  section: z.string().optional(),
  academicYear: z.string().min(1),
  studentMobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  parentName: z.string().min(2, "Enter parent/guardian name"),
  parentMobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid parent mobile"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
});

export const schoolDetailsSchema = z.object({
  registrationType: z.enum(["INDIVIDUAL", "SCHOOL"]),
  schoolName: z.string().min(2, "School name is required"),
  schoolCode: z.string().optional(),
  schoolAddress: z.string().min(5, "School address is required"),
  villageCity: z.string().min(2),
  mandal: z.string().optional(),
  district: z.string().min(2),
  state: z.string().min(2),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
});

export const olympiadSelectionSchema = z.object({
  olympiadSlugs: z.array(z.string()).min(1, "Select at least one Olympiad"),
});

export type StudentDetailsInput = z.infer<typeof studentDetailsSchema>;
export type SchoolDetailsInput = z.infer<typeof schoolDetailsSchema>;
