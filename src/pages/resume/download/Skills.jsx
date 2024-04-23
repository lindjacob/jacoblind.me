import Container from './components/Container';
import Header from './components/Header';
import Skill from './components/Skill';
import { PiDiamondsFour } from 'react-icons/pi';

export default function Skills() {
    return (
        <Container>
            <Header
                IconComponent={PiDiamondsFour}
                title={'Top Skills'}
            />
            <div className='flex flex-wrap gap-1'>
                <Skill title={'Javascript'} />
                <Skill title={'React'} />
                <Skill title={'Next'} />
                <Skill title={'Express'} />
                <Skill title={'Tailwindcss'} />
                <Skill title={'TypeScript'} />
                <Skill title={'SQL'} />
                <Skill title={'Python'} />
                <Skill title={'Docker'} />
                <Skill title={'UML Diagrams'} />
                <Skill title={'Sequence Diagrams'} />
                <Skill title={'ER Diagrams'} />
                <Skill title={'Flowcharts'} />
                <Skill title={'Project Management'} />
                <Skill title={'Entrepeneurship'} />
                <Skill title={'Business Development'} />
                <Skill title={'Strategy'} />
                <Skill title={'Leadership'} />
                <Skill title={'Negotiation'} />
            </div>
        </Container>
    )
}
