import React from 'react'
import image from '../assets/image.png'
import greentick from '../assets/greentick.png'
import circle from '../assets/circle.png'
import { motion } from "motion/react"

const Features = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            className=' bg-gray-100 items-center px-4 py-6 md:px-12 lg:px-20 w-full' id='Features'>
            <div className='flex flex-col items-center justify-between gap-2'>
                <div className='rounded-full text-green-500 font-semibold px-6 py-2 bg-green-100 text-center'>Features</div>
                <h3 className='text-3xl font-semibold'>Check our <span className='text-3xl text-green-400 font-semibold'>Features</span></h3>
            </div>
            <div className='flex flex-col md:flex-row md:items-start items-center gap-8 mt-8'>
                <div className='flex-shrink-0 mx-auto md:mx-0'>
                    <img src={image}
                        className='w-full max-w-xs md:max-w-sm lg:max-w-md object-contain' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full'>
                    <div className='flex flex-col bg-white items-start gap-4 py-6 max-w-md px-2 rounded-lg shadow-md'>
                        <div className='flex gap-3 items-center '>
                            <div className='bg-gray-100 shadow-md p-2 hover:bg-green-400 cursor-pointer'>
                                <img src={greentick} className='w-3 ' />
                            </div>
                            <h2 className='font-bold text-lg'>Encrypted File Vaults</h2>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700'>Users can create secure vaults where files are encrypted for protection.</p>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700 '>Vaults can be accessed either through the application or
                                mounted as a Virtual File System (VFS), ensuring flexibility in interaction.</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white items-start gap-4 py-6 max-w-md px-2 rounded-lg shadow-md'>
                        <div className='flex gap-2 items-center '>
                            <div className='bg-gray-100 shadow-md p-2 hover:bg-green-400 cursor-pointer'>
                                <img src={greentick} className='w-3 ' />
                            </div>
                            <h2 className='font-bold text-lg'>File Server Hosting</h2>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700 '>Svault supports creating file servers that can be
                                accessed remotely over the internet, enabling easy sharing and hosting of files.</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white items-start gap-4 py-6 max-w-lg px-2 rounded-lg shadow-md'>
                        <div className='flex gap-2 items-center '>
                            <div className='bg-gray-100 shadow-md p-2 hover:bg-green-400 cursor-pointer'>
                                <img src={greentick} className='w-3 ' />
                            </div>
                            <h2 className='font-bold text-lg'>File Sharing via Wormhole Protocol</h2>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700 '>Files can be shared securely and efficiently using
                                the Wormhole protocol, ensuring privacy and speed.</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white items-start gap-4 py-6 px-2 rounded-lg shadow-md max-w-md'>
                        <div className='flex gap-2 items-center '>
                            <div className='bg-gray-100 shadow-md p-1 hover:bg-green-400 cursor-pointer'>
                                <img src={greentick} className='w-3 ' />
                            </div>
                            <h2 className='font-bold'>Multifaceted Accessibility</h2>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700 '><strong>GUI:</strong> A user-friendly interface for general users.</p>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700 '><strong>CLI:</strong> Command-line interface for developers and power users.</p>
                        </div>
                        <div className='flex items-start gap-2'>
                            <img src={circle} className='w-4 mt-1' />
                            <p className='text-gray-700 '><strong>Package:</strong> Integration as a Go package for custom software development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Features
