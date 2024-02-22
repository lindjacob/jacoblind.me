import profilePhoto from '../assets/profilePhoto.png';
import ArrowLink from './ui/ArrowLink';
import Container from './layout/Container';
import SocialBar from './ui/SocialBar';

const Footer = () => {
    return (
        <div className='border-t-[1px] border-gray-500'>
            <Container>
                <div className='lg:h-96 h-[32rem] flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <img src={profilePhoto} className='rounded-full size-24 sm:h-32 sm:w-32 object-cover' />
                            <div className='ml-4 md:ml-8 my-auto'>
                                <p className='text-4xl font-semibold'>Jacob Lind</p>
                                <p className='text-xl text-gray-400 font-medium'>Full-Stack Web Developer</p>
                            </div>
                        </div>
                        <SocialBar />
                    </div>
                    <div>
                        <a href='/contact' className='flex items-center mt-16 text-white my-auto group hover:cursor-pointer lg:mt-0'>
                            <p className='text-4xl mt-2 mb-1 md:mt-10 md:mb-5 font-semibold md:text-5xl md:leading-[3.5rem] text-white'>Get in touch</p>
                            <svg className='size-12 mt-5 ml-4 text-blue-primary group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                            </svg>
                        </a>
                        <div className='flex flex-wrap lg:justify-between'>
                            <div className='w-50 mr-10 mt-5'>
                                <p className='mb-1 uppercase text-gray-400 font-semibold'>Email me:</p>
                                <ArrowLink link='mailto:contact@jacoblind.me' anchorText='contact@jacoblind.me' color='text-white' size='md' />
                            </div>
                            <div className='mt-5'>
                                <p className='mb-1 uppercase text-gray-400 font-semibold'>Call me:</p>
                                <ArrowLink link='tel:004521221945' anchorText='+45 2122 1945' color='text-white' size='md' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;