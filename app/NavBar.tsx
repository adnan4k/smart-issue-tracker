import Link from 'next/link'
import React from 'react'
import { IoBugSharp } from "react-icons/io5";


function NavBar() {
    const Links = [
        { label: 'Dashbaord', href: '/' },
        { label: 'Issues', href: '/issues' }

    ]
    return (
        <nav className='flex space-x-6 border-b h-14 px-5 mb-5 items-center'>
            <Link href='/'><IoBugSharp />
            </Link>
            <ul className='flex space-x-6 '>
                {Links.map(link => <Link
                    key={link.href}
                    href={link.href}
                    className='text-zinc-500 hover:text-zinc-800 transition-text'>{link.label} </Link>)}

            </ul>
        </nav>
    )
}

export default NavBar