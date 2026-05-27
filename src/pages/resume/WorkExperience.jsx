import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import Experience from './components/Experience';
import { PiSuitcaseSimple } from 'react-icons/pi';

export default function WorkExperience({ data }) {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiSuitcaseSimple}
                title={'Work Experience'}
                description={`From entrepreneurship to leading complex technical work for one of Denmark's largest companies, I've consistently delivered impactful results. My career blends marketing and business insight with software development as my tool.`}
            />
            <div className='flex'>
                <div className='w-[2px] bg-slate-700 mt-3 mb-1' />
                <div className='flex flex-col gap-10 w-full'>
                    {data.workExperience.map((experience, index) => (
                        <Experience key={index} {... experience} />
                    ))}
                </div>

                
            </div>
        </Container>
    )
}
