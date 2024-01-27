/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full
                    mx-auto justify-evenly items-center z-0 "
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 lg:text-2xl text-lg">
				Projects
			</h3>

			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
                        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-600/80"
			>
				{projects?.map((project, i) => (
					<div
						key={i}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-10 md:p-44 h-screen"
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src={urlFor(project?.image).url()}
							alt="Forum"
							className="
							xl:w-[700px] 
							xl:h-[350px] 
							lg:w-[700px] 
							lg:h-[450px]
							md:h-[350px] 
							md:w-[600px] 
							w-[430px] 
							h-[180px] 
							rounded-md 
							mt-10"
						></motion.img>

						<div className="space-y-4 px-0 md:px-10 max-w-6xl flex flex-col items-center">
							<h4 className="lg:text-4xl text-base md:text-2xl font-semibold text-center">
								{project?.title}
							</h4>
							<div className="flex items-center space-x-4 justify-center">
								{project?.technologies.map((technology) => (
									<img
										className="lg:h-10 lg:w-10 h-6 w-6"
										key={technology._id}
										src={urlFor(technology.image).url()}
										alt=""
									/>
								))}
							</div>
							<p className="text-xs md:text-base md:text-left text-center w-full">
								{project?.summary}
							</p>
							<Link
								className="
							px-4
							py-2
							lg:px-6 
							lg:py-2 
							border 
							border-[#242424] 
							rounded-full 
							uppercase 
							text-xs 
							tracking-[2px]
                		  text-gray-500 
						    transition-all
						  hover:border-blue-600 
						    hover:text-blue-600 
							hover:scale-110
							"
								href={`${project.linkToBuild}`}
							>
								Visit Project
							</Link>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute -skew-y-12 top-[30%] bg-[#008080]/10 left-0 h-[500px]"></div>
		</motion.div>
	);
}

export default Projects;
