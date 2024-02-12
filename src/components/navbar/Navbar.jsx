import logo from '../../assets/logo.svg';
import Link from './Link';
import Container from '../Container';

const Navbar = () => {
    return (
        <nav>
            <Container>
                <div className='flex items-center justify-between'>
                    <a href={import.meta.env.VITE_API_URL} className='flex items-center space-x-3 rtl:space-x-reverse'>
                        <img src={logo} className='h-4' alt='logo' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Jacob Lind</span>
                    </a>
                    <button type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 1h15M1 7h15M1 13h15' />
                        </svg>
                    </button>
                    <div className='group hidden w-full md:block md:w-auto md:text-white' id='navbar-default'>
                        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
                            <Link href='/'>Home</Link>
                            <Link href='/profile'>Profile</Link>
                            <Link href='/portfolio'>Portfolio</Link>
                            <Link href='/contact'>Contact</Link>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;