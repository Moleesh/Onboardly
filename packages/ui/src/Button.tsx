/**
 * @module Button
 * @description Shared Shadcn-compatible button primitive wrapper.
 * @author auto
 * @since 1.0.0
 */
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-slate-950 text-white hover:bg-slate-800",
        secondary: "border border-slate-200 bg-white text-slate-950 hover:bg-slate-50",
        ghost: "text-slate-700 hover:bg-slate-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    children: ReactNode;
  };

/**
 * Renders a reusable platform button.
 * @param props - Button rendering and variant props.
 * @returns A styled button element.
 */
export function Button({ asChild, className, variant, ...props }: ButtonProps): JSX.Element {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
