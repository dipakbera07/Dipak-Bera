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

const Footer = ({isDarkMode}) => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20 '>
            {/* <h2 className={`${ovo.className} text-5xl text-center`}>Dipak</h2> */}
            <Image src={isDarkMode?assets.logo_dark:assets.logo} alt='' className='w-32 mx-auto' />
            <div className='flex justify-center items-center  gap-2 mt-2'>
                <div className='flex justify-center items-center'>
                    <Image src={assets.mail_icon} alt='' className='w-5' />
                </div>
                <p className={`${ovo.className} text-gray-600 dark:text-gray-300`}>dbera20050@gmail.com</p>
            </div>
            <div className=' bg-gray-600 h-[0.5] my-6 '></div>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-sm   text-gray-600'>
                <div className={`${ovo.className} dark:text-gray-300`}>2026 Dipak Bera. All rights reserved.</div>
                <div className='flex items-center justify-between gap-4 '>
                    <a target='_blank' className={`${ovo.className} dark:text-gray-300`} href="https://www.linkedin.com/in/dipakbera07/">LinkedIn</a>
                    <a target='_blank' className={`${ovo.className} dark:text-gray-300`} href="https://github.com/dipakbera07">Github</a>
                    <a className={`${ovo.className} dark:text-gray-300`} href="">Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
