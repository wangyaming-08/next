"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Herder() {
    const pathname = usePathname()
    const linkActiveClassName = (path) => {
        return pathname === path ? 'text-blue-500' : ''
    }

    return (
        <div className="absolute z-10 w-full">
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link href="/" className="font-bold text-3xl inline-block">Home</Link>
                <ul className="space-x-4 text-xl" >
                    <Link href="/performance" className={linkActiveClassName('/performance')}>Performance</Link >
                    <Link href="/reliability" className={linkActiveClassName('/reliability')}>Reliability</Link>
                    <Link href="/scale" className={linkActiveClassName('/scale')}>Scale</Link>
                </ul>
            </div>
        </div>
    )
}
