import Container from '../../components/Container'

const Page = () => {
    return (
        <section className={`h-[70lvh] flex items-center bg-[url('src/assets/heroImage.svg')] bg-no-repeat bg-hero-bg-pos`}>
            <Container>
                <div className='flex'>
                    <div className='md:w-2/3 flex flex-col'>
                        <h1 className='text-white'>Full-Stack Web Developer</h1>
                        <p className='text-gray-primary text-xl'>
                            Code is just a language. Anyone can learn to use it. <br />
                            What matters is that you get a developer who understands your business.
                        </p>
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Page;

// style={{ backgroundImage: `url(${standinPhoto})` }}