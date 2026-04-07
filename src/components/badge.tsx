import type React from "react"
import Text from "./text"
import { cva, type VariantProps } from "class-variance-authority"

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-400",
      secondary: "bg-pink-400"
    },
    size: {
      sm: "py-0.5 px-2"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
}) 

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-800",
      secondary: "text-pink-800"
    }
  },
  defaultVariants: {
    variant: "primary",

  }
})

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  
}

export default function Badge({
  variant, 
  size, 
  className,
  children,
  ...props
}: BadgeProps) {

  return <div className={badgeVariants({ variant, size, className })} {...props}>
    <Text variant="body-sm-bold" className={badgeTextVariants({variant})}>{children}</Text>
  </div>
}