import { assets, serviceData, skillsData } from '@/assets/assets'
import { Catamaran, Ovo, Poppins } from 'next/font/google'
import Image from "next/image";
import React from 'react'

const ovo = Ovo({
    subsets: ["latin"],
    weight: "400",
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

const Services = ({ isDarkMode }) => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h3 className={`${ovo.className} text-center text-lg mb-2`}>What i offers</h3>
            <h2 className={`${ovo.className} text-5xl text-center`}>Skills</h2>
            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className} text-gray-600 dark:text-gray-300`}>A complete overview of my technical skills, tools, and core computer science knowledge.</p>
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 my-10 '>
                {skillsData.map((skill, index) => (

                    <div
                        key={index}
                        className="flex flex-col items-center hover:shadow-xl justify-center gap-3 p-5 dark:hover:bg-gray-800 rounded-xl duration-500 cursor-pointer"
                    >
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                        />
                        <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                ))}

                {/* <Image src={icon} alt='' className='w-10'/> */}
                {/* <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                        <a href={link} className='flex  items-center gap-3 text-sm mt-5 text-gray-300'>Read more<Image src={assets.right_arrow} className='w-4' alt=''/></a> */}

            </div>
        </div>
    )
}

export default Services
