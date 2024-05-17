import Container from './components/Container';
import Header from './components/Header';
import { PiGlobe } from 'react-icons/pi';
import danish from '../../../assets/dk-flag.svg';
import english from '../../../assets/uk-flag.svg';
import italian from '../../../assets/it-flag.svg';
import Divider from './components/Divider';

export default function Languages() {
    return (
        <Container>
            <Header
                IconComponent={PiGlobe}
                title={'Languages'}
            />

            <div className='flex gap-1'>
                <img src={english} className='size-3 mt-[1px]' />
                <h3>English</h3>
            </div>
            <p>Fluent proficiency</p>
            <Divider short />

            <div className='flex gap-1'>
                <img src={danish} className='size-3 mt-[1px]' />
                <h3>Danish</h3>
            </div>
            <p>Native proficiency</p>
            <Divider short />

            <div className='flex gap-1'>
                <img src={italian} className='size-3 mt-[1px]' />
                <h3>Italian</h3>
            </div>
            <p>Elementary proficiency</p>
        </Container>
    )
}
