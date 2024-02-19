import Section from '../../components/layout/Section';
import Subheading from '../../components/ui/Subheading';

const Page = () => {
    return (
        <Section className={`h-[70lvh] bg-[url('src/assets/heroImage.svg')] bg-no-repeat bg-hero-bg-pos`}>
            <div className='md:w-2/3 flex flex-col'>
                <h1 className='text-white'>Full-Stack Web Developer</h1>
                <Subheading>
                    Code is just a language. Anyone can learn to use it. <br />
                    What matters is that you get a developer who understands your business.
                </Subheading>
            </div>
        </Section>
    )
}

export default Page;