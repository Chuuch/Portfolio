import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dklogo2 from '../public/dklogo2.jpg'
import zendesk from '../public/zendesk.png'
import jira from '../public/jira.png'
import slack from '../public/slack.png'

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
            <Image src={dklogo2} alt='dk'
                    className='h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'/>
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-white text-4xl font-light'>
                Trading Support Manager
            </h4>

            <p className='text-white font-bold text-2xl mt-1'>
                DraftKings Inc.
            </p>

            <div className='flex space-x-2 my-2'>
                <Image src={zendesk} alt='zendesk'
                        className='h-10 w-10 rounded-full'/>
                <Image src={jira} alt='jira'
                        className='h-10 w-16 rounded-full'/>
                <Image src={slack} alt='slack'
                        className='h-10 w-10 rounded-full'/>

            </div>

            <p className='uppercase py-5 text-gray-300'>
                22 MAY 2019 - 31 MAR 2022
            </p>

            <ul className='list-disc space-y-4 ml-5 text-lg text-white'>
                <li>Provide exceptional customer service through demonstrating product knowledge.</li>
                <li>Effectively communicate with customers across several channels – phone, email, chat, and social media.</li>
                <li>Promote the DraftKings brand through conflict resolution abilities and effective communication skills.</li>
                <li>Advocate for players to help us grow the business.</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard