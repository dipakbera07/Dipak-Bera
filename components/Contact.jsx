"use client"
import { assets } from '@/assets/assets'
import { Ovo, Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const ovo = Ovo({
    subsets: ["latin"],
    weight: "400",
})


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7025954c-5e4e-4911-b314-bd9098f0c7b3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] dark:bg-none bg-no-repeat bg-center bg-size-[90%_auto]'>
            <h3 className={`${ovo.className} text-center text-lg mb-2`}>Connect with me</h3>
            <h2 className={`${ovo.className} text-5xl text-center`}>Get in touch</h2>
            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className} text-gray-600 dark:text-gray-300`}>I am a Full stack Web Developer with 2 years of expericence | Currently doing my B-tech in Computer Science and Emgineering</p>
            <form className='max-w-2xl mx-auto dark:text-black' onSubmit={onSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input
                        className='flex-1 border-[0.5] border-gray-400 bg-white rounded-lg outline-none p-3 dark:text-black dark:bg-gray-300'
                        name='name'
                        type="text" placeholder='Enter your name' required  />
                    <input
                        className='flex-1 border-[0.5] border-gray-400 bg-white rounded-lg outline-none p-3 dark:text-black dark:bg-gray-300'
                        name='email'
                        type="email" placeholder='Enter your email' required  />
                </div>
                <textarea
                    className='w-full border-[0.5] border-gray-400 bg-white rounded-lg outline-none p-3 dark:text-black dark:bg-gray-300 '
                    name="message"
                    rows='6' id=""
                    placeholder='Enter your message'
                    ></textarea>
                <button type='submit' className='w-max flex justify-center items-center gap-2 mx-auto border-[0.5] text-gray-700 border-gray-400 px-5 py-3 rounded-full hover:bg-[#fcf4ff] duration-500  hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mt-5'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>

                <p className='mt-5'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
