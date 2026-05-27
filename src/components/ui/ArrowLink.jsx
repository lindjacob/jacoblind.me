import React from 'react';

export default function ArrowLink({ link, anchorText, blankLinkTarget, size, parentGroup, className }) {
    const textSize = {
        sm: 'text-base mb-0.5',
        md: 'text-lg mb-0.5',
        lg: 'text-xl mb-1',
        xl: 'text-2xl font-semibold mb-1'
    }[size] || 'text-base mb-1'

    const svgSize = {
        sm: 'size-5 mt-0.5',
        md: 'size-6 mt-0.5',
        lg: 'size-6 mt-0.5',
        xl: 'size-8 text-blue-primary'
    }[size] || 'w-6 h-6'

    const height = {
        sm: 'h-0.5',
        md: 'h-0.5',
        lg: 'h-[3px]',
        xl: 'h-1'
    }[size] || 'h-1'

    return (
        <div className={`w-fit ${className}`}>
            <a href={link} className='group cursor-pointer' target={blankLinkTarget && '_blank'}>
                <div className='flex'>
                    <div className={`${textSize}`}>{anchorText}</div>
                    <svg className={`${svgSize} ml-2 ${parentGroup ? 'group-hover/parent:translate-x-2' : 'group-hover:translate-x-2'} transition-transform duration-300`} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                        <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                    </svg>
                </div>
                <div className={`relative bg-gray-secondary w-full ${height} overflow-hidden`}>
                    <div className={`absolute h-full w-full bg-white transform -translate-x-full ${parentGroup ? 'group-hover/parent:translate-x-0' : 'group-hover:translate-x-0'} transition-transform duration-300`} />
                </div>
            </a>
        </div>
    )
}