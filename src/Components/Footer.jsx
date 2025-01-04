import React from 'react'
import right_icon from '../assets/right-icon.png'

const Footer = () => {
    return (
        <div className='bg-green-100 w-full px-4 py-6 md:px-12 lg:px-20 '>
            <div className='flex flex-col items-center md:flex-row md:gap-24'>
                <div className='max-w-md py-4 md:py-2 md:text-left'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>SVault</h1>
                    <p className='text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed'>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet.
                        Eum quas beatae cumque eum quaerat.</p>
                </div>
                <div className='flex flex-col gap-2 w-full md:w-auto md:items-start'>
                    <h1 className='text-gray-700 font-semibold text-2xl '>Company</h1>
                    <ul className='text-gray-500 text-xl md:text-base lg:text-lg'>
                        <li className='flex gap-2 items-center group'>
                            <img src={right_icon} className='w-3 h-3 transform transition-transform duration-300 group-hover:rotate-90' />
                            <a href='#Hero' className='hover:text-gray-700 transition-colors' >Home</a></li>
                        <li className='flex gap-2 items-center group'>
                            <img src={right_icon} className='w-3 h-3 transform transition-transform duration-300 group-hover:rotate-90' />
                            <a href='#About' className='hover:text-gray-700 transition-colors'>About us</a></li>
                        <li className='flex gap-2 items-center group'>
                            <img src={right_icon} className='w-3 h-3 transform transition-transform duration-300 group-hover:rotate-90' />
                            <a href='#Features' className='hover:text-gray-700 transition-colors'>Features</a></li>
                    </ul>
                </div>
                <div className='w-full md:w-1/3 mt-8 '>
                    <h2 className='text-gray-700 font-semibold text-xl ' >Our Newsletter</h2>
                    <p className='text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed'>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <div className='flex mt-4'>
                        <input type='email' 
                        className='bg-green-100 focus:outline-none  border border-gray-400 px-4 py-2 rounded-l-md flex-1 '></input>
                        <button className='bg-green-400 rounded-r-md py-2 px-6'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='w-full mt-8 text-center text-gray-600 border-t border-slate-500 py-4'>
                Copyright © 2025 <span className='font-bold'>Svault</span>
            </div>
        </div>
    )
}

export default Footer
