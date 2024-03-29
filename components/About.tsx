/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <div
        className='flex flex-col h-screen relative text-center md:left md:flex-row max-w-7xl px-10
                  justify-center mx-auto items-center space-y-5'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
       </h3> 

       <motion.img
            initial={{ x: -200, opacity: 0,}}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}
            className='mt-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg
            md:w-[300px] md:h-96 xl:w-[400px] xl:h-[500px]'
            src={urlFor(pageInfo?.profilePicture).url()} alt='about-photo'>
       </motion.img>

       <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
                Who am I?
              </span>
            </h4>
            <p className='text-sm xl:text-base md:text-sm  whitespace-pre-line xl:w-[600px]'>
            {pageInfo?.backgroundInformation}
            </p>
       </motion.div>
    </div>
  )
}