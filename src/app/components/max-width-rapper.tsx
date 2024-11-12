import { cn } from '@/utils'
import React, { ReactNode } from 'react'
interface MaxWidthRapper {
    className?: string
    children?: ReactNode
}
export const MaxWidthRapper = ({ className, children }: MaxWidthRapper) => {
    return (
        <div className={cn("h-full mx-auto max-h-screen px-2.5 md:px-20 ", className)}>
            {children}
        </div>
    )
}
