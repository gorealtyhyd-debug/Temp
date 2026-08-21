import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-srf-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-srf-gold text-[#021024] hover:bg-srf-gold-dark hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(201,162,39,0.28)]",
        secondary:
          "rounded-full border border-srf-gold bg-transparent text-srf-gold hover:bg-srf-gold hover:text-[#021024]",
        black:
          "rounded-full bg-[#021024] text-white hover:bg-[#052659] border border-white/15",
        outline:
          "rounded-full border border-srf-gold/60 text-srf-gold hover:bg-srf-gold hover:text-[#021024]",
        ghost: "text-white hover:text-srf-gold",
        soft: "rounded-full bg-[#052659] text-white border border-[#5483b3]/40 hover:border-srf-gold",
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
