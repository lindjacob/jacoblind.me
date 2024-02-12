import Page from '../components/Page';
import Container from '../components/Container';
import standinPhoto from '../assets/standinPhoto.svg';
import Dekra from '../assets/dekra-logo.png';
import Dtails from '../assets/dtails-logo.svg';
import Connexio from '../assets/connexio-logo.svg';
import KompetenceKanalen from '../assets/kompetence-kanalen-logo.svg';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGitAlt, FaReact, FaPython, FaNodeJs, FaDocker, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { HiCommandLine } from 'react-icons/hi2';
import { TbBrandGoogleBigQuery, TbSql } from 'react-icons/tb';

const Home = () => {
    return (
        <Page>
            <section className='h-[70lvh]'>
                <Container>
                    <div className='flex'>
                        <div className='self-center'>
                            <h1 className='text-white'>Full-Stack Web Developer</h1>
                            <p className='text-gray-primary text-xl'>
                                Code is just a language. Anyone can learn to use it. <br />
                                What matters is that you get a developer who understands your business.
                            </p>
                        </div>
                        <img src={standinPhoto} className='relative right-0 bottom-0 z-0' />
                    </div>
                </Container>
            </section>
            <section className='bg-black-secondary relative z-10'>
                <Container>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-2xl uppercase'>Previously worked with</h2>
                        <div className='flex m-6 gap-10 h-10 justify-center items-center'>
                            <img src={Dekra} className='w-32 mt-2' />
                            <img src={Dtails} className='w-32' />
                            <img src={KompetenceKanalen} className='w-32' />
                            <img src={Connexio} className='w-32' />
                        </div>
                    </div>
                </Container>
            </section>
            <section className='h-[70lvh] flex items-center'>
                <Container>
                    <div className='flex justify-between'>
                        <div className='w-1/2 flex flex-col'>
                            <div className='flex gap-1 text-xl font-bold'>
                                <p className='text-blue-primary'>/</p>
                                <p className='uppercase'>About Me</p>
                            </div>
                            <h2>
                                Coding has been my hobby since I was 14
                            </h2>
                            <p className='text-gray-secondary'>
                                I am a creative, self-driven individual with a passion for overcoming challenges and continuously learning.
                                Highly adaptable and thriving in fast-paced environments.
                                I excel when given responsability, ensuring high productivity and seamless collaboration with an emphasis on good communication.
                                Ambitious and sociable, I bring a positive energy and an eagerness to innovate and grow.
                            </p>
                            <div className='w-fit my-10'>
                                <a href='/resume' className='group cursor-pointer'>
                                    <div className='flex'>
                                        <p className='mb-1 text-2xl'>My Resume</p>
                                        <svg className='w-7 h-7 ml-2 text-blue-primary group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                                        </svg>
                                    </div>
                                    <div className='relative bg-gray-primary w-full h-1 overflow-hidden'>
                                        <div className='absolute h-full w-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300' />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col items-center'>
                            <div className='flex justify-center items-center h-96 w-96 rounded-full bg-gray-800 relative mx-auto'>
                                <div className='absolute top-0'>
                                    <RiJavascriptFill size='5em' alt='Javascript'/>
                                </div>
                                <div className='absolute top-10 right-14'>
                                    <FaReact size='4em' />
                                </div>
                                <div className='absolute top-10 left-14'>
                                    <FaNodeJs size='4em' />
                                </div>
                                <div className='absolute top-32 right-16'>
                                    <FaCss3Alt size='4em' />
                                </div>
                                <div className='absolute top-32 left-16'>
                                    <FaGitAlt size='4em' />
                                </div>
                                <div className='absolute top-28'>
                                    <SiTailwindcss size='5em' />
                                </div>
                                <div className='absolute right-0'>
                                    <FaPython size='3rem' />
                                </div>
                                <div className='absolute left-0'>
                                    <HiCommandLine size='3rem' />
                                </div>
                                <div className='absolute bottom-28 left-28'>
                                    <FaHtml5 size='3rem' />
                                </div>
                                <div className='absolute bottom-28 right-28'>
                                    <TbSql size='4rem' />
                                </div>
                                <div className='absolute bottom-20 right-6'>
                                    <TbBrandGoogleBigQuery size='3rem' />
                                </div>
                                <div className='absolute bottom-20 left-6'>
                                    <BiLogoTypescript size='3rem' />
                                </div>
                                <div className='absolute bottom-16'>
                                    <FaDocker size='2rem' />
                                </div>
                                <div className='absolute bottom-6 right-2/3'>
                                    <SiGooglecloud size='2rem' />
                                </div>
                                <div className='absolute bottom-6 left-2/3'>
                                    <SiDjango size='2rem' />
                                </div>
                                <div className='absolute bottom-0'>
                                    <FaJava size='2rem' />
                                </div>
                            </div>
                            <p className='text-gray-primary mt-4'>Some tools I am familiar with</p>
                        </div>
                    </div>
                </Container>
            </section>
        </Page >
    )
}

export default Home;