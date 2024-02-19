import profilePhoto from '../assets/profilePhoto.png';
import ArrowLink from './ui/ArrowLink';
import Container from './layout/Container';
import { RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill, RiLinkedinBoxFill, RiGithubFill  } from "react-icons/ri";

const Footer = () => {
    const iconClasses = 'w-9 h-9 dark:fill-gray-200 group-hover:fill-gray-500 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300'

    return (
        <div className='border-t-[1px] border-gray-500'>
            <Container>
                <div className='lg:h-96 h-[32rem] flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <img src={profilePhoto} className='rounded-full h-24 w-24 sm:h-32 sm:w-32 object-cover' />
                            <div className='ml-4 md:ml-8 my-auto'>
                                <p className='text-4xl font-semibold'>Jacob Lind</p>
                                <p className='text-xl text-gray-400 font-medium'>Full-Stack Web Developer</p>
                            </div>
                        </div>
                        <div className='flex mt-6 group gap-6'>
                            <a href='https://www.facebook.com/jacob.lind1' target='_blank' className='cursor-pointer'>
                                <RiFacebookCircleFill className={iconClasses} />
                            </a>
                            <a href='https://www.instagram.com/jacobhlind/' target='_blank' className='cursor-pointer'>
                                <RiInstagramFill className={iconClasses} />
                            </a>
                            <a href='https://wa.me/004521221945' rel='nofollow' target='_blank' className='cursor-pointer'>
                                <RiWhatsappFill className={iconClasses} />
                            </a>
                            <a href='https://www.linkedin.com/in/jacoblindseo/' target='_blank' className='cursor-pointer'>
                                <RiLinkedinBoxFill className={iconClasses} />
                            </a>
                            <a href='https://github.com/lindjacob' target='_blank' className='cursor-pointer'>
                                <RiGithubFill className={iconClasses} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href='/contact' className='flex items-center mt-16 mb-8 text-white my-auto group hover:cursor-pointer lg:mt-0'>
                            <h2>Get in touch</h2>
                            <svg className='w-12 h-12 ml-4 text-blue-primary group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                            </svg>
                        </a>
                        <div className='flex flex-wrap lg:justify-between'>
                            <div className='w-50 mr-10'>
                                <p className='mb-1 uppercase text-gray-400 font-semibold'>Email me:</p>
                                <ArrowLink link='mailto:contact@jacoblind.me' anchorText='contact@jacoblind.me' color='text-white' size='sm' />
                            </div>
                            <div>
                                <p className='mb-1 uppercase text-gray-400 font-semibold'>Call me:</p>
                                <ArrowLink link='tel:004521221945' anchorText='+45 2122 1945' color='text-white' size='sm' />
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Footer;