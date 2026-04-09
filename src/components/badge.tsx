import type React from "react"
import Text from "./text"
import { cva, cx, type VariantProps } from "class-variance-authority"
import Skeleton from "./skeleton"

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      none: "",
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
  }, 
}) 

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-800",
      secondary: "text-pink-800"
    },
  },
  defaultVariants: {
    variant: "primary",

  }
})

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
})

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export default function Badge({
  variant, 
  size, 
  className,
  loading,
  children,
  ...props
}: BadgeProps) {
  if(loading) {
    return  <Skeleton 
      rounded="full"
      className={cx(
        badgeVariants({variant: "none"}),
        badgeSkeletonVariants({size}),
        className
      )}
    />
  }

  return <div className={badgeVariants({ variant, size, className })} {...props}>
    <Text variant="body-sm-bold" className={badgeTextVariants({variant})}>{children}</Text>
  </div>
}