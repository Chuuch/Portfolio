/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 md:space-y-10 flex-shrink-0 w-72 h-[420px] md:w-[450px] md:h-[550px] lg:w-[500px] xl:w-[500px] xl:h-[600px]
                        snap-center bg-gray-100 dark:bg-gray-900 p-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()} alt='telerik'
            className='h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:w-[150px] xl:h-[150px] rounded-full  object-cover object-center'>
            
                    
        </motion.img>

        <div className='px-0 md:px-10 flex flex-col items-start'>
            <h4 className='text-green-500 dark:text-green-600 lg:text-3xl md:text-3xl text-xl font-light'>
                {experience?.jobTitle}
            </h4>

            <p className='font-bold text-md md:text-2xl lg:text-2xl mt-1'>
                {experience?.company}
            </p>

            <div className='flex space-x-2 my-2'>
                {experience.technologies.map((technology) => (
                    <img 
                        key={technology._id}
                        className='lg:h-8 lg:w-8 md:w-8 md:h-8 h-6 w-6 rounded-full'
                        src={urlFor(technology.image).url()}/>
                ))}

            </div>

            <p className='uppercase py-4 text-gray-500 text-xs md:text-base lg:text-base'>
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere
                ? 'Present'
                : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4 ml-5 lg:text-base md:text-lg text-xs'>
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