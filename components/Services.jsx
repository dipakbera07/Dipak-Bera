import { assets, serviceData, skillsData } from '@/assets/assets'
import { Catamaran, Ovo, Poppins } from 'next/font/google'
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

const Services = ({isDarkMode}) => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h3 className={`${ovo.className} text-center text-lg mb-2`}>What i offers</h3>
            <h2 className={`${ovo.className} text-5xl text-center`}>Skills</h2>
            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className} text-gray-600 dark:text-gray-300`}>A complete overview of my technical skills, tools, and core computer science knowledge.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10 '>
                {skillsData.map((category, index) => (
                    <div key={index}  className='dark:border-gray-700 dark:hover:bg-gray-800  dark:bg-gray-800 border border-gray-400 rounded-lg px-8 py-8 cursor-pointer  duration-500  h-90  flex flex-col items-center w-full hover:bg-[#fcf4ff]  '>


                                {/* Category Title */}
                                <h3 className='text-lg mb-4 text-gray-700 dark:text-white font-semibold  border-b'>
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <div className='flex flex-wrap gap-3'>
                                    {category.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 dark:bg-[#1e293b] p-3 rounded-lg w-full border-b border-gray-700 dark:hover:bg-[#1e293b] hover:-translate-y-[0.5] duration-500 hover:shadow-[2px_2px_rgba(0,0,0,10)] dark:hover:shadow-[0px_3px_rgba(0,0,0,10)] hover:bg-[#e5dde9]">
                                            <Image src={item.icon} alt={item.name} className='w-5 dark:invert' />
                                            <span className='text-sm'>{item.name}</span>
                                        </div>
                                    ))}
                                </div>

                            

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
