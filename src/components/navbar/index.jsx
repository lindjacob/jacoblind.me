import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import Link from './Link';
import Container from '../Container';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    }, [menuOpen]);

    return (
        <div>
            <nav className={`relative z-20 bg-black-primary ${menuOpen ? 'fixed top-0 left-0 right-0' : ''}`}>
                <Container>
                    <div className='flex items-center justify-between w-full relative'>
                        <a href={import.meta.env.VITE_API_URL} className='flex items-center space-x-3 rtl:space-x-reverse'>
                            <img src={logo} className='h-4' alt='logo' />
                            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Jacob Lind</span>
                        </a>
                        <button
                            type='button'
                            className='inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            aria-controls='menuOverlay'
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <GiHamburgerMenu size='2rem' />
                        </button>
                    </div>
                </Container>
            </nav>
            <div
                id='menuOverlay'
                className={`group fixed inset-x-0 z-10 h-screen bg-black-primary
                                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-all ease-out duration-300
                                    md:w-auto md:text-white`}
            >
                <ul className='font-medium flex flex-col items-start p-8
                                        md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0'
                >
                    <Link href='/' className='py-2'>Home</Link>
                    <Link href='/resume' className='py-2'>Resume</Link>
                    <Link href='/portfolio' className='py-2'>Portfolio</Link>
                    <Link href='/contact' className='py-2'>Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;