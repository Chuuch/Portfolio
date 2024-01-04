'use client';
import Image from "next/image";
import certificate from '../public/certificate.jpeg'
import {motion} from 'framer-motion';

const Qualifications = () => {
	return (
		<div
			className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full
    mx-auto justify-evenly items-center z-0 "
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Qualifications
			</h3>
            <motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="flex items-center justify-center">
            <Image src={certificate} alt="certificate" className="w-[700px]"/>
            </motion.div>
		</div>
	);
};

export default Qualifications;
