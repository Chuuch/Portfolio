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

const Home: NextPage = () => {
 return (
      <div className='bg-[#000015] text-teal-600 h-screen snap-y snap-mandatory overflow-y-scroll z-0
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
      </div>
    )
}

export default Home;
