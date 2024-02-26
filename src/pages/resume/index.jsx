import Page from '../../components/layout/Page';
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';
import { LuDot } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { PiSuitcaseSimple, PiGraduationCap, PiUserList, PiCertificate, PiDiamondsFour, PiGlobe, PiMedal, PiArrowUpRight, PiCheck, PiChatText, PiDownloadSimple, PiMapPinLight, PiEnvelopeSimple } from "react-icons/pi";
import auLogoWhite from '../../assets/aarhus-university-logo-white.svg';
import { useInView } from 'react-intersection-observer';
import profilePhoto from '../../assets/profilePhoto.png';

const Container = ({ children, className }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div ref={ref}
            className={`rounded-2xl border-[1px] border-slate-700 bg-black-secondary p-6 ${className}
                        transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transform preserve-3d`
            }
        >
            {children}
        </div>
    )
}

const ContainerHeader = ({ IconComponent, title, description }) => {
    return (
        <>
            <IconBox IconComponent={IconComponent} />
            <div>
                <h2 className='text-2xl text-white mb-3'>{title}</h2>
                <p className='mb-8 max-w-[430px]'>{description}</p>
            </div>
            <Divider />
        </>
    )
}

const Divider = ({ mx = 6 }) => {
    return <div className={`h-[1px] -mx-${mx} my-6 bg-slate-700`} />
}

const IconBox = ({ IconComponent }) => {
    return <div className='bg-slate-800 rounded-2xl p-3 w-fit border-[1px] border-slate-700'><IconComponent className='size-8' /></div>
}

const LocationLine = ({ children }) => {
    return (
        <div className='flex gap-2 items-center my-6'>
            <PiMapPinLight size='1.2rem' />
            <p className='text-sm'>{children}</p>
        </div>
    )
}

const DateComponent = ({ dateFromTo }) => {
    return (
        <div className='flex justify-end'>
            <div className='flex h-fit items-center bg-slate-800 px-3 py-[6px] gap-2 rounded-lg text-sm w-fit border-[1px] border-slate-700'>
                <IoCalendarOutline />
                <p className='opacity-100'>{dateFromTo}</p>
            </div>
        </div>
    )
}

const CredentialComponent = ({ title, issuer, date }) => {
    return (
        <div>
            <h3 className='text-xl font-normal'>{title}</h3>
            <div className='flex items-center'>
                <p className='text-sm'>{issuer}</p>
                <LuDot />
                <p className='text-sm'>Issued {date}</p>
            </div>
            <a href='' className='button secondary small mt-4'>
                <PiArrowUpRight size='1.2rem' />
                Show Credentials
            </a>
        </div>
    )
}

const AwardComponent = ({ title, issuer, field, date, description }) => {
    return (
        <div>
            <h3 className='text-xl font-normal'>{title}</h3>
            <div className='flex items-center mb-4'>
                <p className='text-sm'>Issued by {issuer}</p>
                <LuDot />
                <p className='text-sm'>{field}</p>
            </div>
            <p className='text-sm'>{description}</p>
            <div className='flex justify-start mt-6'>
                <DateComponent dateFromTo={date} />
            </div>
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
                            <p className='text-sm'>{company}</p>
                            <LuDot />
                            <p className='text-sm'>{type}</p>
                        </div>
                    </div>
                    <DateComponent dateFromTo={dateFromTo} />
                </div>
                <LocationLine>{location}</LocationLine>
                <p className='max-w-[430px] text-sm'>
                    {description}
                </p>
            </div>
        </div>
    )
}

const SkillGroup = ({ title, children }) => {
    return (
        <div>
            <h3 className='text-xl font-normal mb-3'>{title}</h3>
            <div className='flex flex-wrap gap-2'>
                {children}
            </div>
        </div>
    )
}

const SkillComponent = ({ title }) => {
    return (
        <div className='border-[1px] border-slate-700 rounded-lg text-sm px-[10px] py-[6px] flex gap-2 items-center'>
            <PiCheck size='1rem' />
            {title}
        </div>
    )
}

const LanguageComponent = ({ code, language, level }) => {
    return (
        <>
            <h3 className='text-xl font-normal'><span className='text-sm uppercase'>{code}</span> {language}</h3>
            <p className='text-sm'>{level}</p>
            <Divider mx='10' />
        </>
    )
}

const DotLine = ({ text1, text2, className }) => {
    return (
        <div className={`flex items-center text-sm mt-1 mb-4 ${className}`}>
            <p>{text1}</p>
            <LuDot />
            <p>{text2}</p>
        </div>
    )
}

const Recommendation = ({ name, position, date, text }) => {
    return (
        <div className='flex items-stretch'>
            <div className='w-[2px] bg-green-500 my-1 mr-6' />
            <div>
                <h3 className='text-xl font-normal'>{name}</h3>
                <DotLine text1={position} text2={date} className={'mb-4'} />
                <p className='text-sm max-w-[560px]'>
                    {text}
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
                    <p className='subheading -mt-4'>Full Stack Developer with Expertise in Business Efficiency</p>
                </div>
                <div className='flex justify-center gap-4 mt-10'>
                    <a href='mailto:contact@jacoblind.me' className='button'>
                        <PiEnvelopeSimple size='1.5rem' />
                        Send Email
                    </a>
                    <button className='button secondary'>
                        <PiDownloadSimple size='1.5rem' />
                        Download Resume
                    </button>
                </div>
                <div className='mt-24 flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <Container className={`md:w-1/3 bg-[url('src/assets/profilePhoto.png')] bg-cover bg-center`} />
                        <Container className='md:w-2/3 pb-2'>
                            <IconBox IconComponent={PiUserList} />
                            <h2 className='text-2xl text-white mb-3'>Professional profile</h2>
                            <p>
                                Accomplished Senior Data Scientist & Business Consultant with a proven track record of leveraging advanced analytics to drive strategic decision-making and optimize business processes.
                                Demonstrated expertise in developing innovative solutions to complex problems, coupled with exceptional communication skills to effectively convey insights to stakeholders at all levels.
                            </p>
                            <LocationLine>Based in Aarhus, Denmark.</LocationLine>
                        </Container>
                    </div>
                    <Container>
                        <p className='text-center mb-6'>Worked With</p>
                        <Divider />
                        <PartnersLogoBar />
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiSuitcaseSimple}
                            title={'Work Experience'}
                            description={'Proven track record in data science and business consulting, delivering impactful insights and results across industries.'}
                        />
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
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiGraduationCap}
                            title={'Education'}
                            description={'Degrees in the specialized fields of computer science'}
                        />
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='text-xl font-normal'>Aarhus University</h3>
                                <div className='flex items-center'>
                                    <p className='text-sm'>Bachelor's degree</p>
                                    <LuDot />
                                    <p className='text-sm'>Computer Science</p>
                                </div>
                            </div>
                            <DateComponent dateFromTo={'Jun 2020 - Jun 2023'} />
                        </div>
                        <div className='mt-4 max-w-[430px]'>
                            <h4 className='text-base mt-4'>Bachelor Project: Exploring Closest Points Algorithms</h4>
                            <p className='text-sm'>
                                Built and optimized an algorithm in Python to find the two closest points in a k-dimensional point set in O(nlogn) time.
                            </p>
                            <p className='text-sm mt-2'>
                                Supervisor: Peyman Afshani <br />
                                Grade: B+
                            </p>
                            <a href='' className='button secondary small mt-4'>
                                <PiDownloadSimple size='1.2rem' />
                                Download paper
                            </a>
                            <img src={auLogoWhite} className='w-32 mt-6' />
                        </div>
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiCertificate}
                            title={'Licenses & Certifications'}
                            description={'Professional accreditations and certifications demonstrating expertise and compliance with industry standards.'}
                        />
                        <div className='flex justify-between items-center'>
                            <div className='grid grid-cols-2 gap-10 w-full'>
                                <div className='flex flex-col gap-10'>
                                    <CredentialComponent title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                                    <CredentialComponent title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                                </div>
                                <div className='flex flex-col gap-10'>
                                    <CredentialComponent title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                                    <CredentialComponent title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiDiamondsFour}
                            title={'Professional Skills & Tools'}
                            description={'Key competencies essential for navigating and excelling in various professional contexts.'}
                        />
                        <div className='flex flex-col gap-6'>
                            <SkillGroup title={'Web Development'}>
                                <SkillComponent title={'Javascript'} />
                                <SkillComponent title={'React'} />
                                <SkillComponent title={'Next'} />
                                <SkillComponent title={'Express'} />
                                <SkillComponent title={'Tailwindcss'} />
                                <SkillComponent title={'TypeScript'} />
                                <SkillComponent title={'SQL'} />
                                <SkillComponent title={'GraphQL'} />
                                <SkillComponent title={'Python'} />
                                <SkillComponent title={'Django'} />
                                <SkillComponent title={'Docker'} />
                                <SkillComponent title={'HTML'} />
                                <SkillComponent title={'CSS'} />
                                <SkillComponent title={'Git'} />
                                <SkillComponent title={'Command Line'} />
                                <SkillComponent title={'Google Cloud Platform'} />
                                <SkillComponent title={'Java'} />
                                <SkillComponent title={'UML Diagrams'} />
                                <SkillComponent title={'Sequence Diagrams'} />
                                <SkillComponent title={'ER Diagrams'} />
                                <SkillComponent title={'Flowcharts'} />
                            </SkillGroup>
                            <SkillGroup title={'Marketing'}>
                                <SkillComponent title={'SEO'} />
                                <SkillComponent title={'Google Ads'} />
                                <SkillComponent title={'Facebook Ads'} />
                                <SkillComponent title={'Funnels & Automation'} />
                                <SkillComponent title={'Google Analytics'} />
                            </SkillGroup>
                            <SkillGroup title={'Business'}>
                                <SkillComponent title={'Project Management'} />
                                <SkillComponent title={'Entrepeneurship'} />
                                <SkillComponent title={'Business Development'} />
                                <SkillComponent title={'Strategy'} />
                                <SkillComponent title={'Leadership'} />
                                <SkillComponent title={'Negotiation'} />
                            </SkillGroup>
                        </div>
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiGlobe}
                            title={'Languages'}
                            description={'Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.'}
                        />
                        <LanguageComponent code='en' language='English' level='Fluent or full professional proficiency' />
                        <LanguageComponent code='da' language='Danish' level='Native' />
                        <LanguageComponent code='it' language='Italian' level='Elementary proficiency' />
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiMedal}
                            title={'Honors & Awards'}
                            description={'Acknowledgments for exceptional achievements and contributions in professional endeavors.'}
                        />
                        <div className='flex justify-between items-center'>
                            <div className='grid grid-cols-2 gap-10 w-full'>
                                <div className='flex flex-col gap-10'>
                                    <AwardComponent title='Data Science Excellence Award' issuer='Nexus' field='Data Science' description='Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.' date='Dec 2023' />
                                </div>
                                <div className='flex flex-col gap-10'>
                                    <AwardComponent title='Data Science Excellence Award' issuer='Nexus' field='Data Science' description='Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.' date='Dec 2023' />
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <ContainerHeader
                            IconComponent={PiChatText}
                            title={'Recommendations'}
                            description={'Endorsements and testimonials highlighting professional aptitude and contributions from colleagues and partners.'}
                        />
                        <div className='flex flex-col'>
                            <Recommendation
                                name='Søren Hansen'
                                position='Ecommerce Manager'
                                date='Dec 2023'
                                text={`I am delighted to endorse Thomas Scott for his exemplary professionalism and remarkable contributions.
                                        Throughout our collaboration, Thomas consistently demonstrated a profound understanding of complex data dynamics and business intricacies.
                                        His innovative strategies and meticulous attention to detail have significantly elevated project outcomes.
                                        Thomas's dedication, coupled with his exceptional communication skills, makes him an invaluable asset to any endeavor.`} />
                        </div>
                    </Container>
                    <div className='flex flex-col items-center my-20'>
                        <img src={profilePhoto} className='size-20 object-cover rounded-xl mb-4' />
                        <h3>Feel Free to Reach Out</h3>
                        <p>Let's start a productive converstaion</p>
                        <div className='flex justify-center gap-4 mt-10'>
                            <a href='mailto:contact@jacoblind.me' className='button'>
                                <PiEnvelopeSimple size='1.5rem' />
                                Send Email
                            </a>
                            <button className='button secondary'>
                                <PiDownloadSimple size='1.5rem' />
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
