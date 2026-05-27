import Container from './components/Container';
import Header from './components/Header';
import DotLine from './components/DotLine';
import DateBox from './components/DateBox';
import { PiGraduationCap } from 'react-icons/pi';
import auLogoWhite from '../../../assets/aarhus-university-logo.svg';
import Divider from './components/Divider';

export default function Education() {
    return (
        <Container>
            <Header
                IconComponent={PiGraduationCap}
                title={'Education'}
            />
            <div className='flex flex-col gap-2'>
                <div>
                    <div className='flex justify-between'>
                    <div>
                        <h3>Aarhus University</h3>
                        <DotLine text1={`Bachelor of Science`} text2={`Computer Science`} />
                    </div>
                    <DateBox dateFromTo={'Aug 2020 - Jun 2023'} />
                    </div>
                    <div className='mt-4 max-w-[300px]'>
                        <h4>Bachelor Project: Exploring Closest Points Algorithms</h4>
                        <p>
                            Built and optimized an algorithm in Python to find the two closest points in a k-dimensional point set in O(nlogn) time.
                        </p>
                        <p><a className='underline underline-offset-2' href='https://jacoblind.me/Exploring_Closest_Points_Algorithms.pdf' target='_blank'>Download paper</a></p>
                        <p className='mt-2'>
                            Supervisor: Peyman Afshani <br />
                            Grade: B/B+
                        </p>
                        <img src={auLogoWhite} className='w-[80px] mt-4' />
                    </div>
                </div>
                <Divider short />
                <div className='flex flex-col gap-4 *:flex *:justify-between'>
                    <div>
                        <div>
                            <h3>Aarhus University (interrupted)</h3>
                            <DotLine text1={`Bachelor of Science`} text2={`Medicine`} />
                        </div>
                        <DateBox dateFromTo={'Feb 2015 - Jan 2017'} />

                    </div>
                    <div>
                        <div>
                            <h3>Aarhus University (interrupted)</h3>
                            <DotLine text1={`Bachelor of Science`} text2={`Molecular Biology`} />
                        </div>
                        <DateBox dateFromTo={'Sep 2013 - Jan 2015'} />

                    </div>
                </div>
            </div>
        </Container>
    )
}
