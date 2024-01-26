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
			<h3 className="absolute top-32 uppercase tracking-[10px] lg:tracking-[20px] text-gray-500 lg:text-2xl md:text-xl text-xl">
				Qualifications
			</h3>
            <motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="flex items-center justify-center">
            <Image src={certificate} alt="certificate" className="lg:w-[700px] md:w-[400px] w-[300px]"/>
            </motion.div>
		</div>
	);
};

export default Qualifications;
