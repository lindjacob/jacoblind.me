import React from 'react'

export default function sectionTitle({ title }) {
    return (
        <div className='flex gap-1 text-xl font-bold'>
            <p className='text-blue-primary'>/</p>
            <p className='uppercase'>{title}</p>
        </div>
    )
}