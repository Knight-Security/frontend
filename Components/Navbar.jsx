"use client";
import React from 'react'
import Link from "next/link";
import { Button } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import { navbar } from '@/utils/Navbar';
const Navbar = () => {
    return (
        <div>
            <nav className='flex gap-3'>
                {navbar.map((nav) => (
                    <Button color="purple" variant="soft" onClick={() => { scrollTosection(`${nav}`) }}
                        className="
    !h-8 !min-w-20 !px-7
    !rounded-2xl
    !bg-purple-600/10
    !text-purple-200
    !border !border-purple-500/30
    hover:!bg-purple-600
    hover:!text-white
    hover:!border-purple-400
    hover:!shadow-[0_0_20px_rgba(168,85,247,0.45)]
    hover:-translate-y-0.5
    active:translate-y-0
    transition-all duration-300 ease-out
    cursor-pointer"
                    >{nav}</Button>
                ))}
            </nav>
        </div>
    )
}

export default Navbar
