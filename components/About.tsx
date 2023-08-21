import Image from 'next/image'
import React from 'react'
import Batak from '../public/Batak.jpg'
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

            <Image src={Batak} alt='batak'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg
                        md:w-[1600px] md:h-64 xl:w-[2500px] xl:h-[600px] '/>
       </motion.div>

       <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold text-white'>
                Here is a <span className='underline decoration-[#008080]/50'>little</span> background
            </h4>
            <p className='text-sm xl:text-base md:text-base text-white'>
                Hello there! My name is Daniel and this is my portfolio.
                I got into coding the last few years as a hobby in my free time building
                basic projects and learning new technologies. After wandering around companies working
                as customer support, trading support & financial analyst, I decided I finally need to get 
                a job I would actually enjoy and build a great career. So, what better decision than to
                turn my hobby into my profession? Programming sparked my interest as there is a certain beauty
                in building something with a purpose. Personally, I see it as a never ending adventure because you can
                always keep learning and creating new things!
            </p>
       </motion.div>
    </div>
  )
}