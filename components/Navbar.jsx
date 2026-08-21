"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Ovo } from "next/font/google"

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
})

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [menu, setMenu] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])
  // console.log("Dark:",isDarkMode)



  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} priority alt='' className='w-full' />
      </div>
      <nav className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-5 flex justify-between items-center z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""} dark:bg-[#171717] dark:backdrop-blur-lg dark:shadow-sm dark:border-b-gray-500`}>
        <a href="#top">
          <Image alt='' src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer' />
        </a>

        <ul className={`${ovo.className} hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}  dark:border  dark:border-gray-700 dark:shadow-lg dark:bg-gray-800`}>
          <li><a className={`${ovo.className}`} href="#home">Home</a></li>
          <li><a className={`${ovo.className}`} href="#about">About me</a></li>
          <li><a className={`${ovo.className}`} href="#services">Skills</a></li>
          <li><a className={`${ovo.className}`} href="#work">Projects</a></li>
          <li><a className={`${ovo.className}`} href="#education">Education</a></li>
        </ul>

        <div className='flex gap-4 items-center'>

          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          <a className={`${ovo.className} hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-gray-700 dark:bg-gray-800`} href="#contact">Contact<Image className='w-3' src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' /></a>

          {/* ---- Menu open button ----- */}
          <button className='w-6 block md:hidden ml-3' onClick={() => { setMenu(true) }} >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' />
          </button>
        </div>


        {/* ------------ Mobile Menu -------- */}
        <div className={`md:hidden h-screen bg-rose-50 transition duration-500 fixed right-0 top-0 bottom-0 w-64 z-50 ${menu ? "translate-x-0" : "translate-x-full"} dark:bg-gray-800`}>
          <div className='absolute  md:hidden top-6 right-6 z-60 ' onClick={() => { setMenu(false) }}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <ul className='flex  flex-col gap-4 px-10 py-20 '>
            <li onClick={() => setMenu(false)}><a className={`${ovo.className}`} href="#home">Home</a></li>
            <li onClick={() => setMenu(false)}><a className={`${ovo.className}`} href="#about">About me</a></li>
            <li><a className={`${ovo.className}`} href="#services">Skills</a></li>
            <li><a className={`${ovo.className}`} href="#work">Projects</a></li>
            <li><a className={`${ovo.className}`} href="#education">Education</a></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
