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
            <div className='flex flex-col'>
                <div>
                    <h3 className='mb-2'>Programming languages</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'JavaScript'} />
                        <Skill title={'TypeScript'} />
                        <Skill title={'Python'} />
                        <Skill title={'SQL'} />
                        <Skill title={'GraphQL'} />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='mb-2'>Frameworks</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'React'} />
                        <Skill title={'React Native'} />
                        <Skill title={'Next.js'} />
                        <Skill title={'Express.js'} />
                        <Skill title={'FastAPI'} />
                        <Skill title={'Tailwind CSS'} />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='mb-2'>Platforms & Tools</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'Git'} />
                        <Skill title={'Docker'} />
                        <Skill title={'Scrum'} />
                        <Skill title={'Google Cloud Platform'} />
                        <Skill title={'Azure'} />
                        <Skill title={'BigQuery'} />
                        <Skill title={'PostgreSQL'} />
                        <Skill title={'CI/CD'} />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='mb-2'>Engineering</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'System Architecture'} />
                        <Skill title={'API Design'} />
                        <Skill title={'Data Modeling'} />
                        <Skill title={'Data Warehousing'} />
                        <Skill title={'Performance Optimization'} />
                        <Skill title={'AI Agent Tooling'} />
                        <Skill title={'Developer Workflow Automation'} />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='mb-2'>Leadership & Business</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'Technical Leadership'} />
                        <Skill title={'Project Management'} />
                        <Skill title={'Stakeholder Management'} />
                        <Skill title={'Entrepreneurship'} />
                        <Skill title={'Business Development'} />
                        <Skill title={'Negotiation'} />
                    </div>
                </div>
            </div>


        </Container>
    )
}
