import Section from '../../components/layout/Section';
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';
import useInViewTransition from '../../hooks/useInViewTransition';

function PreviousPartners() {
    const { ref: ref, transitionClasses: transitionClasses } = useInViewTransition();

    return (
        <Section className={`justify-center dark:py-10`}>
            <div className='flex flex-col items-center'>
                <h2 className={`mt-0 text-2xl uppercase text-center ${transitionClasses}`} ref={ref}>Previously worked with</h2>
                <PartnersLogoBar />
            </div>
        </Section>
    )
}

export default PreviousPartners
