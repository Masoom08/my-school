import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeStyle?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, typeStyle = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";

    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 transition-colors";

    const typeStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
      ghost: "hover:bg-gray-100 text-gray-800",
    }[typeStyle];

    const sizeStyles = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    }[size];

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, typeStyles, sizeStyles, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
