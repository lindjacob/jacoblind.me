import React from 'react';
import Section from '../../components/layout/Section';
import SectionTitle from '../../components/ui/SectionTitle';
import ArrowLink from '../../components/ui/ArrowLink';
import ProjectCardWrapper from '../../components/ui/ProjectCardWrapper';
import projectsData from '../../projectsData.json';
import useInViewTransition from '../../hooks/useInViewTransition';

export default function FeaturedProjects() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        offViewClasses: `opacity-100 sm:opacity-0 translate-y-4`,
        inViewClasses: `opacity-100 translate-y-0 delay-300`
    });

    return (
        <Section>
            <div ref={ref1} className={`flex flex-col justify-between mb-10 lg:flex-row ${transitionClasses1}`}>
                <div className='flex flex-col lg:w-2/3'>
                    <SectionTitle title='My Portfolio' />
                    <h2>
                        Take a look at the latest side projects I've done
                    </h2>
                </div>
                <div className='flex lg:w-1/3 lg:flex-row-reverse'>
                    <div className='mt-5 w-fit self-end lg:mb-8'>
                        <ArrowLink link='/portfolio' anchorText='Browse all Projects' size='xl' weight='semibold' />
                    </div>
                </div>
            </div>
            <div ref={ref2} className={`group/projects ${transitionClasses2}`}>
                <ProjectCardWrapper projects={projectsData.slice(0, 3)} />
            </div>
        </Section>
    )
}
