import React from 'react'

export default function sectionTitle({ title }) {
    return (
        <div className='mb-2 flex gap-1 text-xl font-bold md:mb-0'>
            <p className='text-blue-primary'>/</p>
            <p className='uppercase'>{title}</p>
        </div>
    )
}