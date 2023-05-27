"use client";
import React, { useState } from 'react';

//Create Form Type 
interface formT {
    name: string,
    email: string,
    subject: string,
    message: string,
}

const ConatctSection = () => {
    const [inputValue, setInputValue] = useState<formT>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    // Handle Change Function 
    const InputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }

    // Form Handling Area
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        console.log('handle submit value', inputValue);
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}  className='mt-10'>
                <input  name="name"  placeholder='Your Name' onChange={InputValue}   className='w-96 p-3 rounded-md transition focus:outline-none focus:duration-500 focus:border focus:border-black' required /><br /><br />
                <input  name="email" placeholder='Email' onChange={InputValue} className='w-96 p-3 rounded-md transition focus:outline-none focus:duration-500 focus:border focus:border-black' required /><br /><br />
                <input  name="subject" placeholder='Subject' onChange={InputValue}  className='w-96 p-3 rounded-md transition focus:outline-none focus:duration-500 focus:border focus:border-black' required /><br /><br />
                <textarea name="message"  id="" rows={4} placeholder='Message' onChange={InputValue}  className='w-96 p-3 rounded-md transition focus:outline-none duration-600 focus:border focus:border-black' required ></textarea><br /><br />
                <input type="submit" value="send" className='px-6 py-3 bg-[#00c5f2] uppercase text-white cursor-pointer transition duration-600 focus:border focus:border-black hover:underline' required />
            </form>
        </div>
    );
};

export default ConatctSection;