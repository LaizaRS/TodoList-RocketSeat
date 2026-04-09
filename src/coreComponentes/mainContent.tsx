import type React from "react";
import { cx } from "class-variance-authority"

interface MainComponentProps extends React.ComponentProps<"main"> {}

export default function MainComponent({children, className, ...props}: MainComponentProps) {
  return  <main className={cx("mt-4 md:mt-8", className)} {...props}>
    {children}
  </main>
}