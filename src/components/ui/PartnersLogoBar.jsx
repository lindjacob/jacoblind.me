import Dekra from '../../assets/dekra-logo.png';
import Dtails from '../../assets/dtails-logo.svg';
import Connexio from '../../assets/connexio-logo.svg';
import KompetenceKanalen from '../../assets/kompetence-kanalen-logo.svg';

export default function PartnersLogoBar() {
    return (
        <div className='flex flex-wrap mt-6 gap-10 justify-center items-center'>
            <img src={Dekra} className='w-28 mt-2 md:w-32 ' />
            <img src={Dtails} className='w-28 md:w-32' />
            <img src={KompetenceKanalen} className='w-28 md:w-32' />
            <img src={Connexio} className='w-28 md:w-32' />
        </div>
    )
}
