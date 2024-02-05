/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	return (
		<section className="h-screen flex flex-col justify-center text-center overflow-hidden">
			<div className="grid grid-cols-1 sm:grid-cols-12 px-20 lg:px-52">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<h1 className="text-gray-400 dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I&apos;m{' '}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								'Daniel',
								1000,
								'Web Developer',
								1000,
								'JS Enthusiast',
								1000,
								'Telerik Graduate',
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
					𝙋𝙧𝙤𝙜𝙧𝙚𝙨𝙨 𝙞𝙨 𝙣𝙤𝙩 𝙖𝙘𝙝𝙞𝙚𝙫𝙚𝙙 𝙗𝙮 𝙡𝙪𝙘𝙠 𝙤𝙧 𝙖𝙘𝙘𝙞𝙙𝙚𝙣𝙩, 𝙗𝙪𝙩 𝙗𝙮 𝙬𝙤𝙧𝙠𝙞𝙣𝙜 𝙤𝙣 𝙮𝙤𝙪𝙧𝙨𝙚𝙡𝙛 𝙙𝙖𝙞𝙡𝙮.
					</p>
					<div>
						<Link
							href="#contact"
							className="
						px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4
						bg-gradient-to-br from-primary-500 to-secondary-500
						hover:bg-slate-200 text-white "
						>
							Hire me
						</Link>
						<a
							download
							href='/CV.pdf'
							className="
						px-1 inline-block py-1 w-full sm:w-fit rounded-full
						bg-gradient-to-br from-primary-500 to-secondary-500
						hover:bg-slate-800 text-white mt-3"
						>
							<span className="block bg-transparent dark:bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div
						className="
					rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
					>
						<Image
						className='absolute transform -translate-y-3'
						src={urlFor(pageInfo?.heroImage).url()}
						alt="heroImage"
						width={400}
						height={400} />
					</div>
				</motion.div>
			</div>
			
			{/* <motion.img
				className="relative h-48 w-48 mx-auto"
				src={urlFor(pageInfo?.heroImage).url()}
				alt="heroImage"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] lg:tracking-[15px]">
					{pageInfo?.role}
				</h2>
				

				 <div className="pt-5 space-y-4 justify-evenly">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
					<Link href='#qualifications'>
						<button className="heroButton">Qualifications</button>
					</Link>
				</div>
			</div> */}
		</section>
	);
}
