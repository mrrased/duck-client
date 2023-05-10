import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './../../../assets/logo.png'


const NavigationBar = () => {
    return (
        <div className=' sticky top-0 bg-black bg-opacity-10 backdrop-blur-lg w-screen flex justify-around overflow-x-hidden ' >
            <div className='body-size flex justify-between items-center '>
                <div className='flex items-center' >
                    <Image width={60} src={logo} alt='logo' />
                    <h1 className='text-2xl ml-2 font-bold' >Duck</h1>
                </div>
                <nav className=' font-semibold' >
                    <Link href={'/'} >
                        <span className='nav-link' >Home</span>
                    </Link>
                    <Link href={'/products'} >
                        <span className='nav-link' >Products</span>
                    </Link>
                    <Link href={'/services'} >
                        <span className='nav-link' >Services</span>
                    </Link>
                    <Link href={'/contact-us'} >
                        <span className='nav-link' >Contact Us</span>
                    </Link>
                    <Link href={'/login'} >
                        <span className='nav-link' >Login</span>
                    </Link>
                </nav>
              
            </div>
        </div>
    );
};


export default React.memo(NavigationBar);