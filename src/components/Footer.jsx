import ArrowLink from './ui/ArrowLink';
import Container from './layout/Container';
import SocialBar from './ui/SocialBar';
import useInViewTransition from '../hooks/useInViewTransition';

const Footer = () => {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-300'
    });

    return (
        <div className={`border-t-[1px] border-gray-500`}>
            <Container>
                <div className='lg:h-96 h-[32rem] flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center'>
                    <div className={`flex flex-col ${transitionClasses1}`} ref={ref1}>
                        <div className='flex'>
                            <img src={`/profilePhoto.webp`} className='rounded-full size-24 sm:h-32 sm:w-32 object-cover' />
                            <div className='ml-4 md:ml-8 my-auto'>
                                <p className='text-4xl font-semibold opacity-100'>Jacob Lind</p>
                                <p className='text-xl text-gray-300 font-medium'>Full Stack Developer</p>
                            </div>
                        </div>
                        <SocialBar />
                    </div>
                    <div ref={ref2} className={transitionClasses2}>
                        <div href='/contact' className='flex items-center mb-1 md:mt-14 mt-16 text-white my-auto lg:mt-0'>
                            <div className='text-4xl mt-2 font-semibold md:text-5xl md:leading-[3.5rem] text-white lg:mt-0'>Get in touch</div>
                        </div>
                        {/* <a href='/contact' className='flex items-center mb-1 md:mt-14 mt-16 text-white my-auto group hover:cursor-pointer lg:mt-0'>
                            <div className='text-4xl mt-2 font-semibold md:text-5xl md:leading-[3.5rem] text-white lg:mt-0'>Get in touch</div>
                            <svg className='size-10 ml-4 mt-2 md:size-12 lg:mt-0 text-blue-primary group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                            </svg>
                        </a> */}
                        <div className='flex flex-wrap lg:justify-between'>
                            <div className='w-50 mr-10 mt-5'>
                                <div className='mb-1 uppercase text-gray-400 font-semibold'>Email me:</div>
                                <ArrowLink link='mailto:contact@jacoblind.me' anchorText='contact@jacoblind.me' color='text-white' size='md' />
                            </div>
                            <div className='mt-5'>
                                <div className='mb-1 uppercase text-gray-400 font-semibold'>Call me:</div>
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