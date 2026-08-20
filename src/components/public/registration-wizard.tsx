"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input, Label, Select } from "@/components/ui/form-controls";
import { OlympiadCard } from "@/components/public/olympiad-card";
import { getPublishedOlympiads } from "@/lib/content/olympiads";
import { siteConfig } from "@/lib/site";
import { cn, formatInrFromPaise } from "@/lib/utils";
import {
  schoolDetailsSchema,
  studentDetailsSchema,
} from "@/schemas/registration";

const steps = [
  "Student Details",
  "School Details",
  "Select Olympiad",
  "Review",
  "Payment",
];

const classes = Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`);

export function RegistrationWizard() {
  const olympiads = getPublishedOlympiads();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [student, setStudent] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "MALE",
    classLevel: "Class 8",
    section: "",
    academicYear: siteConfig.academicYear,
    studentMobile: "",
    parentName: "",
    parentMobile: "",
    email: "",
  });
  const [school, setSchool] = useState({
    registrationType: "INDIVIDUAL",
    schoolName: "",
    schoolCode: "",
    schoolAddress: "",
    villageCity: "",
    mandal: "",
    district: "",
    state: "Telangana",
    pincode: "",
  });
  const [selected, setSelected] = useState<string[]>([]);

  const totals = useMemo(() => {
    const items = olympiads.filter((item) => selected.includes(item.slug));
    const subtotal = items.reduce((sum, item) => sum + item.feePaise, 0);
    const discount = items.reduce((sum, item) => sum + item.discountPaise, 0);
    return { items, subtotal, discount, total: Math.max(subtotal - discount, 0) };
  }, [olympiads, selected]);

  function validateCurrent() {
    setErrors({});
    if (step === 0) {
      const parsed = studentDetailsSchema.safeParse(student);
      if (!parsed.success) {
        const next: Record<string, string> = {};
        parsed.error.issues.forEach((issue) => {
          next[String(issue.path[0])] = issue.message;
        });
        setErrors(next);
        return false;
      }
    }
    if (step === 1) {
      const parsed = schoolDetailsSchema.safeParse(school);
      if (!parsed.success) {
        const next: Record<string, string> = {};
        parsed.error.issues.forEach((issue) => {
          next[String(issue.path[0])] = issue.message;
        });
        setErrors(next);
        return false;
      }
    }
    if (step === 2 && selected.length === 0) {
      setErrors({ olympiadSlugs: "Select at least one Olympiad" });
      return false;
    }
    if (step === 3 && !confirmed) {
      setErrors({ confirmed: "Please confirm the information is correct" });
      return false;
    }
    return true;
  }

  function next() {
    if (!validateCurrent()) return;
    setStep((value) => Math.min(value + 1, steps.length - 1));
  }

  function back() {
    setStep((value) => Math.max(value - 1, 0));
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[240px_1fr] md:px-6 lg:gap-12">
      <aside>
        <ol className="space-y-3">
          {steps.map((label, index) => {
            const active = index === step;
            const done = index < step;
            return (
              <li
                key={label}
                className={cn(
                  "rounded-lg border px-3 py-3 text-sm",
                  active || done
                    ? "border-srf-gold bg-srf-gold/10 text-srf-black"
                    : "border-srf-soft-gray text-srf-muted",
                )}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-srf-gold">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-semibold">{label}</span>
              </li>
            );
          })}
        </ol>
      </aside>

      <section className="rounded-xl border border-srf-soft-gray bg-white p-6 shadow-[0_10px_30px_rgba(18,18,18,0.04)] md:p-8">
        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Student full name" error={errors.fullName}>
              <Input
                value={student.fullName}
                onChange={(e) => setStudent({ ...student, fullName: e.target.value })}
              />
            </Field>
            <Field label="Date of birth" error={errors.dateOfBirth}>
              <Input
                type="date"
                value={student.dateOfBirth}
                onChange={(e) => setStudent({ ...student, dateOfBirth: e.target.value })}
              />
            </Field>
            <Field label="Gender" error={errors.gender}>
              <Select
                value={student.gender}
                onChange={(e) => setStudent({ ...student, gender: e.target.value })}
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </Select>
            </Field>
            <Field label="Class" error={errors.classLevel}>
              <Select
                value={student.classLevel}
                onChange={(e) => setStudent({ ...student, classLevel: e.target.value })}
              >
                {classes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </Select>
            </Field>
            <Field label="Section">
              <Input
                value={student.section}
                onChange={(e) => setStudent({ ...student, section: e.target.value })}
              />
            </Field>
            <Field label="Academic year">
              <Input value={student.academicYear} readOnly />
            </Field>
            <Field label="Student mobile" error={errors.studentMobile}>
              <Input
                inputMode="numeric"
                value={student.studentMobile}
                onChange={(e) => setStudent({ ...student, studentMobile: e.target.value })}
              />
            </Field>
            <Field label="Parent / guardian name" error={errors.parentName}>
              <Input
                value={student.parentName}
                onChange={(e) => setStudent({ ...student, parentName: e.target.value })}
              />
            </Field>
            <Field label="Parent mobile" error={errors.parentMobile}>
              <Input
                inputMode="numeric"
                value={student.parentMobile}
                onChange={(e) => setStudent({ ...student, parentMobile: e.target.value })}
              />
            </Field>
            <Field label="Email address" error={errors.email}>
              <Input
                type="email"
                value={student.email}
                onChange={(e) => setStudent({ ...student, email: e.target.value })}
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Registration type" error={errors.registrationType}>
              <Select
                value={school.registrationType}
                onChange={(e) => setSchool({ ...school, registrationType: e.target.value })}
              >
                <option value="INDIVIDUAL">Individual student</option>
                <option value="SCHOOL">School student</option>
              </Select>
            </Field>
            <Field label="School name" error={errors.schoolName}>
              <Input
                value={school.schoolName}
                onChange={(e) => setSchool({ ...school, schoolName: e.target.value })}
              />
            </Field>
            <Field label="School code">
              <Input
                value={school.schoolCode}
                onChange={(e) => setSchool({ ...school, schoolCode: e.target.value })}
              />
            </Field>
            <Field label="Village / city" error={errors.villageCity}>
              <Input
                value={school.villageCity}
                onChange={(e) => setSchool({ ...school, villageCity: e.target.value })}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="School address" error={errors.schoolAddress}>
                <Input
                  value={school.schoolAddress}
                  onChange={(e) => setSchool({ ...school, schoolAddress: e.target.value })}
                />
              </Field>
            </div>
            <Field label="Mandal">
              <Input
                value={school.mandal}
                onChange={(e) => setSchool({ ...school, mandal: e.target.value })}
              />
            </Field>
            <Field label="District" error={errors.district}>
              <Input
                value={school.district}
                onChange={(e) => setSchool({ ...school, district: e.target.value })}
              />
            </Field>
            <Field label="State" error={errors.state}>
              <Input
                value={school.state}
                onChange={(e) => setSchool({ ...school, state: e.target.value })}
              />
            </Field>
            <Field label="Pincode" error={errors.pincode}>
              <Input
                inputMode="numeric"
                value={school.pincode}
                onChange={(e) => setSchool({ ...school, pincode: e.target.value })}
              />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="text-sm text-srf-muted">
              Select one or more Olympiads. Fees are loaded from the Olympiad catalogue and will be
              managed from the admin panel once the database is connected.
            </p>
            {errors.olympiadSlugs && (
              <p className="mt-3 text-sm text-srf-error">{errors.olympiadSlugs}</p>
            )}
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {olympiads.map((olympiad) => (
                <OlympiadCard
                  key={olympiad.slug}
                  olympiad={olympiad}
                  selectable
                  selected={selected.includes(olympiad.slug)}
                  onToggle={() =>
                    setSelected((current) =>
                      current.includes(olympiad.slug)
                        ? current.filter((slug) => slug !== olympiad.slug)
                        : [...current, olympiad.slug],
                    )
                  }
                />
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-srf-soft-gray bg-srf-off-white p-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatInrFromPaise(totals.subtotal)}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm">
                <span>Exam expenditure adjustment</span>
                <span>-{formatInrFromPaise(totals.discount)}</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-srf-soft-gray pt-3 font-display text-2xl">
                <span>Total payable</span>
                <span className="text-srf-gold">{formatInrFromPaise(totals.total)}</span>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <ReviewBlock title="Student details">
              <p>{student.fullName}</p>
              <p>
                {student.classLevel} · {student.gender}
              </p>
              <p>
                {student.studentMobile} · Parent: {student.parentName} ({student.parentMobile})
              </p>
            </ReviewBlock>
            <ReviewBlock title="School details">
              <p>
                {school.schoolName} ({school.registrationType})
              </p>
              <p>
                {school.villageCity}, {school.district}, {school.state} — {school.pincode}
              </p>
            </ReviewBlock>
            <ReviewBlock title="Selected Olympiads">
              {totals.items.map((item) => (
                <p key={item.slug}>
                  {item.code} — {item.name} · Level-1 {item.level1Date}
                </p>
              ))}
              <p className="mt-3 font-display text-2xl text-srf-gold">
                Payable {formatInrFromPaise(totals.total)}
              </p>
            </ReviewBlock>
            <label className="flex items-start gap-3 text-sm text-srf-charcoal">
              <input
                type="checkbox"
                className="mt-1"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
              />
              <span>I confirm that the information provided is correct.</span>
            </label>
            {errors.confirmed && <p className="text-sm text-srf-error">{errors.confirmed}</p>}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="rounded-xl border border-srf-soft-gray bg-srf-off-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-srf-muted">
                Payment summary
              </p>
              <div className="mt-3 h-px w-16 bg-srf-gold" />
              <p className="mt-4 font-display text-4xl text-srf-black">
                {formatInrFromPaise(totals.total)}
              </p>
              <p className="mt-2 text-sm text-srf-muted">
                Payments are confirmed only after the gateway webhook is verified on the server.
                Settlement UPI is configured in the merchant dashboard — never trusted from the
                browser.
              </p>
            </div>
            <Link
              href={`/payment?amount=${totals.total}&name=${encodeURIComponent(student.fullName)}`}
              className={buttonVariants({ size: "lg" })}
            >
              Proceed to secure payment
            </Link>
          </div>
        )}

        {step < 4 && (
          <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-srf-soft-gray pt-6">
            <Button type="button" variant="outline" onClick={back} disabled={step === 0}>
              Back
            </Button>
            <Button type="button" onClick={next}>
              {step === 3 ? "Proceed to secure payment" : "Continue"}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs text-srf-error">{error}</p>}
    </div>
  );
}

function ReviewBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-srf-soft-gray p-5">
      <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-srf-gold">{title}</h2>
      <div className="mt-3 space-y-1 text-sm text-srf-charcoal">{children}</div>
    </div>
  );
}
