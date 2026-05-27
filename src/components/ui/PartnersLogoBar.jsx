import Dekra from '../../assets/dekra-logo.png';
import Dtails from '../../assets/dtails-logo.svg';
import Connexio from '../../assets/connexio-logo.svg';
import KompetenceKanalen from '../../assets/kompetence-kanalen-logo.svg';
import TheTechCollective from '../../assets/the-tech-collective-logo.svg';
import ImplementConsultingGroup from '../../assets/implement-consulting-group-logo.svg';
import useInViewTransition from '../../hooks/useInViewTransition';

export default function PartnersLogoBar() {
    const logos = [
        { src: Dekra, delay: 'delay-[300ms]', className: 'w-28 md:w-32' },
        { src: Dtails, delay: 'delay-[450ms]', className: 'w-28 md:w-32 mb-2' },
        { src: KompetenceKanalen, delay: 'delay-[600ms]', className: 'w-28 md:w-32' },
        { src: Connexio, delay: 'delay-[750ms]', className: 'w-28 md:w-32' },
        { src: TheTechCollective, delay: '', className: 'w-40 md:w-44' },
        { src: ImplementConsultingGroup, delay: 'delay-[150ms]', className: 'w-32 md:w-36' }
    ];

    return (
        <div className='flex flex-wrap mt-6 gap-6 sm:gap-10 justify-center items-center'>
            {logos.map((logo, index) => {
                const { ref, transitionClasses } = useInViewTransition({ delay: logo.delay });
                return (
                    <img key={index} ref={ref} src={logo.src} className={`${transitionClasses} ${logo.className}`} />
                );
            })}
        </div>
    );
}