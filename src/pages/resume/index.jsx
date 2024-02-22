import Page from '../../components/layout/Page';
import Subheading from '../../components/ui/Subheading';
import { MdOutlineEmail } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { RiUserStarLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';
import { LuDot } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

const ResumeContainer = ({ children, className }) => {
    return <div className={`rounded-2xl border-[1px] border-slate-700 bg-black-secondary p-6 ${className}`}>{children}</div>
}

const Divider = () => {
    return <div className='h-[1px] -mx-6 my-6 bg-slate-700' />
}

const ProfileIcon = () => {
    return <div className='bg-slate-800 rounded-2xl p-3 w-fit border-[1px] border-slate-700'><RiUserStarLine size='2rem' /></div>
}

const LocationLine = ({ children }) => {
    return (
        <div className='flex gap-2 items-center my-6'>
            <CiLocationOn size='1.2rem' />
            <p>{children}</p>
        </div>
    )
}

const ExperienceComponent = ({ position, company, type, location, dateFromTo, description }) => {
    return (
        <div className='flex gap-6'>
            <div className='size-2 bg-white rounded-full mt-[10px] -ml-[5px]' />
            <div className='w-full'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-xl font-normal'>{position}</h3>
                        <div className='flex gap-1 items-center'>
                            <p>{company}</p>
                            <LuDot />
                            <p>{type}</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='flex gap-3 h-fit items-center bg-slate-800 rounded-xl px-4 py-2 w-fit border-[1px] border-slate-700'>
                            <IoCalendarOutline />
                            <p className='text-white'>{dateFromTo}</p>
                        </div>
                    </div>

                </div>
                <LocationLine>{location}</LocationLine>
                <p className='max-w-[430px]'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function index() {
    return (
        <Page>
            <div className='max-w-[768px] mx-auto py-24'>
                <div className='text-center'>
                    <div className='flex justify-center mb-10'>
                        <div className='px-3 py-2 border-2 border-black-tertiary rounded-lg flex items-center gap-2'>
                            <div className='bg-green-500 size-2 rounded-full animate-ping' />
                            Available for work
                        </div>
                    </div>
                    <h1>Jacob Lind</h1>
                    <Subheading className='-mt-5'>Full Stack Developer with Expertise in Business Efficiency</Subheading>
                </div>
                <div className='flex justify-center gap-4 mt-10'>
                    <a href='mailto:contact@jacoblind.me'>
                        <button className='px-4 py-3 rounded-xl flex gap-3 text-lg bg-blue-primary hover:bg-blue-600 transition-color duration-300'>
                            <MdOutlineEmail size='1.5rem' className='mt-[1px]' />
                            Send Email
                        </button>
                    </a>
                    <button className='px-4 py-3 rounded-xl flex gap-3 text-lg bg-blue-primary bg-opacity-10 hover:bg-opacity-20 transition-color duration-300'>
                        <HiDownload size='1.5rem' />
                        Download Resume
                    </button>
                </div>
                <div className='mt-24 flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <ResumeContainer className={`md:w-1/3 bg-[url('src/assets/profilePhoto.png')] bg-cover bg-center`} />
                        <ResumeContainer className='md:w-2/3 pb-2'>
                            <ProfileIcon />
                            <h2 className='text-2xl text-white mb-3'>Professional profile</h2>
                            <p>
                                Accomplished Senior Data Scientist & Business Consultant with a proven track record of leveraging advanced analytics to drive strategic decision-making and optimize business processes.
                                Demonstrated expertise in developing innovative solutions to complex problems, coupled with exceptional communication skills to effectively convey insights to stakeholders at all levels.
                            </p>
                            <LocationLine>Based in Aarhus, Denmark.</LocationLine>
                        </ResumeContainer>
                    </div>
                    <ResumeContainer>
                        <p className='text-center mb-6'>Worked With</p>
                        <Divider />
                        <PartnersLogoBar />
                    </ResumeContainer>
                    <ResumeContainer>
                        <ProfileIcon />
                        <div className='md:w-2/3'>
                            <h2 className='text-2xl text-white mb-3'>Work Experience</h2>
                            <p className='mb-8'>Proven track record in data science and business consulting, delivering impactful insights and results across industries.</p>
                        </div>
                        <Divider />
                        <div className='flex'>
                            <div className='w-[2px] bg-slate-700 mt-3 mb-1' />
                            <div className='flex flex-col gap-10 w-full'>
                                <ExperienceComponent
                                    position='IT Project Manager'
                                    company='DEKRA'
                                    type='Full-Time'
                                    location='Remote - Copenhagen, Denmark'
                                    dateFromTo='Jun 2022 - Present'
                                    description={`Genansat for at lede udviklingen af et data warehouse samt data-visualiseringer, der skal ligge til grund for DEKRA's ledelses beslutninger. 
                                                    Opgaven har været at følge pengene i organisationen og besvare hvilke afdelinger, produkter og indsatser der skaber positiv omsætning.
                                                    For at løse opgaven har jeg anvendt SQL, Node.js og JavaScript til at udvikle og implementere cloud-baserede funktioner i GCP (Google Cloud Product), optimeret til skalerbarhed og ydeevne.
                                                    Dette gjorde jeg ved at anvende DevOps tilgangen for at sikre at vedligeholdelse af løsningen i fremtiden vil være nem og overskuelig.`
                                                }
                                />
                                <ExperienceComponent
                                    position='IT Project Manager'
                                    company='DEKRA'
                                    type='Full-Time'
                                    location='Remote - Copenhagen, Denmark'
                                    dateFromTo='Jun 2022 - Present'
                                    description={`Genansat for at lede udviklingen af et data warehouse samt data-visualiseringer, der skal ligge til grund for DEKRA's ledelses beslutninger. 
                                                    Opgaven har været at følge pengene i organisationen og besvare hvilke afdelinger, produkter og indsatser der skaber positiv omsætning.
                                                    For at løse opgaven har jeg anvendt SQL, Node.js og JavaScript til at udvikle og implementere cloud-baserede funktioner i GCP (Google Cloud Product), optimeret til skalerbarhed og ydeevne.
                                                    Dette gjorde jeg ved at anvende DevOps tilgangen for at sikre at vedligeholdelse af løsningen i fremtiden vil være nem og overskuelig.`
                                                }
                                />
                            </div>
                        </div>
                    </ResumeContainer>
                    <ResumeContainer>
                        <p>
                            My journey in tech began at 14, fueled by curiosity and a passion for creation. Despite detours through molecular biology and medicine, my love for coding remained unshaken, leading me to build a successful company and later, navigate the complexities of entrepreneurship in Bangkok. These experiences taught me resilience and the value of trust, shaping my approach to both life and work.
                            At DEKRA, I transformed a department's efficiency by automating and optimizing processes, exemplifying my ability to blend technical skill with innovative thinking. This project not only increased productivity but also demonstrated my knack for seeing beyond code to its impact on people and processes.
                            Now, with a solid foundation in computer science and hands-on experience in developing scalable solutions, I stand ready to tackle new challenges. My journey reflects a relentless pursuit of growth, a deep love for coding, and a proven track record of turning obstacles into stepping stones toward success.
                        </p>
                    </ResumeContainer>
                </div>
            </div>
        </Page>
    )
}
