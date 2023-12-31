import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '@/typings';
import ThemeSwitch from './ThemeSwitch';

type Props = {
	socials: Social[];
};

export default function Header({ socials }: Props) {
	return (
		<header
			className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
                        xl:items-center p-5"
		>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				{socials.map((social) => (
					<SocialIcon
            key={social._id}
						url={social.url}
						fgColor="#008080"
						bgColor="transparent"
						className="hover:scale-110"
					/>
				))}
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center cursor-pointer"
			>
				<ThemeSwitch />
				<SocialIcon
					className="cursor-pointer hover:scale-110"
					network="email"
					fgColor="#008080"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-teal-600">
					Get In Touch
				</p>
			</motion.div>
		</header>
	);
}
