import NavigationBar from '@/components/shared/navigationBar/NavigationBar';
import React from 'react';


const page = () => {
    return (
        <div className='page-root'>
            <NavigationBar />
            <h1>Contact</h1>
            <form action="submit" className='mt-10'>
                <input type="name" placeholder='Your Name' className='w-96 p-3 rounded-md' required /><br /><br />
                <input type="name" placeholder='Email' className='w-96 p-3 rounded-md' required /><br /><br />
                <input type="name" placeholder='Subject' className='w-96 p-3 rounded-md' required /><br /><br />
                <textarea name="" id="" rows={4} placeholder='Message' className='w-96 p-3 rounded-md'required ></textarea><br /><br />
                <input type="submit" value="send" className='px-6 py-3 bg-[#00c5f2] uppercase text-white cursor-pointer' />
            </form>
        </div>
    );
};

export default page;