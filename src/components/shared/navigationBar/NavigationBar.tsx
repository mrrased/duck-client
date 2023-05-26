"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "./../../../assets/logo.png";


const NavigationBar = () => {
    const currentPath = usePathname()
    console.log( currentPath )

    return (
        <div className=' sticky top-0 bg-blue-900 bg-opacity-30 backdrop-blur-md w-screen flex justify-around overflow-x-hidden ' >
            <div className='body-size flex justify-between items-center '>
                <Link href={'/'} >
                    <div className='flex items-center ' >
                        <Image width={60} src={logo} alt='logo' />
                        <h1 className='text-2xl ml-2 font-bold' >Duck</h1>
                    </div>
                </Link>
                <nav className=' font-semibold' >

                    {/* <Link href={'/'} >
                        <span className='nav-link' >Home</span>
                    </Link> */}

                    <Link href={'/products'} >
                        <span className={`${currentPath.startsWith('/products') ? "text-lime-300 underline " : ""} nav-link`} >Products</span>
                    </Link>
                    <Link href={'/duck-fusion'} >
                        <span className={`${currentPath.startsWith('/duck-fusion') ? "text-lime-300 underline " : ""} nav-link`} >Duck Fusion</span>
                    </Link>
                    <Link href={'/services'} >
                        <span className={`${currentPath.startsWith('/services') ? "text-lime-300 underline " : ""} nav-link`} >Services</span>
                    </Link>
                    <Link href={'/contact-us'} >
                        <span className={`${currentPath.startsWith('/contact-us') ? "text-lime-300 underline " : ""} nav-link`} >Contact Us</span>
                    </Link>
                    <Link href={'/login'} >
                        <span className={`${currentPath.startsWith('/login') ? "text-lime-300 underline " : ""} nav-link`} >Login</span>
                    </Link>
                </nav>
              
            </div>
        </div>
    );
};


export default React.memo(NavigationBar);