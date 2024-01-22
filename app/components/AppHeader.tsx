'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
const AppHeader = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <>
            <header className='relative  w-full' >
                <div className='py-5 w-full absolute bg-red' style={{backgroundColor:'#f8f8f8', borderBottom:'1px solid lightgray'}}>
                    <div className='px-5 md:px-12 flex items-center h-full gap-x-8 '>
                        <div className='flex justify-center max-sm:w-1/2'>
                            <p className='w-full text-lg'>Tsegay</p>
                        </div>
                        <div className='w-4/5 flex gap-x-10 justify-end'>
                            <div className='hidden sm:flex sm:z-50'>
                                <Nav />
                            </div>

                            <div className='flex sm:hidden '>
                                <button onClick={() => setOpenNav(openNav => !openNav)}>
                                    {
                                        openNav ? <FontAwesomeIcon icon={faX} className='h-6 w-6 ' /> : <FontAwesomeIcon icon={faBars} className='h-6 w-6 ' />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {
                openNav && <div className=' w-full top-14 mt-2 p-4  sm:hidden   bg-gradient-to-r from-slate-100 to-gray-100 pt-14  fixed z-50'>
                    <Nav />
                </div>
            }
        </>
    )
}

const Nav = () => {
    return (
        <nav >
            <ul className='flex flex-col sm:flex-row gap-x-8 justify-center gap-y-3' >
                <li className='w-full'>
                    <Link href="/" className='py-2 w:full flex justify-center hover:bg-emerald-300 w-full h-full sm:hover:bg-slate-100 sm:p-2' >Home</Link>
                </li>
                <li className='w-full'>
                    <Link href="/#skill" className='py-2 w:full flex justify-center hover:bg-emerald-300 w-full h-full  sm:hover:bg-slate-100 sm:p-2' >Skills</Link>
                </li>
                <li className='w-full'>
                    <Link href="/#projects" className='py-2 w:full flex justify-center hover:bg-emerald-300 w-full h-full  sm:hover:bg-slate-100 sm:p-2' >Projects</Link>
                </li>
                <li className='w-full'>
                    <Link href="/#resume" className='py-2 w:full flex justify-center hover:bg-emerald-300 w-full h-full  sm:hover:bg-slate-100 sm:p-2' >Resume</Link>
                </li>
                <li className='w-full'>
                    <Link href="/#contact" className='py-2 w:full flex justify-center hover:bg-emerald-300 w-full h-full  sm:hover:bg-slate-100 sm:p-2' >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default AppHeader