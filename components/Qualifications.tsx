'use client';
import Image from "next/image";
import certificate from '../public/certificate.jpeg'

const Qualifications = () => {
	return (
		<div
			className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full
    mx-auto justify-evenly items-center z-0 "
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Qualifications
			</h3>
            <div className="div">
            <Image src={certificate} alt="certificate" className="w-[700px]"/>
            </div>
		</div>
	);
};

export default Qualifications;
