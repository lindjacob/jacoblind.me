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
                    <Skill title={'JavaScript'} />
                    <Skill title={'TypeScript'} />
                    <Skill title={'Python'} />
                    <Skill title={'SQL'} />
                    <Skill title={'GraphQL'} />
                </SkillGroup>

                <SkillGroup title={'Frameworks'}>
                    <Skill title={'React'} />
                    <Skill title={'React Native'} />
                    <Skill title={'Next.js'} />
                    <Skill title={'Express.js'} />
                    <Skill title={'FastAPI'} />
                    <Skill title={'Tailwind CSS'} />
                </SkillGroup>

                <SkillGroup title={'Platforms & Tools'}>
                    <Skill title={'Git'} />
                    <Skill title={'Docker'} />
                    <Skill title={'Google Cloud Platform'} />
                    <Skill title={'Azure'} />
                    <Skill title={'BigQuery'} />
                    <Skill title={'PostgreSQL'} />
                    <Skill title={'CI/CD'} />
                    <Skill title={'Scrum'} />
                </SkillGroup>

                <SkillGroup title={'Engineering'}>
                    <Skill title={'System Architecture'} />
                    <Skill title={'API Design'} />
                    <Skill title={'Data Modeling'} />
                    <Skill title={'Data Warehousing'} />
                    <Skill title={'Performance Optimization'} />
                    <Skill title={'AI Agent Tooling'} />
                    <Skill title={'Developer Workflow Automation'} />
                </SkillGroup>

                <SkillGroup title={'Leadership & Business'}>
                    <Skill title={'Technical Leadership'} />
                    <Skill title={'Project Management'} />
                    <Skill title={'Stakeholder Management'} />
                    <Skill title={'Entrepreneurship'} />
                    <Skill title={'Business Development'} />
                    <Skill title={'Negotiation'} />
                </SkillGroup>
            </div>
        </Container>
    )
}
