import Section from '../../components/layout/Section';
import PartnersLogoBar from '../../components/ui/PartnersLogoBar';

function PreviousPartners() {
    return (
        <Section className='justify-center dark:py-10'>
            <div className='flex flex-col items-center'>
                <h2 className='mt-0 text-2xl uppercase text-center'>Previously worked with</h2>
                <PartnersLogoBar />
            </div>
        </Section>
    )
}

export default PreviousPartners
