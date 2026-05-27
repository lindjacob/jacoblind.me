import Page from '../../components/layout/Page';
import Section from '../../components/layout/Section';
import ProjectCardWrapper from '../../components/ui/ProjectCardWrapper';
import useInViewTransition from '../../hooks/useInViewTransition';
import projectsData from '../../projectsData.json';

export default function index() {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        threshold: 0,
        delay: 'delay-300'
    });

    return (
        <Page>
            <Section>
                <div className={`flex flex-col items-center ${transitionClasses1}`} ref={ref1}>
                    <h1>Portfolio</h1>
                    <p className='subheading text-center'>Here you find a list of side projects that I have built for fun to showcase some of my abilities. <br /> All projects have a link to their GitHub repository.</p>
                </div>
                <div className={`mt-20 ${transitionClasses2}`} ref={ref2}>
                    <ProjectCardWrapper projects={projectsData} moreComing={true} />
                </div>
            </Section>
        </Page>
    )
}