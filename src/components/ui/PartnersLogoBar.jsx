import Dekra from '../../assets/dekra-logo.png';
import Dtails from '../../assets/dtails-logo.svg';
import Connexio from '../../assets/connexio-logo.svg';
import KompetenceKanalen from '../../assets/kompetence-kanalen-logo.svg';
import useInViewTransition from '../../hooks/useInViewTransition';

export default function PartnersLogoBar() {
    const logos = [
        { src: Dekra, delay: '' },
        { src: Dtails, delay: 'delay-[150ms]', className: 'mb-2' },
        { src: KompetenceKanalen, delay: 'delay-[300ms]' },
        { src: Connexio, delay: 'delay-[450ms]' },
    ];

    return (
        <div className='flex flex-wrap mt-6 gap-6 sm:gap-10 justify-center items-center'>
            {logos.map((logo, index) => {
                const { ref, transitionClasses } = useInViewTransition({ delay: logo.delay });
                return (
                    <img key={index} ref={ref} src={logo.src} className={`w-28 md:w-32 ${transitionClasses} ${logo.className}`} />
                );
            })}
        </div>
    );
}