import Section from '../../components/layout/Section';
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';
import useInViewTransition from '../../hooks/useInViewTransition';

function PreviousPartners() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();

    return (
        <Section className={`justify-center dark:py-20 z-20 relative`}>
            <div className='flex flex-col items-center'>
                <h2 className={`mb-4 mt-0 text-2xl uppercase text-center ${transitionClasses1}`} ref={ref1}>Recently worked with</h2>
                <PartnersLogoBar />
            </div>
        </Section>
    )
}

export default PreviousPartners
