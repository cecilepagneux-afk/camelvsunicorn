import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "cvds-hero": "relative overflow-hidden bg-cvds-accent text-white font-semibold shadow-[0_4px_14px_0_hsl(var(--cvds-accent)/0.39)] hover:shadow-[0_6px_20px_0_hsl(var(--cvds-accent)/0.5)] transition-all duration-300 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-cvds-secondary before:to-cvds-accent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none",
        "cvds-primary": "bg-white text-cvds-primary border-2 border-cvds-primary font-semibold hover:bg-cvds-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_10px_0_hsl(var(--cvds-primary)/0.15)] hover:shadow-[0_4px_16px_0_hsl(var(--cvds-primary)/0.3)]",
        "cvds-secondary": "bg-gradient-to-br from-cvds-primary to-cvds-secondary text-white font-semibold shadow-[0_4px_14px_0_hsl(var(--cvds-primary)/0.3)] hover:shadow-[0_6px_20px_0_hsl(var(--cvds-primary)/0.45)] transition-all duration-300 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {variant === "cvds-hero" ? (
          <>
            <span className="relative z-10">{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
