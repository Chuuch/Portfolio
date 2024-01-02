import Image from 'next/image'
import React from 'react'
import about2 from '../public/about2.jpg'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div
        className='flex flex-col h-screen relative text-center md:left md:flex-row max-w-7xl px-10
                    justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
       </h3> 

       <motion.div
            initial={{ x: -200, opacity: 0,}}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}>

            <Image src={about2} alt='about-photo'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
                        md:w-[1600px] md:h-64 xl:w-[400px] xl:h-[500px]'/>
       </motion.div>

       <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold text-teal-600'>
                Who am <span className='underline decoration-[#008080]/50'>I</span>?
            </h4>
            <p className='text-sm xl:text-base md:text-base  whitespace-pre-line xl:w-[600px]'>
            Greetings, I am Daniel, and welcome to my portfolio. 
            Over the past year, I have immersed myself in the realm of coding, 
            transforming it from a casual hobby into a dedicated pursuit of a career as a software developer.
            Throughout this journey, I have undertaken the development of fundamental projects
             and acquired proficiency in emerging technologies.
            <br/>
            <br />
            The allure of programming lies in its inherent elegance and the ability to construct purposeful solutions. 
            For me, it represents an ongoing odyssey, where the potential for learning and innovation remains boundless. 
            I am passionate about the dynamic nature of this field, 
            continually seeking opportunities to expand my knowledge and craft innovative solutions.
            </p>
       </motion.div>
    </div>
  )
}