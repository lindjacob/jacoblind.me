import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import Language from './components/Language';
import { PiGlobe } from 'react-icons/pi';

export default function Languages() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiGlobe}
                title={'Languages'}
                description={'Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.'}
            />
            <Language code='en' language='English' level='Fluent or full professional proficiency' />
            <Language code='da' language='Danish' level='Native' />
            <Language code='it' language='Italian' level='Elementary proficiency' />
        </Container>
    )
}
