import React from 'react'
import hero_img from '../assets/hero-img.png'
import command from '../assets/command.svg'
import gem from '../assets/gem.svg'
import easel from '../assets/easel.svg'
import geo from '../assets/geo.svg'
import { motion } from "motion/react"


const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto max-w-screen-xl bg-gray-100 px-4 items-center py-8 sm:px-8 md:px-16 lg:px-32 ' id='Hero'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='pt-16 flex flex-col gap-6'>
                    <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl'>SVault</h1>
                    <p className='text-gray-400 text-sm md:text-base lg:text-lg'>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
                        Eum quas beatae cumque eum quaerat.</p>
                    <a href='#About'
                        className='rounded-full bg-green-500 text-white w-36 px-4 py-2 text-center hover:bg-green-400'>Get Started</a>
                </div>
                <img src={hero_img}
                    className='w-full max-w-sm md:max-w-md lg:max-w-lg h-auto' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4 pt-16'>
                <div className='shadow-lg bg-white hover:bg-green-500 transition duration-300 ease-in-out rounded p-6 sm:p-8 md:p-12 lg:p-10 flex flex-col items-center justify-center gap-4'>
                    <img src={easel} className='w-8 h-8 sm:w-10 sm:h-10' />
                    <h2 className='text-gray-500 text-sm sm:text-base lg:text-lg text-center font-semibold'>Lorem Ipsum</h2>
                </div>
                <div className='shadow-lg bg-white hover:bg-green-500 transition duration-300 ease-in-out rounded p-6 sm:p-8 md:p-12 lg:p-10 flex flex-col items-center justify-center gap-4'>
                    <img src={gem} className='w-8 h-8 sm:w-10 sm:h-10' />
                    <h2 className='text-gray-500 text-lg text-center font-semibold'>Sed ut perspiciatis</h2>
                </div>
                <div className='shadow-lg bg-white hover:bg-green-500 transition duration-300 ease-in-out rounded p-6 sm:p-8 md:p-12 lg:p-10 flex flex-col items-center justify-center gap-4'>
                    <img src={geo} className='sm:w-10 sm:h-10 w-8 h-8' />
                    <h2 className='text-gray-500 text-lg text-center font-semibold'>Magni Dolores</h2>
                </div>
                <div className='shadow-lg bg-white hover:bg-green-500 transition duration-300 ease-in-out rounded p-6 sm:p-8 md:p-12 lg:p-10 flex flex-col items-center justify-center gap-4'>
                    <img src={command} className='w-8 h-8 sm:w-10 sm:h-10' />
                    <h2 className='text-gray-500 text-lg text-center font-semibold'>Nemo Enim</h2>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero
