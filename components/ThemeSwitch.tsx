'use client';

import { IoMoon, IoSunny } from 'react-icons/io5';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeSwitch = () => {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme') as Theme | null;

		if (localTheme) {
			setTheme(localTheme);

		if (localTheme === 'dark') {
			document.documentElement.classList.add('dark');
		}	
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<button
			onClick={toggleTheme}
			className="flex items-center cursor-pointer hover:scale-110 text-[#9E9E9E] transition"
		>
			{theme === 'light' ? <IoMoon size={25} /> : <IoSunny size={25} />}
		</button>
	);
};

export default ThemeSwitch;
