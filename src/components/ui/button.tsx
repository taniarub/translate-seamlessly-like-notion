import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Maintain backward compatibility with existing shadcn components
        default: "bg-button-primary text-primary-foreground hover:bg-button-primary-hover shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-border-light bg-background hover:bg-card-hover hover:text-text-primary",
        secondary: "bg-button-secondary text-text-primary hover:bg-button-secondary-hover border border-border-light",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-card-hover",
        link: "text-text-primary hover:text-text-secondary underline-offset-4 hover:underline p-0 h-auto",
        // Notion-style variants
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
      },
      size: {
        sm: "text-notion-sm h-8 px-3",
        default: "text-notion-base h-10 px-4",
        lg: "text-notion-lg h-12 px-6",
        xl: "text-notion-xl h-14 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
