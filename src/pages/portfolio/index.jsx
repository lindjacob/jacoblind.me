import Page from '../../components/layout/Page';
import Section from '../../components/layout/Section';
import ProjectCard from '../../components/ProjectCard';
import simpleFinancePlannerImg from '../../assets/simple-finance-planner.png'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export default function index() {
    return (
        <Page>
            <Section>
                <div className='flex flex-col items-center'>
                    <h1>Portfolio</h1>
                    <p className='subheading text-center'>Here you find a list of projects I have built for fun to showcase some of my abilities. <br /> All project are have links to their GitHub repo.</p>
                </div>
                <div className='group/portfolios mt-20 flex flex-col sm:flex-row sm:flex-wrap gap-5'>
                    <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                    <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                    <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                    <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                    <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                    <div className='w-full min-h-[580px] sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)] flex items-center justify-center rounded-3xl transition-all duration-300 group-hover/portfolios:opacity-50 dark:hover:opacity-100 border-4 border-dashed border-gray-800'>
                        <p className='text-xl'>More projects coming</p>
                    </div>
                </div>
            </Section>
        </Page>
    )
}
