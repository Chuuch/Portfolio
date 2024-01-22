/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[500px] xl:w-[600px]
                        snap-center bg-gray-100 dark:bg-gray-900 p-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()} alt='telerik'
            className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'>
            
                    
        </motion.img>

        <div className='px-0 md:px-10 flex flex-col items-start'>
            <h4 className='text-green-500 dark:text-green-600 lg:text-4xl md:text-3xl text-2xl font-light'>
                {experience?.jobTitle}
            </h4>

            <p className='font-bold text-lg md:text-2 lg:text-2xl mt-1'>
                {experience?.company}
            </p>

            <div className='flex space-x-2 my-2'>
                {experience.technologies.map((technology) => (
                    <img 
                        key={technology._id}
                        className='h-8 w-8 rounded-full'
                        src={urlFor(technology.image).url()}/>
                ))}

            </div>

            <p className='uppercase py-5 text-gray-500 text-sm md:text-base'>
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere
                ? 'Present'
                : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 text-base md:text-lg'>
               {experience.points.map((point, index) => (
                <li key={index}>
                    {point}
                </li>
               ))}
            </ul>

        </div>
        
    </article>
  )
}

export default ExperienceCard