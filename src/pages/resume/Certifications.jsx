import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import { PiCertificate } from 'react-icons/pi';
import Certification from './components/Certification';

export default function Certifications() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiCertificate}
                title={'Licenses & Certifications'}
                description={'Professional accreditations and certifications demonstrating expertise and compliance with industry standards.'}
            />
            <div className='flex justify-between items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 w-full'>
                    <div className='flex flex-col gap-10'>
                        <Certification title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                        <Certification title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <Certification title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                        <Certification title={'Data Analysis & Visualization'} issuer={'NexusWorks'} date={'Jan 2024'} />
                    </div>
                </div>
            </div>
        </Container>
    )
}
