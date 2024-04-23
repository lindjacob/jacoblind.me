import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import Language from './components/Language';
import { PiGlobe } from 'react-icons/pi';
import danish from '../../assets/dk-flag.svg';
import english from '../../assets/uk-flag.svg';
import italian from '../../assets/it-flag.svg';

export default function Languages() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiGlobe}
                title={'Languages'}
                description={'Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.'}
            />
            <Language flag={english} language='English' level='Fluent proficiency' />
            <Language flag={danish} language='Danish' level='Native' />
            <Language flag={italian} language='Italian' level='Elementary proficiency' />
        </Container>
    )
}
