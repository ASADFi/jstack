import { cn } from "@/utils"
import { ReactNode } from "react"
import { HTMLAttributes } from "react"

interface HedingProps extends HTMLAttributes<HTMLHeadElement>{
    
    children?: ReactNode
}

export const Heading =({className,children,...props}:HedingProps)=>{
    return <h1 className={cn(" text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",className)} {...props}>

        {children}
    </h1>

}