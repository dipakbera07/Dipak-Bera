"use client"
import { assets, workData } from '@/assets/assets'
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

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h3 className={`${ovo.className} text-center text-lg mb-2`}>Projects</h3>
            <h2 className={`${ovo.className} text-5xl text-center`}>My latest work</h2>
            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className} text-gray-600  dark:text-gray-300`}>I am a Full stack Web Developer with 2 years of expericence | Currently doing my B-tech in Computer Science and Emgineering</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10'>
                {workData.map(({ title, description, bgImage, link }, index) => (
                    <div key={index} style={{ backgroundImage: `url(${bgImage})` }} className='aspect-square bg-no-repeat bg-cover relative bg-center cursor-pointer group'>
                        <a href={link}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500'>
                            <div className=''>
                                <h2 className={`text-sm text-gray-900 ${poppins.className} font-semibold`}>{title}</h2>
                                <p className={`text-[12px] text-gray-600 leading-5 ${poppins.className} text-gray-600 `}>{description}</p>
                            </div>
                            <div className='border border-black aspect-square rounded-full w-9 flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='' className='w-5' />
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
            </div>

            <a href="" className='w-max flex justify-center items-center gap-2 mx-auto border-[0.5] text-gray-700 border-gray-400 px-5 py-3 rounded-full hover:bg-[#fcf4ff] duration-500  hover:text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'>
                Show more <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
            </a>
        </div>
    )
}

export default Work
