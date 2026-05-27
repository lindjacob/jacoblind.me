import Container from './components/Container';
import Divider from './components/Divider';
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';

export default function WorkedWith() {
    return (
        <Container>
            <p className='text-center mb-6 text-base opacity-100'>Worked With</p>
            <Divider />
            <PartnersLogoBar />
        </Container>
    )
}
