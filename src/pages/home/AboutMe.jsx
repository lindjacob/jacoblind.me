import React from 'react';
import Section from '../../components/layout/Section';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import { BiLogoTypescript } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbBrandGoogleBigQuery, TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaDocker, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud, SiNextdotjs } from 'react-icons/si';

function AboutMe() {
    return (
        <Section>
            <div className='flex flex-col gap-12 lg:flex-row'>
                <div className='flex flex-col lg:w-3/5'>
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
                    <ArrowLink link='/resume' anchorText='My Resume' size='xl' className='mt-8' />
                </div>
                <div className='flex flex-col items-center lg:w-2/5'>
                    <div className='flex justify-center items-center rounded-full bg-gray-800 relative mx-auto w-64 h-64 xsm:w-80 xsm:h-80 sm:h-96 sm:w-96'>
                        <RiJavascriptFill className='absolute                   top-0                       size-12                                         xsm:size-16                                 sm:size-20' />
                        <FaReact className='absolute                            top-7 right-9               size-10     xsm:top-9 xsm:right-10              xsm:size-14     sm:top-10 sm:right-14       sm:size-16 ' />
                        <SiNextdotjs className='absolute                        top-7 left-9                size-10     xsm:top-9 xsm:left-10               xsm:size-14     sm:top-10 sm:left-14        sm:size-16' />
                        <SiTailwindcss className='absolute                      top-16                      size-12     xsm:top-[5.5rem]                    xsm:size-14     sm:top-28                   sm:size-16' />
                        <FaCss3Alt className='absolute                          top-[5.7rem] right-12       size-10     xsm:top-28 xsm:right-14             xsm:size-14     sm:top-32                   sm:size-16' />
                        <FaGitAlt className='absolute                           top-[5.5rem] left-12        size-10     xsm:top-[6.8rem] xsm:left-14        xsm:size-14     sm:top-[7.9rem]             sm:size-16' />
                        <FaPython className='absolute                           right-0                     size-8                                          xsm:size-10                                 sm:size-12' />
                        <HiCommandLine className='absolute                      left-0                      size-8                                          xsm:size-10                                 sm:size-12' />
                        <FaHtml5 className='absolute                            bottom-20 left-20           size-8      xsm:bottom-24 xsm:left-24           xsm:size-10     sm:bottom-28 sm:left-28     sm:size-12' />
                        <TbSql className='absolute                              bottom-[4.8rem] right-20    size-12     xsm:bottom-[5.8rem] xsm:right-24    xsm:size-14     sm:bottom-28 sm:right-28    sm:size-16' />
                        <TbBrandGoogleBigQuery className='absolute              bottom-16 right-4           size-8      xsm:bottom-20 xsm:right-6           xsm:size-10                                 sm:size-12' />
                        <BiLogoTypescript className='absolute                   bottom-16 left-4            size-8      xsm:bottom-20 xsm:left-6            xsm:size-10                                 sm:size-12' />
                        <FaDocker className='absolute                           bottom-12                   size-6      xsm:bottom-14                       xsm:size-8      sm:bottom-16                sm:size-10' />
                        <SiGooglecloud className='absolute                      bottom-4 right-2/3          size-6      xsm:bottom-6                        xsm:size-8                                  sm:size-10' />
                        <SiDjango className='absolute                           bottom-4 left-2/3           size-6      xsm:bottom-6                        xsm:size-8                                  sm:size-10' />
                        <FaJava className='absolute                             bottom-0                    size-6                                          xsm:size-8                                  sm:size-10' />
                    </div>
                    <p className='text-gray-primary mt-4'>Some tools I am familiar with</p>
                </div>
            </div>
        </Section>
    )
}

export default AboutMe
