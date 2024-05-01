import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex  w-full rounded-md   bg-white px-3 py-2 text-sm  ring-0 border-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500   focus-visible:border-b disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950  dark:placeholder:text-slate-400 ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
