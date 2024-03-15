import { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardWrapper = ({ projects, moreComing }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-5 items-stretch`}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)] cursor-pointer transition-all duration-300 ${hoveredIndex === null ? '' : hoveredIndex !== index ? 'opacity-50' : 'scale-105 shadow-lg'}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <ProjectCard projectObject={project} />
                </div>
            ))}
            {moreComing &&
                <div className='group/moreProjects min-h-[500px] w-full sm:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1rem)] flex items-center justify-center rounded-3xl border-4 border-dashed border-gray-800'>
                    <p className='text-xl'>More projects coming...</p>
                </div>
            }
        </div>
    );
};

export default ProjectCardWrapper;