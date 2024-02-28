import React from 'react';
import ArrowLink from './ui/ArrowLink';
import IconBox from './ui/IconBox';

export default function projectCard({ link, title, description, img, icons }) {
    return (
        <a href={link}
            className={`group/parent w-full sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)] flex flex-col bg-gray-800 rounded-3xl overflow-clip cursor-pointer transition-all duration-300 group-hover/portfolios:opacity-50 dark:hover:opacity-100 hover:scale-105 hover:shadow-lg`}
        >
            <div className='h-3/4 box-border overflow-hidden'>
                <img src={img} className='group-hover/parent:scale-110 transition-all duration-300' />
            </div>
            <div className='p-10'>
                <div className='flex gap-4 self-end'>
                    {icons.map((icon) => (
                        <IconBox icon={icon} />
                    ))}
                </div>
                <h4 className='text-2xl font-semibold mt-6 mb-2'>{title}</h4>
                <p className='text-lg'>{description}</p>
                <ArrowLink link={link} anchorText='VIEW PROJECT' color='text-white' size='md' parentGroup={true} className='mt-5' />
            </div>
        </a>
    )
}
