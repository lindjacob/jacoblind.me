import React from 'react';

export default function ArrowLink({ link, anchorText, color, size, groupName }) {
    return (
        <div className={`w-fit ${size === 'sm' ? '' : 'mt-8'}`}>
            <a href={link} className='group cursor-pointer'>
                <div className='flex'>
                    <p className={`mb-1 ${size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-2xl'}`}>{anchorText}</p>
                    <svg className={`${size === 'lg' ? 'w-7 h-7 mt-0.5' : 'w-6 h-6'} ${color} ml-2 group-hover${groupName ? '/' + groupName : ''}:translate-x-2 transition-transform duration-300`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                        <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                    </svg>
                </div>
                <div className='relative bg-gray-primary w-full h-1 overflow-hidden'>
                    <div className={`absolute h-full w-full bg-white transform -translate-x-full group-hover${groupName ? '/' + groupName : ''}:translate-x-0 transition-transform duration-300`} />
                </div>
            </a>
        </div>
    )
}