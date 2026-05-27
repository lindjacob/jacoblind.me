import React from 'react'

export default function sectionTitle({ title }) {
    return (
        <div className='mb-7 flex gap-1 text-xl md:mb-0'>
            <div className='text-blue-primary font-bold'>/</div>
            <div className='uppercase font-semibold'>{title}</div>
        </div>
    )
}