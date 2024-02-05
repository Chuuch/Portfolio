/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function ContactMe({}: Props) {
	const { register, handleSubmit, reset } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:daniel.chuchulev96@gmail?subject=${formData.subject}&body=
        Hi, my name is ${formData.name}.

        ${formData.message}`;
		reset();
	};

	return (
		<div
			className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
                    justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-16">
				<h4 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center">
					Like what your see?{' '}
					<span className="decoration-primary-500/50 underline">
						Let's link up!
					</span>
				</h4>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto text-sm"
				>
					<div className="flex space-x-2">
						<input
							{...register('name')}
							placeholder="Name"
							className="contactInput"
							type="text"
						/>
						<input
							{...register('email')}
							placeholder="Email"
							className="contactInput"
							type="email"
						/>
					</div>

					<input
						{...register('subject')}
						placeholder="Subject"
						className="contactInput"
						type="text"
					/>

					<textarea
						{...register('message')}
						placeholder="Message"
						className="contactInput"
					/>

					<button
						type="submit"
						className="
						bg-gradient-to-br from-primary-500 to-secondary-500 lg:py-5
						lg:px-10 py-3 w-56 self-center rounded-md text-black font-bold
						lg:text-lg text-base"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
