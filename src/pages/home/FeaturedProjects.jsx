import React from 'react';
import Container from '../../components/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import SimpleFinancePlanner from '../../assets/simple-finance-planner.png';

const Card = () => {
    return (
        <a href='/portfolio/simple-finance-planner'
            className='w-full lg:w-1/3 flex flex-col bg-gray-800 rounded-3xl overflow-clip cursor-pointer group/parent transition-all duration-300 group-hover/portfolios:opacity-50 dark:hover:opacity-100 hover:scale-105 hover:shadow-lg'
        >
            <div className='h-3/4 box-border overflow-hidden'>
                <img src={SimpleFinancePlanner} className='group-hover/parent:scale-110 transition-all duration-300' />
            </div>
            <div className='p-10'>
                <div className='flex gap-4 self-end'>
                    <FaReact size='3em' className='bg-gray-500 rounded-md p-2' />
                    <SiTailwindcss size='3em' className='bg-gray-500 rounded-md p-2' />
                </div>
                <h4 className='text-2xl font-semibold mt-6 mb-2'>Simple Finance Planner</h4>
                <p className='text-gray-primary text-lg'>A continous project where I build the tool I always needed to predict my finances</p>
                <ArrowLink link='/portfolio/simple-finance-planner' anchorText='VIEW PROJECT' color='text-white' size='md' parentGroup={true} />
            </div>
        </a>
    )
}

export default function FeaturedProjects() {
    return (
        <section className='py-20 bg-black-secondary flex items-center'>
            <Container className='flex flex-col'>
                <div className='flex flex-col justify-between mb-10 lg:flex-row'>
                    <div className='flex flex-col lg:w-2/3'>
                        <SectionTitle title='My Portfolio' />
                        <h2>
                            Take a look at the latest projects I've done
                        </h2>
                    </div>
                    <div className='flex lg:w-1/3 lg:flex-row-reverse'>
                        <div className='w-fit self-end lg:mb-8'>
                            <ArrowLink link='/portfolio' anchorText='Browse all Projects' color='text-blue-primary' size='lg' />
                        </div>
                    </div>
                </div>

                <div className='group/portfolios flex flex-col lg:flex-row gap-10'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Container>
        </section>
    )
}
