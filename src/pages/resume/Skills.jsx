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
                <SkillGroup title={'Web Development'}>
                    <Skill title={'Javascript'} />
                    <Skill title={'React'} />
                    <Skill title={'Next'} />
                    <Skill title={'Express'} />
                    <Skill title={'Tailwindcss'} />
                    <Skill title={'TypeScript'} />
                    <Skill title={'SQL'} />
                    <Skill title={'GraphQL'} />
                    <Skill title={'Python'} />
                    <Skill title={'Django'} />
                    <Skill title={'Docker'} />
                    <Skill title={'HTML'} />
                    <Skill title={'CSS'} />
                    <Skill title={'Git'} />
                    <Skill title={'Command Line'} />
                    <Skill title={'Google Cloud Platform'} />
                    <Skill title={'Java'} />
                    <Skill title={'UML Diagrams'} />
                    <Skill title={'Sequence Diagrams'} />
                    <Skill title={'ER Diagrams'} />
                    <Skill title={'Flowcharts'} />
                </SkillGroup>
                <SkillGroup title={'Marketing'}>
                    <Skill title={'SEO'} />
                    <Skill title={'Google Ads'} />
                    <Skill title={'Facebook Ads'} />
                    <Skill title={'Funnels & Automation'} />
                    <Skill title={'Google Analytics'} />
                </SkillGroup>
                <SkillGroup title={'Business'}>
                    <Skill title={'Project Management'} />
                    <Skill title={'Entrepeneurship'} />
                    <Skill title={'Business Development'} />
                    <Skill title={'Strategy'} />
                    <Skill title={'Leadership'} />
                    <Skill title={'Negotiation'} />
                </SkillGroup>
            </div>
        </Container>
    )
}
