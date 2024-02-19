import React from 'react';

export default function ArrowLink({ link, anchorText, blankLinkTarget, color, size, parentGroup, className }) {
    const textSize = {
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-2xl font-semibold'
    }[size] || 'text-base'

    const svgSize = {
        md: 'size-6',
        lg: 'size-6 mt-0.5',
        xl: 'size-7 mt-0.5'
    }[size] || 'w-6 h-6'

    return (
        <div className={`w-fit ${className}`}>
            <a href={link} className='group cursor-pointer' target={blankLinkTarget && '_blank'}>
                <div className='flex'>
                    <p className={`mb-1 ${textSize}`}>{anchorText}</p>
                    <svg className={`${svgSize} ${color} ml-2 ${parentGroup ? 'group-hover/parent:translate-x-2' : 'group-hover:translate-x-2'} transition-transform duration-300`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                        <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                    </svg>
                </div>
                <div className='relative bg-gray-primary w-full h-1 overflow-hidden'>
                    <div className={`absolute h-full w-full bg-white transform -translate-x-full ${parentGroup ? 'group-hover/parent:translate-x-0' : 'group-hover:translate-x-0'} transition-transform duration-300`} />
                </div>
            </a>
        </div>
    )
}