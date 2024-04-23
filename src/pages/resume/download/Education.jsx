import Container from './components/Container';
import Header from './components/Header';
import DotLine from './components/DotLine';
import DateBox from './components/DateBox';
import { PiGraduationCap } from 'react-icons/pi';
import auLogoWhite from '../../../assets/aarhus-university-logo.svg';

export default function Education() {
    return (
        <Container className='flex-grow'>
            <Header
                IconComponent={PiGraduationCap}
                title={'Education'}
            />
            <div>
                <h3>Aarhus University</h3>
                <DotLine text1={`Bachelor's degree`} text2={`Computer Science`} />
                <div className='mt-2'>
                    <DateBox dateFromTo={'Aug 2020 - Jun 2023'} />
                </div>
            </div>
            <div className='mt-4'>
                <h4>Bachelor Project: Exploring Closest Points Algorithms</h4>
                <p>
                    Built and optimized an algorithm in Python to find the two closest points in a k-dimensional point set in O(nlogn) time.
                </p>
                <p className='mt-2'>
                    Supervisor: Peyman Afshani <br />
                    Grade: B/B+
                </p>
                <img src={auLogoWhite} className='w-[60px] mt-2' />
            </div>
        </Container>
    )
}
