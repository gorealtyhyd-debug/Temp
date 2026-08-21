/**
 * SQL Server does not support Prisma enums. These string unions are the
 * canonical values stored in NVARCHAR columns.
 */

export const Role = {
  STUDENT: "STUDENT",
  PARENT: "PARENT",
  SCHOOL: "SCHOOL",
  COORDINATOR: "COORDINATOR",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
  OTHER: "OTHER",
} as const;
export type Gender = (typeof Gender)[keyof typeof Gender];

export const RegistrationType = {
  INDIVIDUAL: "INDIVIDUAL",
  SCHOOL: "SCHOOL",
} as const;
export type RegistrationType = (typeof RegistrationType)[keyof typeof RegistrationType];

export const RegistrationStatus = {
  DRAFT: "DRAFT",
  PENDING_PAYMENT: "PENDING_PAYMENT",
  CONFIRMED: "CONFIRMED",
  CANCELLED: "CANCELLED",
} as const;
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

export const PaymentStatus = {
  CREATED: "CREATED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  CANCELLED: "CANCELLED",
  REFUNDED: "REFUNDED",
} as const;
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

export const OlympiadStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  CLOSED: "CLOSED",
  ARCHIVED: "ARCHIVED",
} as const;
export type OlympiadStatus = (typeof OlympiadStatus)[keyof typeof OlympiadStatus];

export const PublishStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  UNPUBLISHED: "UNPUBLISHED",
} as const;
export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus];
