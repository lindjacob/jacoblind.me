import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const LinkList = () => {
    const location = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/resume', label: 'Resume' },
        { href: '/portfolio', label: 'Portfolio' },
        // { href: '/contact', label: 'Contact' },
    ];

    return (
        <li className='flex flex-col md:flex-row md:gap-10'>
            {navLinks.map((link, index) => (
                <a
                    href={link.href}
                    className={`block py-4 px-3 text-5xl font-semibold md:text-lg md:bg-transparent md:p-0 transition-all duration-300 ${location.pathname === link.href ? 'md:border-b-2 border-current' : ''} ${hoveredIndex === null ? '' : hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={index}
                    aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                    {link.label}
                </a>
            ))}
        </li>
    )
}

export default LinkList;