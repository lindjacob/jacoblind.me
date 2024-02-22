import Section from '../../components/layout/Section';
import Subheading from '../../components/ui/Subheading';
import ProfilePhoto from '../../assets/profilePhoto.png'

const Page = () => {
    return (
        // BG image
        // bg-[url('src/assets/heroImage.svg')] bg-no-repeat bg-hero-bg-pos
        <Section className={`h-[70lvh]`}>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full text-center flex flex-col'>
                    <h1 className='text-white'>Full Stack Developer with a Unique Journey<span className='text-blue-primary'>.</span></h1>
                    <Subheading>
                        Crafting resilient, scalable digital solutions with over two decades of passion-driven development
                    </Subheading>
                </div>
            </div>
        </Section>
    )
}

export default Page;