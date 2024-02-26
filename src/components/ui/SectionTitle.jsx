import React from 'react'

export default function sectionTitle({ title }) {
    return (
        <div className='mb-7 flex gap-1 text-xl md:mb-0'>
            <p className='text-blue-primary font-bold'>/</p>
            <p className='uppercase font-semibold'>{title}</p>
        </div>
    )
}