"use client"
import { assets } from '@/assets/assets'
import { Ovo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
})

const Header = ({isDarkMode}) => {

  return (
    <div id='home' className='w-11/12 max-w-3xl flex flex-col justify-center items-center gap-4 mx-auto text-center h-screen'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-[50%] w-32' />
      </div>
      <h3 className={`flex items-center  gap-2 text-xl md:text-2xl mb-3 ${ovo.className} `}>
        Hii i am Dipak Bera <Image src={assets.hand_icon} alt='' className='w-4' />
      </h3>
      <h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className} `}>
        Full stack Web Developer
      </h1>
      <p className={`max-w-2xl ${ovo.className} mx-auto text-gray-600 dark:text-gray-300`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet suscipit distinctio soluta quam dignissimos maxime. In officiis totam vitae expedita.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
        className=' hover:bg-gray-700 hover:text-white duration-400   dark:border-gray-700 dark:hover:bg-gray-700  dark:bg-gray-800 flex  gap-3 border border-white px-10 py-3 bg-black text-white rounded-4xl items-center'
        >Contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

        <a href="/cv.pdf"
        className='hover:bg-[#fcf4ff] duration-500  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex  gap-3 border  px-10 py-3 rounded-4xl items-center'
        >My Resume<Image src={assets.download_icon} alt='' className='w-4 dark:invert'/></a>
      </div>
    </div>
  )
}

export default Header




