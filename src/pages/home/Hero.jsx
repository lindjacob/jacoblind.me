import Section from '../../components/layout/Section';

const Page = () => {
    return (
        <Section className={`h-[70lvh]`}>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full text-center flex flex-col'>
                    <h1>Full Stack Developer with a Un<span className={`text-blue-primary relative before:content-['ı'] before:absolute before:text-white`}>i</span>que Journey</h1>
                    <p className='subheading'>Crafting resilient, scalable digital solutions with over two decades of passion-driven development</p>
                </div>
            </div>
        </Section>
    )
}

export default Page;