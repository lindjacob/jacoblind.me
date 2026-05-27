import React from 'react';
import Section from '../../components/layout/Section';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import { BiLogoTypescript, BiLogoGraphql } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaDocker, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud, SiNextdotjs } from 'react-icons/si';
import useInViewTransition from '../../hooks/useInViewTransition';

function AboutMe() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-300'
    });

    return (
        <Section id='about-me' className={`relative z-20`}>
            <div className='flex flex-col gap-12 lg:flex-row items-center'>
                <div ref={ref1} className={`flex flex-col lg:w-1/2 ${transitionClasses1}`}>
                    <SectionTitle title='About Me' />
                    <h2>Expertise in Digital Product Innovation</h2>
                    <p>
                        I started coding at the age of 14 and founded my first succesful company with employees at the age of 26.
                        My experiences make me uniquely qualified for digital product innovation and development as well as project management.
                        My aim is always to create solutions that not only meet but exceed expectations.
                    </p>
                    <ArrowLink link='/resume' anchorText='My Resume' size='xl' className='mt-8' />
                </div>
                <div ref={ref2} className={`flex flex-col items-center lg:items-end lg:w-1/2 ${transitionClasses2}`}>
                    <div>
                        <div className='flex justify-center items-center rounded-full bg-gray-800 relative mx-auto w-64 h-64 xsm:w-80 xsm:h-80 sm:h-96 sm:w-96'>
                            <RiJavascriptFill className='absolute                   -top-1                       size-12    xsm:-top-[6px]                      xsm:size-16     sm:-top-2                           sm:size-20' />
                            <FaReact className='absolute                            top-7 right-9               size-10     xsm:top-9 xsm:right-10              xsm:size-14     sm:top-10 sm:right-14               sm:size-16 ' />
                            <SiNextdotjs className='absolute                        top-7 left-9                size-10     xsm:top-9 xsm:left-10               xsm:size-14     sm:top-10 sm:left-14                sm:size-16' />
                            <SiTailwindcss className='absolute                      top-16                      size-12     xsm:top-[5rem]                      xsm:size-14     sm:top-24                           sm:size-16' />
                            <TbSql className='absolute                              top-[5.2rem] right-12       size-12     xsm:top-[6.5rem] xsm:right-16       xsm:size-16     sm:top-[7.4rem] sm:right-[4.4rem]   sm:size-20' />
                            <BiLogoTypescript className='absolute                   top-[5.5rem] left-12        size-10     xsm:top-[6.8rem] xsm:left-16        xsm:size-14     sm:top-[7.9rem]                     sm:size-16' />
                            <FaPython className='absolute                           right-0                     size-8                                          xsm:size-10                                         sm:size-12' />
                            <FaGitAlt className='absolute                           left-0                      size-8                                          xsm:size-10                                         sm:size-12' />
                            <FaHtml5 className='absolute                            bottom-20 left-20           size-8      xsm:bottom-24 xsm:left-24           xsm:size-10     sm:bottom-28 sm:left-28             sm:size-12' />
                            <FaCss3Alt className='absolute                          bottom-20 right-20          size-8      xsm:bottom-24 xsm:right-24          xsm:size-10     sm:bottom-28 sm:right-28            sm:size-12' />
                            <BiLogoGraphql className='absolute                      bottom-16 right-4           size-8      xsm:bottom-20 xsm:right-6           xsm:size-10                                         sm:size-12' />
                            <HiCommandLine className='absolute                      bottom-16 left-4            size-8      xsm:bottom-20 xsm:left-6            xsm:size-10                                         sm:size-12' />
                            <FaDocker className='absolute                           bottom-12                   size-6      xsm:bottom-14                       xsm:size-8      sm:bottom-16                        sm:size-10' />
                            <SiGooglecloud className='absolute                      bottom-4 right-2/3          size-6      xsm:bottom-6                        xsm:size-8                                          sm:size-10' />
                            <SiDjango className='absolute                           bottom-4 left-2/3           size-6      xsm:bottom-6                        xsm:size-8                                          sm:size-10' />
                            <FaJava className='absolute                             bottom-0                    size-6                                          xsm:size-8                                          sm:size-10' />
                        </div>
                        <p className='mt-4 text-center'>Some tools I am familiar with</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutMe
