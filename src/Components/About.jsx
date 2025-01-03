import React from 'react'
import arrow from '../assets/arrow.png'
import about2 from '../assets/about2.svg'
import about1 from '../assets/about1.svg'
import command from '../assets/command.svg'
import about4 from '../assets/about4.svg'
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='items-center flex flex-col md:flex-row mt-8 md:justify-between gap-8 px-4 py-6 md:px-12 lg:px-20 w-full overflow-hidden' id='About'>
            <div className='flex flex-col gap-4 max-w-md'>
                <div className='bg-gray-100 text-lg text-green-400 shadow-md px-4 py-2 text-center w-24 md:w-32'>About</div>
                <p className='text-gray-700 font-bold text-base md:text-lg'>Svault is a comprehensive file management system designed to streamline how users encrypt,
                    access, share, and host files.</p>
                <p className='text-gray-600 text-xl md:text-base'> It caters to a wide range of use cases, from personal file storage to secure file
                    sharing and internet-accessible hosting without third parties.</p>
                <div className='flex rounded w-max bg-green-600 text-white items-center gap-2 p-3 group'>
                    <a href='#Features' className='text-sm md:text-base'><p>Read More</p></a>
                    <a href='#Features'><img src={arrow} className='w-5 cursor-pointer transfrom transition-transform duration-300 group-hover:translate-x-2' /></a>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='shadow-lg bg-white px-6 py-8 rounded flex flex-col text-center items-center justify-center mt-12'>
                    <div className='rounded-full w-20 bg-gray-200 hover:bg-green-300 flex items-center justify-center p-3'>
                        <img src={about1} className='w-14 h-14 object-contain opacity-45' />
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold text-green-500 py-3'>Eius provident</h1>
                    <p className='text-gray-600 text-sm md:text-base'>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                </div>
                <div className='shadow-lg bg-white px-6 py-8 rounded flex flex-col items-center justify-center mt-12'>
                    <div className='rounded-full w-20 bg-gray-200 hover:bg-green-300 flex items-center justify-center p-3'>
                        <img src={command} className='w-14 h-14 object-contain opacity-45' />
                    </div>
                    <h1 className='text-2xl font-bold text-green-500 py-3'>Veniam omnis</h1>
                    <p className='text-gray-700'>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                </div>


                <div className='shadow-lg bg-white px-6 py-8 rounded flex flex-col items-center text-center'>
                    <div className='rounded-full w-20 h-20 bg-gray-200 hover:bg-green-300 flex items-center justify-center p-4'>
                        <img src={about2} className='w-16 h-16 object-contain  opacity-45' />
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold text-green-500 py-2'>Eius provident</h1>
                    <p className='text-gray-600 text-sm md:text-base'>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                </div>
                <div className='shadow-lg bg-white px-6 py-8 rounded flex flex-col items-center text-center'>
                    <div className='rounded-full w-20 h-20 bg-gray-200 hover:bg-green-300 items-center justify-center p-4'>
                        <img src={about4} className='w-14 h-14 object-contain opacity-45' />
                    </div>
                    <h1 className='text-xl md:text-2xl font-bold text-green-500 py-2'>Veniam omnis</h1>
                    <p className='text-gray-600 text-sm md:text-base'>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>

                </div>
            </div>
        </motion.div>
    )
}

export default About
