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
        <div id='resume-download'>
            <div className={`m-auto w-[794px] h-[calc(1123px*1)] p-5 bg-[#f9f9f9] *:gap-2 *:*:gap-2 *:*:*:gap-2 *:*:*:*:gap-2`}>
                <div className='h-full overflow-hidden'>
                    <div className='grid grid-cols-3'>
                        <div className='col-span-2 flex flex-col h-[1083px]'>
                            <div className='flex items-stretch'>
                                <Container className="w-[150px] shrink-0 min-h-0 p-0 overflow-hidden">
                                    <img
                                        src="/profilePhoto.webp"
                                        alt="Jacob Lind"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </Container>
                                <Container className=''>
                                    <IconBox size='sm' IconComponent={GoRocket} />
                                    <h1>Jacob Lind</h1>
                                    <p className='!text-xs'>{resumeData.tagline}</p>
                                    <Location locationText={resumeData.location} size='sm' className={'mb-0'} />
                                </Container>
                            </div>
                            <Container>
                                <Header IconComponent={RiUserStarLine} title='Professional profile' />
                                <p>{resumeData.profile.professional}</p>
                            </Container>
                            <Education />
                            <Languages />
                        </div>
                        <div className='flex flex-col h-[1083px]'>
                            <Container>
                                <Header IconComponent={IoHeadsetOutline} title='Contact' />
                                <div className='flex flex-col gap-2 *:gap-2 *:flex *:items-center'>
                                    <a href='tel:+4521221945'>
                                        <FaPhoneAlt size='0.8rem' className='text-[#8e8e92]' />
                                        <p className='underline underline-offset-2'>+45 21221945</p>
                                    </a>
                                    <a href='mailto:jacob.lind2@gmail.com'>
                                        <FaEnvelope size='0.8rem' className='text-[#8e8e92]' />
                                        <p className='underline underline-offset-2'>jacob.lind2@gmail.com</p>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className={`m-auto w-[794px] h-[calc(1123px*1)] p-5 bg-[#f9f9f9] *:gap-2 *:*:gap-2 *:*:*:gap-2 *:*:*:*:gap-2`}>
                <div className='h-full overflow-hidden'>
                    <div className='flex flex-col h-[1083px]'>
                        <WorkExperience data={resumeData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

