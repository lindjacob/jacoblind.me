import { useParams } from 'react-router-dom';
import projectsData from '../../../projectsData.json';
import Page from '../../../components/layout/Page';
import Section from '../../../components/layout/Section';
import NotFound from '../../NotFound';
import ArrowLink from '../../../components/ui/ArrowLink';
import IconBox from '../../../components/ui/IconBox';
import ProjectInfo from './ProjectInfo';
import ProjectDescription from './ProjectDescription';
import ScrollButton from '../../../components/ui/ScrollButton';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Page>
      <Section>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div>
            <h1 className='mb-0'>{project.title}</h1>
            <p className='subheading'>{project.subheading}</p>
          </div>
          <div className='mt-5 sm:mt-0 sm:ml-10 flex sm:justify-end items-end'>
            <ScrollButton href='#about' />
          </div>
        </div>
        <img src={project.featuredImage} className='mt-10 rounded-xl' />
      </Section>
      <Section id='about'>
        <div className='relative w-full flex flex-col md:flex-row md:gap-16 lg:gap-40'>
          <div className='mb-10 flex flex-col gap-5 xsm:grid xsm:grid-cols-2 xsm:gap-5 md:flex md:h-fit md:flex-col md:justify-start md:min-w-56 md:sticky md:top-10'>
            <ProjectInfo content='client' project={project}>
              <p className='opacity-100 font-semibold text-xl md:text-2xl'>{project.client}</p>
            </ProjectInfo>
            <ProjectInfo content='services' project={project}>
              <p className='opacity-100 font-semibold text-xl md:text-2xl'>{project.services}</p>
            </ProjectInfo>
            <ProjectInfo content='technologies' project={project}>
              <div className='flex flex-wrap gap-2 mt-1'>
                {project.technologies.map(tech => (
                  <IconBox icon={tech} />
                ))}
              </div>
            </ProjectInfo>
            <ProjectInfo content='github' project={project}>
              <ArrowLink link={project.github} anchorText='Repository' blankLinkTarget={true} size={'lg'} />
            </ProjectInfo>
            <ProjectInfo content='website' project={project}>
              <ArrowLink link={project.website} anchorText='Live preview' blankLinkTarget={true} size={'xl'} />
            </ProjectInfo>
          </div>
          <div id='projectDescription'>
            <ProjectDescription title='About the project' content='about' project={project} />
            <ProjectDescription title='Project goal' content='goal' project={project} />
            <ProjectDescription title='Project result' content='result' project={project} />
            <ProjectDescription title='Future ideas' content='future' project={project} />
            <ProjectDescription title='Collaborations' content='collaborations' project={project} />
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default ProjectPage;