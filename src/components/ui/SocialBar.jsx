import { useState } from 'react';
import { RiInstagramFill, RiFacebookCircleFill, RiWhatsappFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

export default function SocialBar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const socials = [
        {
            IconComponent: RiInstagramFill,
            href: 'https://www.instagram.com/jacobhlind/'
        },
        {
            IconComponent: RiFacebookCircleFill,
            href: 'https://www.facebook.com/jacob.lind1'
        },
        {
            IconComponent: RiWhatsappFill,
            href: 'https://wa.me/004521221945'
        },
        {
            IconComponent: RiLinkedinBoxFill,
            href: 'https://www.linkedin.com/in/jacoblindseo/'
        },
        {
            IconComponent: RiGithubFill,
            href: 'https://github.com/lindjacob'
        }
    ]

    return (
        <div className='flex mt-6 group gap-6'>
            {socials.map((social, index) => (
                <a href={social.href}
                    target='_blank'
                    className={`cursor-pointer transition-all duration-300 ${hoveredIndex === null ? '' : hoveredIndex !== index ? 'opacity-50' : 'scale-[1.15] -translate-y-2'}`}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <social.IconComponent size='36px' />
                </a>
            ))}
        </div>
    )
}