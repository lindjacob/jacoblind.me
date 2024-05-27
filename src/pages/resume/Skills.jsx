import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import SkillGroup from './components/SkillGroup';
import Skill from './components/Skill';
import { PiDiamondsFour } from 'react-icons/pi';

export default function Skills() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiDiamondsFour}
                title={'Professional Skills & Tools'}
                description={'Key competencies essential for navigating and excelling in various professional contexts.'}
            />
            <div className='flex flex-col gap-6'>
                <SkillGroup title={'Programming languages'}>
                    <Skill title={'Javascript'} />
                    <Skill title={'TypeScript'} />
                    <Skill title={'Python'} />
                    <Skill title={'Java'} />
                    <Skill title={'SQL'} />
                    <Skill title={'GraphQL'} />
                    <Skill title={'HTML'} />
                    <Skill title={'CSS'} />
                </SkillGroup>

                <SkillGroup title={'Frameworks'}>
                    <Skill title={'React'} />
                    <Skill title={'Next'} />
                    <Skill title={'Express'} />
                    <Skill title={'Tailwindcss'} />
                    <Skill title={'Django'} />
                </SkillGroup>

                <SkillGroup title={'Others'}>
                    <Skill title={'Git'} />
                    <Skill title={'Google Cloud Platform'} />
                    <Skill title={'Docker'} />
                    <Skill title={'Scrum'} />
                    <Skill title={'UML & ER Diagrams'} />
                    <Skill title={'Flowcharts'} />
                    <Skill title={'Project Management'} />
                    <Skill title={'Entrepeneurship'} />
                    <Skill title={'Business Development'} />
                    <Skill title={'Leadership'} />
                    <Skill title={'Negotiation'} />
                </SkillGroup>
            </div>
        </Container>
    )
}
