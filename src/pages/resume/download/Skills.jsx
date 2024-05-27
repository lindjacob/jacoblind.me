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
                        <Skill title={'Javascript'} />
                        <Skill title={'TypeScript'} />
                        <Skill title={'Python'} />
                        <Skill title={'Java'} />
                        <Skill title={'SQL'} />
                        <Skill title={'GraphQL'} />
                        <Skill title={'HTML'} />
                        <Skill title={'CSS'} />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='mb-2'>Frameworks</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'React'} />
                        <Skill title={'Next'} />
                        <Skill title={'Express'} />
                        <Skill title={'Tailwindcss'} />
                        <Skill title={'Django'} />
                    </div>
                </div>
                <div className='mt-4'>
                    <h3 className='mb-2'>Others</h3>
                    <div className='flex flex-wrap gap-1'>
                        <Skill title={'Git'} />
                        <Skill title={'Docker'} />
                        <Skill title={'Scrum'} />
                        <Skill title={'UML & ER Diagrams'} />
                        <Skill title={'Flowcharts'} />
                        <Skill title={'Project Management'} />
                        <Skill title={'Strategy'} />
                        <Skill title={'Entrepeneurship'} />
                        <Skill title={'Leadership'} />
                        <Skill title={'Business Development'} />
                        <Skill title={'Negotiation'} />
                    </div>
                </div>
            </div>


        </Container>
    )
}
