/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Profile from '../public/Profile.jpg'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'
import { HiDownload } from 'react-icons/hi'


type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, Im Daniel!`, 'CodingEnthusiast.tsx', '<Future Full-stack Ninja />'],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt='heroImage' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo?.role}
                </h2>
                    <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-teal-600'>
                        <span className='mr-3'>{text}</span>
                        <Cursor cursorColor='#008080' />
                    </h1>

                    <div className='pt-5'>
                        <Link href='#about'>
                            <button className='heroButton'>About</button>
                        </Link>
                        <Link href='#experience'>
                            <button className='heroButton'>Experience</button>
                        </Link>
                        <Link href='#skills'>
                            <button className='heroButton'>Skills</button>
                        </Link>
                        <Link href='#projects'>
                            <button className='heroButton'>Projects</button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center pt-10 space-x-5 cursor-pointer">
                        <a className='heroButton flex flex-row'>
                            Download CV <HiDownload size={16} className='ml-1'/>
                        </a>
                    </div>
            </div>
      
    </div>
  )
}