import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Qualifications from '@/components/Qualifications';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
	return (
		<div
			className="bg-gray-200 dark:bg-[#121212] text-gray-500 h-screen snap-y snap-mandatory overflow-y-scroll z-0
                      overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-600 dark:scrollbar-thumb-primary-600"
		>
			<Head>
				<title>{pageInfo.name}</title>
			</Head>

			<Header socials={socials} />

			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>

			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience experiences={experiences} />
			</section>

			<section id="skills" className="snap-start">
				<Skills skills={skills} />
			</section>

			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>

			<section id="qualifications" className="snap-start">
				<Qualifications />
			</section>

			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<div className='
						flex items-center justify-center
						rounded-full bg-gradient-to-tr from-primary-500 to bg-secondary-500
						w-10 h-10 hover:scale-110 dark:text-gray-200'>
							<FaArrowUp />
						</div>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;

export const getStaticProps : GetStaticProps<Props> = async () => {
	try {
		const pageInfo: PageInfo = await fetchPageInfo();
		const experiences: Experience[] = await fetchExperiences();
		const skills: Skill[] = await fetchSkills();
		const projects: Project[] = await fetchProjects();
		const socials: Social[] = await fetchSocials();

		return {
			props: {
				pageInfo,
				experiences,
				skills,
				projects,
				socials,
			},
			revalidate: 10,
		};
	} catch (error) {
		console.log('Error fetching data:', error);
		throw error;
	}
};
