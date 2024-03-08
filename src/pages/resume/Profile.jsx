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
                From entrepreneurship to leading technical projects at DEKRA, I've consistently delivered impactful results.
                My career is a unique blend of marketing and business insight, coupled with two decades of passion-driven development and a formal education in Computer Science.
                As an extrovert, I seamlessly communicate complex technical and business concepts to diverse audiences, driving collaboration and innovation.
                I have an insatiable hunger to learn and I am highly motivated by tasks that require me to be innovative, where I can use my creativity and my intuition.
            </p>
            <Location locationText={`Based in Aarhus, Denmark.`} />
        </Container>
    )
}
