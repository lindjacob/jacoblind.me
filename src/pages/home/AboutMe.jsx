import React from 'react';
import Container from '../../components/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import { BiLogoTypescript } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbBrandGoogleBigQuery, TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaNodeJs, FaDocker, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud } from 'react-icons/si';

function AboutMe() {
    return (
        <section className='h-[70lvh] flex items-center'>
            <Container>
                <div className='flex'>
                    <div className='w-1/2 flex flex-col'>
                        <SectionTitle title='About Me' />
                        <h2>
                            Coding has been my hobby since I was 14
                        </h2>
                        <p className='text-gray-secondary'>
                            I am a creative, self-driven individual with a passion for overcoming challenges and continuously learning.
                            Highly adaptable and thriving in fast-paced environments.
                            I excel when given responsability, ensuring high productivity and seamless collaboration with an emphasis on good communication.
                            Ambitious and sociable, I bring a positive energy and an eagerness to innovate and grow.
                        </p>
                        <ArrowLink link='/resume' anchorText='My Resume' color='text-blue-primary' size='lg' />
                    </div>
                    <div className='w-1/2 flex flex-col  items-center'>
                        <div className='flex justify-center items-center h-96 w-96 rounded-full bg-gray-800 relative mx-auto'>
                            <RiJavascriptFill size='5em' className='absolute top-0' />
                            <FaReact size='4em' className='absolute top-10 right-14' />
                            <FaNodeJs size='4em' className='absolute top-10 left-14' />
                            <FaCss3Alt size='4em' className='absolute top-32 right-16' />
                            <FaGitAlt size='4em' className='absolute top-32 left-16' />
                            <SiTailwindcss size='5em' className='absolute top-28' />
                            <FaPython size='3rem' className='absolute right-0' />
                            <HiCommandLine size='3rem' className='absolute left-0' />
                            <FaHtml5 size='3rem' className='absolute bottom-28 left-28' />
                            <TbSql size='4rem' className='absolute bottom-28 right-28' />
                            <TbBrandGoogleBigQuery size='3rem' className='absolute bottom-20 right-6' />
                            <BiLogoTypescript size='3rem' className='absolute bottom-20 left-6' />
                            <FaDocker size='2rem' className='absolute bottom-16' />
                            <SiGooglecloud size='2rem' className='absolute bottom-6 right-2/3' />
                            <SiDjango size='2rem' className='absolute bottom-6 left-2/3' />
                            <FaJava size='2rem' className='absolute bottom-0' />
                        </div>
                        <p className='text-gray-primary mt-4'>Some tools I am familiar with</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutMe
