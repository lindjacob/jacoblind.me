import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import Link from './Link';
import Container from '../layout/Container';
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

    const LinkList = () => {
        return (
            <>
                <Link href='/'>Home</Link>
                <Link href='/resume'>Resume</Link>
                <Link href='/portfolio'>Portfolio</Link>
                <Link href='/contact'>Contact</Link>
            </>
        )
    }

    return (
        <div>
            <nav>
                <Container>
                    <div className='py-4 md:py-8 flex items-center justify-between w-full relative'>
                        <a href={import.meta.env.VITE_API_URL} className='flex items-center space-x-3 hover:scale-110 transition-all duration-300'>
                            <img src={logo} className='h-4' alt='logo' />
                            <span className='text-2xl font-semibold'>Jacob Lind</span>
                        </a>
                        <button
                            type='button'
                            className='p-2 text-gray-500 dark:text-white md:hidden'
                            aria-controls='menuOverlay'
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <GiHamburgerMenu size='2rem' />
                        </button>
                        <div className={`group hidden md:block md:w-auto md:text-white`}>
                            <ul className='flex md:space-x-8'>
                                <LinkList />
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
            <div id='menuOverlay' className={`${menuOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-x-0 z-10 h-screen bg-black-primary md:hidden transform transition-all ease-out duration-300`}>
                <ul className='p-8'>
                    <LinkList />
                </ul>
            </div>
        </div>
    )
}

export default Navbar;