"use client";

import Image from 'next/image';
import React from 'react';
import logo from './../../../assets/logo.png';

interface UserInfo {
    email: string,
    password: string,
}

const Login = () => {

    const [userInfo, setUserInfo] = React.useState<UserInfo>({ email: '', password: '' } as UserInfo)

    const getLoginInfo = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleLogin=( e: React.FormEvent<HTMLFormElement> )=>{
        e.preventDefault()

        alert(JSON.stringify(userInfo))

    }



    return (
        <div className={` page-root flex justify-center items-center `} >

            <div className=' bg-blue-800 shadow-2xl shadow-indigo-700 rounded-md bg-opacity-50 bg-blur-lg ' >
                <div className=' flex justify-around items-center flex-col mt-4 ' >
                    <div className='flex justify-center items-center ' >
                        <Image width={70} src={logo} alt='logo' />
                        <h1 className='text-[33px] font-bold '  >Duck</h1>
                    </div>
                    <p className='text-gray-700' >Let's build your business.</p>
                </div>
                <form onSubmit={(e)=>handleLogin} className=' flex flex-col p-5 ' >
                    <input onChange={(e)=>{getLoginInfo(e)}} className='p-2 my-4 rounded-md w-80 ' type="text" name="email" id="email" placeholder='E-mail' />
                    <input onChange={(e)=>{getLoginInfo(e)}}  className='p-2 mt-4 rounded-md w-80  ' type="password" name="password" id="password" placeholder='Password' />
                    <div className='flex justify-between px-2 text-gray-800 mt-2 ' >
                        <p>Forgot password?</p>
                        <p>Register</p>
                    </div>
                    <input className='mt-10 mb-6 hover:shadow-xl cursor-pointer text-white p-2 my-4 rounded-md w-80 bg-slate-500 ' type="submit" value="Login" />
                </form>
            </div>

        </div>
    );
};

export default Login;