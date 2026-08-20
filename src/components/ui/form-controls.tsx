import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-srf-soft-gray bg-white px-3 text-sm text-srf-black placeholder:text-srf-muted transition focus-visible:border-srf-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-srf-gold/30",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-srf-charcoal", className)}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border border-srf-soft-gray bg-white px-3 text-sm text-srf-black transition focus-visible:border-srf-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-srf-gold/30",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
Select.displayName = "Select";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 w-full rounded-lg border border-srf-soft-gray bg-white px-3 py-2 text-sm text-srf-black placeholder:text-srf-muted transition focus-visible:border-srf-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-srf-gold/30",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
