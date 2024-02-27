import Container from './components/Container';
import IconBox from './components/IconBox';
import Location from './components/Location';
import { PiUserList } from 'react-icons/pi';

export default function Profile() {
    return (
        <Container className='w-full md:w-2/3 pb-2'>
            <IconBox IconComponent={PiUserList} />
            <h2>Professional profile</h2>
            <p>
                Accomplished Senior Data Scientist & Business Consultant with a proven track record of leveraging advanced analytics to drive strategic decision-making and optimize business processes.
                Demonstrated expertise in developing innovative solutions to complex problems, coupled with exceptional communication skills to effectively convey insights to stakeholders at all levels.
            </p>
            <Location locationText={`Based in Aarhus, Denmark.`} />
        </Container>
    )
}
