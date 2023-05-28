"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import logo from "./../../../assets/logo.png";


const NavigationBar = () => {
    const router = useRouter();
    const currentPath = usePathname()
    const [productClicked, setProductClice] = React.useState(false);

    return (
        <div className=' sticky top-0 bg-blue-900 bg-opacity-30 backdrop-blur-md w-screen flex justify-around ' >
            <div className='body-size flex justify-between items-center '>
                <Link href={'/'} >
                    <div className='flex items-center ' >
                        <Image width={60} src={logo} alt='logo' />
                        <h1 className='text-2xl ml-2 font-bold' >Duck</h1>
                    </div>
                </Link>
                <nav className=' flex font-semibold' >

                    <div className='relative ' >
                        {/* <button >hi</button> */}
                        <span
                            tabIndex={1}
                            onClick={()=>setProductClice(true) }
                            className={`${currentPath.startsWith('/products') ? "text-lime-300 underline " : ""} nav-link cursor-pointer `} 
                        >Products</span>

                        <div onClick={()=>setProductClice(false)} className={`${ productClicked ? "" : "hidden" } fixed inset-0 h-screen w-screen bg-black bg-opacity-0 `} ></div>

                        <div
                            tabIndex={1}
                            className={`${ productClicked ? "" : "hidden" } absolute flex flex-col bg-opacity-80 backdrop-blur-md mt-2 py-3 w-60 rounded text-white z-auto bg-slate-500 `}
                        >
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-fusion')
                           }} className='nav-drop-down '>Duck Fusion</span>
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-ecommerce')
                           }} className='nav-drop-down '>Duck Ecommerce</span>
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-wallet')
                           }} className='nav-drop-down '>Duck Wallet</span>
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-erp-restaurant')
                           }} className='nav-drop-down '>Duck ERP for Restaurant</span>
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-erp-retail')
                           }} className='nav-drop-down '>Duck ERP for Retail</span>
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-erp-service')
                           }} className='nav-drop-down '>Duck ERP for Service Center</span>
                           <span onClick={()=>{
                                setProductClice(false);
                                router.push('/products/duck-erp-school')
                           }} className='nav-drop-down '>Duck ERP for School</span>
                        </div>

                    </div>

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