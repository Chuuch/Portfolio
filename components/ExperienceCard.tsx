import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import telerik from '../public/telerik.png'
import react from '../public/react.png'
import tailwind from '../public/tailwind.png'
import firebase from '../public/firebase.png'
import javascript from '../public/javascript.png'
import html from '../public/html.png'
import css from '../public/css.png'
import certificate from '../public/certificate.png'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
                        snap-center bg-[#000033] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}>
            <Image src={telerik} alt='telerik'
                    className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'/>
        </motion.div>

        <div className='px-0 md:px-10 flex flex-col items-start'>
            <h4 className='text-white text-4xl font-light'>
                Alpha JavaScript Track
            </h4>

            <p className='text-white font-bold text-2xl mt-1'>
                Telerik Academy
            </p>

            <div className='flex space-x-2 my-2'>
                <Image src={react} alt='react'
                        className='h-8 w-9'/>
                <Image src={tailwind} alt='tailwind'
                        className='h-8 w-10 rounded-full'/>
                <Image src={firebase} alt='firebase'
                        className='h-8 w-8'/>
                <Image src={javascript} alt='javascript'
                        className='h-8 w-8'/>
                <Image src={html} alt='html'
                        className='h-8 w-8'/> 
                <Image src={css} alt='css'
                        className='h-8 w-8'/>

            </div>

            <p className='uppercase py-5 text-gray-300'>
                06 JUL 2023 - 19 DEC 2023
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg text-white'>
                <li>Core Programming Fundamentals</li>
                <li>Object Oriented Programming</li>
                <li>Data Structures & Algorithms</li>
                <li>Web Development</li>
            </ul>

        </div>
        
    </article>
  )
}

export default ExperienceCard