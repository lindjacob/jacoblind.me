import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import Award from './components/Award';
import { PiMedal } from 'react-icons/pi';

export default function Awards() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiMedal}
                title={'Honors & Awards'}
                description={'Acknowledgments for exceptional achievements and contributions in professional endeavors.'}
            />
            <div className='flex justify-between items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 w-full'>
                    <div className='flex flex-col gap-10'>
                        <Award title='Data Science Excellence Award' issuer='Nexus' field='Data Science' description='Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.' date='Dec 2023' />
                    </div>
                    <div className='flex flex-col gap-10'>
                        <Award title='Data Science Excellence Award' issuer='Nexus' field='Data Science' description='Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.' date='Dec 2023' />
                    </div>
                </div>
            </div>
        </Container>
    )
}
