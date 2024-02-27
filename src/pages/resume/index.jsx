import Page from '../../components/layout/Page';
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';
import { PiSuitcaseSimple, PiGraduationCap, PiCertificate, PiDiamondsFour, PiGlobe, PiMedal, PiChatText, PiDownloadSimple } from "react-icons/pi";

import profilePhoto from '../../assets/profilePhoto.png';
import DotLine from './components/DotLine';
import CtaButtons from './components/CtaButtons';
import Container from './components/Container';
import Divider from './components/Divider';
import SectionHeader from './components/SectionHeader';
import DateBox from './components/DateBox';
import Certification from './components/Certification';
import Award from './components/Award';
import Experience from './components/Experience';
import SkillGroup from './components/SkillGroup';
import Skill from './components/Skill';
import Language from './components/Language';
import Recommendation from './components/Recommendation';
import Profile from './Profile';
import WorkedWith from './WorkedWith';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';
import Languages from './Languages';
import Awards from './Awards';
import Recommendations from './Recommendations';

export default function index() {
    return (
        <Page>
            <div className='mx-6 md:max-w-[768px] md:mx-auto py-24'>
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
                <CtaButtons />
                <div id='resume' className='mt-24 flex flex-col gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <Container className={`w-full min-h-[350px] md:min-h-0 md:w-1/3 bg-[url('src/assets/profilePhoto.png')] bg-cover bg-center`} />
                        <Profile />
                    </div>
                    <WorkedWith />
                    <WorkExperience />
                    <Education />
                    {/* <Certifications /> */}
                    <Skills />
                    <Languages />
                    {/* <Awards /> */}
                    {/* <Recommendations /> */}
                </div>
                <div className='flex flex-col items-center my-20'>
                    <img src={profilePhoto} className='size-20 object-cover rounded-xl mb-4' />
                    <h3>Feel Free to Reach Out</h3>
                    <p>Let's start a productive converstaion</p>
                    <CtaButtons />
                </div>
            </div>
        </Page>
    )
}

