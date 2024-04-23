import Container from './components/Container';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import IconBox from '../components/IconBox';
import Location from '../components/Location';
import { IoHeadsetOutline } from "react-icons/io5";
import Header from './components/Header';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { RiUserStarLine } from "react-icons/ri";
import resumeData from '../../../resumeData.json';
import { FaGlobe } from "react-icons/fa";

export default function index() {

    return (
        <div id='resume-download' className={`m-auto w-[794px] h-[1123px] p-5 bg-[#f9f9f9] *:gap-2 *:*:gap-2 *:*:*:gap-2 *:*:*:*:gap-2`}>
            <div className='h-full overflow-hidden'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2 flex flex-col h-[1083px]'>
                        <div className='flex'>
                            <Container className={`w-[180px] bg-[url('/profilePhoto.webp')] bg-cover bg-[center_-10px]`} />
                            <Container className=''>
                                <IconBox size='sm' IconComponent={GoRocket} />
                                <h1>Jacob Lind</h1>
                                <p className='!text-xs'>{resumeData.tagline}</p>
                                <Location locationText={resumeData.location} size='sm' className={'mb-0'} />
                            </Container>
                        </div>
                        <Container>
                            <Header IconComponent={RiUserStarLine} title='Professional Profile' />
                            <p>{resumeData.profile}</p>
                        </Container>
                        <WorkExperience data={resumeData} />
                    </div>
                    <div className='flex flex-col h-[1083px]'>
                        <Container>
                            <Header IconComponent={IoHeadsetOutline} title='Contact' />
                            <div className='flex flex-col gap-2 *:gap-2 *:flex *:items-center'>
                                <a href='tel:+4521221945'>
                                    <FaPhoneAlt size='0.8rem' className='text-[#8e8e92]' />
                                    <p className='underline underline-offset-2'>+45 21221945</p>
                                </a>
                                <a href='mailto:contact@jacoblind.me'>
                                    <FaEnvelope size='0.8rem' className='text-[#8e8e92]' />
                                    <p className='underline underline-offset-2'>contact@jacoblind.me</p>
                                </a>
                                <a href='https://jacoblind.me' target='_blank'>
                                    <FaGlobe size='0.8rem' className='text-[#8e8e92]' />
                                    <p className='underline underline-offset-2'>jacoblind.me</p>
                                </a>
                                <a href='https://www.linkedin.com/in/jacoblindseo/' target='_blank'>
                                    <FaLinkedin size='0.8rem' className='text-[#8e8e92]' />
                                    <p className='underline underline-offset-2'>linkedin.com/in/jacoblindseo</p>
                                </a>
                                <a href='https://github.com/lindjacob' target='_blank'>
                                    <FaGithub size='0.8rem' className='text-[#8e8e92]' />
                                    <p className='underline underline-offset-2'>github.com/lindjacob</p>
                                </a>
                            </div>
                        </Container>
                        <Skills />
                        <Languages />
                        <Education />
                    </div>
                </div>
            </div>
        </div>
    )
}

