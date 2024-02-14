import Container from '../../components/Container'
import standinPhoto from '../../assets/standinPhoto.svg';

const Page = () => {
    return (
        <section className='h-[70lvh]'>
            <Container>
                <div className='flex'>
                    <div className='self-center'>
                        <h1 className='text-white'>Full-Stack Web Developer</h1>
                        <p className='text-gray-primary text-xl'>
                            Code is just a language. Anyone can learn to use it. <br />
                            What matters is that you get a developer who understands your business.
                        </p>
                    </div>
                    <img src={standinPhoto} className='relative right-0 bottom-0' />
                </div>
            </Container>
        </section>
    )
}

export default Page;