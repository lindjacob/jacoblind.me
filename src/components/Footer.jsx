import profilePhoto from '../assets/profilePhoto.png'
import Container from './Container'

const Footer = () => {
    return (
        <div className='lg:h-96 h-[32rem] border-t-[1px] border-gray-500'>
            <Container>
                <div className='h-full flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center'>
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
                                <svg className='w-8 h-8 dark:fill-gray-100 group-hover:fill-gray-400 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                </svg>
                            </a>
                            <a href='https://www.instagram.com/jacobhlind/' target='_blank' className='cursor-pointer'>
                                <svg className='w-8 h-8 dark:fill-gray-100 group-hover:fill-gray-400 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                                </svg>
                            </a>
                            <a href='https://wa.me/004521221945' rel='nofollow' target='_blank' className='cursor-pointer'>
                                <svg className='w-8 h-8 dark:fill-gray-100 group-hover:fill-gray-400 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                                </svg>
                            </a>
                            <a href='https://www.linkedin.com/in/jacoblindseo/' target='_blank' className='cursor-pointer'>
                                <svg className='w-8 h-8 dark:fill-gray-100 group-hover:fill-gray-400 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </a>
                            <a href='https://github.com/lindjacob' target='_blank' className='cursor-pointer'>
                                <svg className='w-9 h-9 -mt-0.5 dark:fill-gray-100 group-hover:fill-gray-400 dark:hover:fill-white hover:-translate-y-2 transition-all duration-300' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href='/contact' className='flex mt-16 mb-8 text-white my-auto group hover:cursor-pointer lg:mt-0'>
                            <h2>Get in touch</h2>
                            <svg className='w-12 h-12 ml-4 text-blue-primary group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                            </svg>
                        </a>
                        <div className='flex flex-wrap lg:justify-between'>
                            <div className='w-50 mr-10'>
                                <p className='mb-1 uppercase text-gray-400 font-semibold'>Email me:</p>
                                <a href='mailto:contact@jacoblind.me' className='group cursor-pointer'>
                                    <div className='flex'>
                                        <p className='mb-1'>contact@jacoblind.me</p>
                                        <svg className='w-6 h-6 ml-2 text-white group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                                        </svg>
                                    </div>
                                    <div className='relative bg-gray-400 w-full h-1 overflow-hidden mb-6'>
                                        <div className='absolute h-full w-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300' />
                                    </div>
                                </a>
                            </div>
                            <div className=''>
                                <p className='mb-1 uppercase text-gray-400 font-semibold'>Call me:</p>
                                <a href='tel:004521221945' className='group cursor-pointer'>
                                    <div className='flex'>
                                        <p className='mb-1'>+45 2122 1945</p>
                                        <svg className='w-6 h-6 ml-2 text-white group-hover:translate-x-2 transition-transform duration-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                                        </svg>
                                    </div>
                                    <div className='relative bg-gray-400 w-full h-1 overflow-hidden'>
                                        <div className='absolute h-full w-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Footer;