import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-srf-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-srf-gold text-srf-black hover:bg-srf-gold-dark hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(201,162,39,0.25)]",
        secondary:
          "border border-srf-gold bg-transparent text-srf-gold hover:bg-srf-gold hover:text-srf-black",
        black:
          "bg-srf-black text-white hover:bg-srf-charcoal",
        outline:
          "border border-srf-black text-srf-black hover:bg-srf-black hover:text-white",
        ghost: "text-srf-black hover:text-srf-gold",
        soft: "bg-srf-off-white text-srf-black border border-srf-soft-gray hover:border-srf-gold",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
