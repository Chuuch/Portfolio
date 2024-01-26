/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import { HiDownload } from 'react-icons/hi';

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, Im Daniel!`,
			'CodingEnthusiast.tsx',
			'<Future Full-stack Ninja />',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={urlFor(pageInfo?.heroImage).url()}
				alt="heroImage"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] lg:tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-2xl md:text-2xl lg:text-6xl font-semibold px-10 text-blue-600 dark:text-[#ddd]">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#ddd" />
				</h1>

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
				<div className="flex items-center justify-center pt-10 space-x-5 cursor-pointer">
					<a
						href="/CV.pdf"
						download={true}
						className="heroButton flex flex-row"
					>
						Download CV <HiDownload size={16} className="ml-1" />
					</a>
				</div>
			</div>
		</div>
	);
}
