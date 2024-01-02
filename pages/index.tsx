/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import Profile from '../public/Profile.jpg'
import Image from 'next/image';

const Home: NextPage = () => {
 return (
      <div className='bg-[#fff] text-gray-500 h-screen snap-y snap-mandatory overflow-y-scroll z-0
                      overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#008080]/80'>
        <Head>
          <title>Daniel's Portfolio</title>
        </Head>

      <Header />

       <section id='hero' className='snap-start'>
        <Hero />
       </section>

       <section id='about' className='snap-center'>
        <About />
       </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>


      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>
    
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image src={Profile} alt='profile' className='w-10 h-10 filter grayscale hover:grayscale-0 cursor-pointer rounded-full justify-center'/>
          </div>
        </footer>
      </Link>
      </div>
    )
}

export default Home;
