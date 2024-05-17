import Container from './components/Container';
import Header from './components/Header';
import Experience from './components/Experience';
import { PiSuitcaseSimple } from 'react-icons/pi';

export default function WorkExperience({ data }) {
    return (
        <Container>
            <Header
                IconComponent={PiSuitcaseSimple}
                title={'Work Experience'}
            />
            <div className='flex'>
                <div className='w-[2px] bg-[#ededee] mt-3 mb-1 ml-1' />
                <div className='flex flex-col gap-5 w-full'>
                    {data.workExperience.map((experience, index) => (
                        <Experience key={index} {...experience} />
                    ))}
                </div>

                
            </div>
        </Container>
    )
}
