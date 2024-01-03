import Image from 'next/image';
import React from 'react';
import netflix_clone_app from '../public/netflix_clone_app.png';
import Forum from '../public/Forum.png'
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
	const projects = [1, 2, 3, 4, 5];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full
                    mx-auto justify-evenly items-center z-0 "
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>

			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
                        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#008080]/80"
			>
				{projects.map((project, i) => (
					<div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
						<motion.div initial={{ y: -300, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
						>
							<Image
								src={Forum}
								alt="Forum"
								className="xl:w-[700px] xl:h-[300px] rounded-md"
							/>
						</motion.div>

						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#008080]/50">
									Case Study {i + 1} of {projects.length}:
								</span>{' '}
								DevTalk Forum
							</h4>

							<p className="text-sm md:text-base md:text-left text-center">
							DevTalk Forum is a modern and efficient forum application for software development.
							This project is built using React, Tailwind CSS, and Firebase Realtime Database to provide users with a seamless and responsive forum experience.
							The forum includes features such as user registration, login, post creation, 
							liking and commenting, profile picture uploads, post related notifications and an advanced search functionality.
							Additionally, users can use the contact form to reach out to the project team and apply for admin privileges or enquire about any issues they might face.
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute -skew-y-12 top-[30%] bg-[#008080]/10 left-0 h-[500px]"></div>
		</motion.div>
	);
}

export default Projects;
