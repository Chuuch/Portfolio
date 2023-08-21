import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
                        xl:items-center p-5'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'>
        <SocialIcon url='https://www.facebook.com/daniel.chuchulev' fgColor='#4267B2' bgColor='transparent' className='hover:scale-150'/>
        <SocialIcon url='https://www.instagram.com/chuchulev/' fgColor='#C13584' bgColor='transparent'className='hover:scale-150'/>
        <SocialIcon url='https://www.linkedin.com/in/chuchulev/'fgColor='#0077B5' bgColor='transparent'className='hover:scale-150'/>
        <SocialIcon url='https://twitter.com/chuchulev'fgColor='#1DA1F2' bgColor='transparent'className='hover:scale-150'/>
        <SocialIcon url='https://github.com/Chuuch' fgColor='teal' bgColor='transparent'className='hover:scale-150'/>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center cursor-pointer'>
        <SocialIcon className='cursor-pointer hover:scale-150' network='email' fgColor='#008080' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-teal-600'>Get In Touch</p>
      </motion.div>
    </header>
  )
}