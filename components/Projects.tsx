import Image from 'next/image';
import React from 'react'
import netflix_clone_app from '../public/netflix_clone_app.png'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full
                    mx-auto justify-evenly items-center z-0 '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
                        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#008080]/80'>

          {projects.map((project, i) => (

            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true }}>
                <Image src={netflix_clone_app} alt='netflix' className='w-[500px]'/>
              </motion.div>

              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-white text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#008080]/50'>
                    Case Study {i+1} of {projects.length}:
                    </span> Netflix Clone
                </h4>

                <p className='text-sm md:text-base md:text-left text-white text-center'>
                  Netflix 2.0 app that has a Log In and Log Out Authentication with Google.
                  It has a beautiful Home Screen with all the movies looking just like Netflix.
                  There is also a subscription page where you can see your active monthly subscription.
                  We also use Stripe Payments for the monthly Netflix Subscriptions!
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full absolute -skew-y-12 top-[30%] bg-[#008080]/10 left-0 h-[500px]'>

        </div>
    </motion.div>
  )
}

export default Projects