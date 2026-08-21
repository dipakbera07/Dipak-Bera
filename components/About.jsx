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

const About = ({ isDarkMode }) => {
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
                        Full-stack developer skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS, with strong problem-solving and DSA skills. Currently expanding knowledge in AI, Data Science, and Machine Learning while building practical and scalable applications.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#ecf0f4] hover:-translate-y-1 duration-500 hover:shadow-xl dark:border-gray-700 dark:hover:bg-gray-800  dark:bg-gray-800 dark:hover:text-white' key={index}>
                                <Image className={`w-6 mt-3 `} src={isDarkMode ? iconDark : icon} alt={title} />
                                <h3 className={`${poppins.className}  font-semibold text-gray-700 my-2 mt-3 dark:text-white`}>{title}</h3>
                                <p className={`${poppins.className}  text-sm text-gray-600 dark:text-white`}>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className={`${ovo.className} text-gray-700 mt-6 mb-3 dark:text-gray-300`}>Professional Profiles</h4>
                    <ul className='flex gap-3 sm:gap-5 items-center'>
                        {toolsData.map((tool, index) => (
                            <li
                                key={index}
                                className="dark:border-gray-700 dark:hover:bg-gray-800 dark:bg-gray-800 hover:bg-[#ecf0f4] hover:shadow-xl border border-gray-400 rounded-lg p-3 flex justify-center items-center w-12 sm:w-14 aspect-square cursor-pointer hover:-translate-y-1 duration-500"
                            >
                                <a
                                    href={tool.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        className="w-5 sm:w-7 h-auto"
                                        src={tool.icon}
                                        alt=""
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
