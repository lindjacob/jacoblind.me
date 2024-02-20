import React from 'react';
import Section from '../../components/layout/Section';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import ProjectCard from '../../components/ProjectCard';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import simpleFinancePlannerImg from '../../assets/simple-finance-planner.png';

export default function FeaturedProjects() {
    return (
        <Section>
            <div className='flex flex-col justify-between mb-10 lg:flex-row'>
                <div className='flex flex-col lg:w-2/3'>
                    <SectionTitle title='My Portfolio' />
                    <h2>
                        Take a look at the latest projects I've done
                    </h2>
                </div>
                <div className='flex lg:w-1/3 lg:flex-row-reverse'>
                    <div className='mt-5 w-fit self-end lg:mb-8'>
                        <ArrowLink link='/portfolio' anchorText='Browse all Projects' size='xl' weight='semibold' />
                    </div>
                </div>
            </div>

            <div className='group/portfolios flex flex-col sm:flex-row sm:flex-wrap gap-5'>
                <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
                <ProjectCard link='/portfolio/simple-finance-planner' title={'Simple Finance Planner'} description={'A continous project where I build the tool I always needed to predict my finances'} img={simpleFinancePlannerImg} icons={[FaReact, SiTailwindcss]} />
            </div>
        </Section>
    )
}
