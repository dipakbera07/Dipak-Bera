import { assets, infoList, toolsData } from '@/assets/assets'
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

const About = ({isDarkMode}) => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h3 className={`${ovo.className} text-center text-lg mb-2`}>Introduction</h3>
            <h2 className={`${ovo.className} text-5xl text-center`}>About me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 ustify-center'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='' className='w-full rounded-3xl  ' />
                </div>
                <div className={`flex-1 ${ovo.className} `}>
                    <p className={`${ovo.className} mb-10 max-w-2xl text-gray-600 dark:text-gray-300`}>
                       I am a passionate Full-Stack MERN Developer with hands-on experience in building real-world applications like blogging platforms and secure web apps. I enjoy solving problems and continuously improving my development skills.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon,iconDark,title,description},index)=>(
                            <li className='border-[0.5] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_rgba(0,0,0,10)] dark:border-gray-700 dark:hover:bg-gray-700  dark:bg-gray-800 dark:hover:text-white' key={index}>
                                <Image className={`w-6 mt-3 `} src={isDarkMode?iconDark:icon} alt={title}/>
                                <h3 className={`${poppins.className}  font-semibold text-gray-700 my-2 mt-3 dark:text-white`}>{title}</h3>
                                <p className={`${poppins.className}  text-sm text-gray-600 dark:text-white`}>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className={`${ovo.className} text-gray-700 my-6 dark:text-gray-300`}>Tools I use</h4>
                    <ul className='flex gap-3 sm:gap-5 items-center'>
                        {toolsData.map((tools,index)=>(
                            <li key={index} className='dark:border-gray-700 dark:hover:bg-gray-700  dark:bg-gray-800 hover:bg-[#fcf4ff]  hover:shadow-[4px_4px_rgba(0,0,0,10)] border border-gray-400 rounded-lg p-3 flex justify-center items-center w-12 sm:w-14 aspect-square cursor-pointer hover:-translate-y-1 duration-500 '>
                                <Image className='w-5 sm:w-7' src={tools} alt=''/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
