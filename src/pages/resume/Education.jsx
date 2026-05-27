import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import DotLine from './components/DotLine';
import DateBox from './components/DateBox';
import { PiDownloadSimple, PiGraduationCap } from 'react-icons/pi';
import auLogoWhite from '../../assets/aarhus-university-logo-white.svg';
import Divider from './components/Divider';

export default function Education() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiGraduationCap}
                title={'Education'}
                description={'Degrees in the specialized fields of computer science'}
            />
            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                <div className='mb-4 md:mb-0'>
                    <h3>Aarhus University</h3>
                    <DotLine text1={`Bachelor of Science`} text2={`Computer Science`} />
                </div>
                <DateBox dateFromTo={'Aug 2020 - Jun 2023'} />
            </div>
            <div className='mt-4 max-w-[430px]'>
                <h4 className='mt-4'>Bachelor Project: Exploring Closest Points Algorithms</h4>
                <p>
                    Built and optimized an algorithm in Python to find the two closest points in a k-dimensional point set in O(nlogn) time.
                </p>
                <p className='mt-2'>
                    Supervisor: Peyman Afshani <br />
                    Grade: B/B+
                </p>
                <a href='/Exploring_Closest_Points_Algorithms.pdf' className='button secondary small mt-4' download>
                    <PiDownloadSimple size='1.2rem' />
                    Download paper
                </a>
                <img src={auLogoWhite} className='w-32 mt-6' />
            </div>
            <Divider short className='mt-9 mb-8'/>
            <div className='flex flex-col md:flex-row justify-between md:items-center mb-4'>
                <div className='mb-4 md:mb-0'>
                    <h3>Aarhus University (interrupted)</h3>
                    <DotLine text1={`Bachelor of Science`} text2={`Medicine`} />
                </div>
                <DateBox dateFromTo={'Feb 2015 - Jan 2017'} />
            </div>
            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                <div className='mb-4 md:mb-0'>
                    <h3>Aarhus University (interrupted)</h3>
                    <DotLine text1={`Bachelor of Science`} text2={`Molecular Biology`} />
                </div>
                <DateBox dateFromTo={'Sep 2013 - Jan 2015'} />
            </div>
        </Container>
    )
}
