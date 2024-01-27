import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import sanity from '../public/sanity.png';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
	directionLeft?: boolean;
	skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(skill?.image).url()}
				alt="sanity"
				className="rounded-full border border-gray-500 object-cover
            w-14 h-14 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
			></motion.img>

			<div
				className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
                        group-hover:bg-white h-14 w-14 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24 rounded-full z-0"
			>
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
