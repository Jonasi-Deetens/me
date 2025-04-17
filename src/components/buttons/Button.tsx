import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-white/70 hover:bg-white/80 text-gray-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-gray-300 dark:border-white/20 shadow-inner hover:shadow-md",
        ghost: "hover:bg-gray-100 dark:hover:bg-white/10",
        outline:
          "border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10",
        sidebar:
          "bg-white/90 dark:bg-black/90 border-r border-gray-200/50 dark:border-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const classes = buttonVariants({ variant, size });
    const combinedClasses = className ? `${classes} ${className}` : classes;

    return <button className={combinedClasses} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
