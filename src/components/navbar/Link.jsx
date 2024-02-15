import { useLocation } from 'react-router-dom';

const Link = ({ href, children }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <li>
            <a href={href} className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hover:dark:text-white group-hover:text-gray-500 transition-all duration-300 ${isActive ? 'md:border-b-2 border-current' : ''}`} aria-current={isActive ? 'page' : undefined}>{children}</a>
        </li>
    )
}

export default Link;