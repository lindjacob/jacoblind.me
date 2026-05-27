import React from 'react';
import ArrowLink from './ArrowLink';
import IconBox from './IconBox';

export default function projectCard({ projectObject }) {
    return (
        <a href={`/portfolio/${projectObject.id}`}
            className={`h-full group/parent flex flex-col bg-gray-800 rounded-3xl overflow-clip`}
        >
            <div className='overflow-clip'>
                <img src={projectObject.featuredImage} className='group-hover/parent:scale-110 transition-all duration-300 object-cover w-full h-full' />
            </div>
            <div className='p-8 lg:p-10'>
                <div className='flex gap-4 self-end'>
                    {projectObject.technologies.map((tech) => (
                        <IconBox icon={tech} />
                    ))}
                </div>
                <h4 className='text-2xl font-semibold mt-6 mb-2'>{projectObject.title}</h4>
                <p className='text-lg'>{projectObject.subheading}</p>
                <ArrowLink link={`/portfolio/${projectObject.id}`} anchorText='VIEW PROJECT' color='text-white' size='md' parentGroup={true} className='mt-5' />
            </div>
        </a>
    )
}
