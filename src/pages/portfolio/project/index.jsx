import { useParams } from 'react-router-dom';
import projectData from './projectData.json';
import Page from '../../../components/layout/Page';
import Section from '../../../components/layout/Section';
import Subheading from '../../../components/ui/Subheading';
import NotFound from '../../NotFound';
import ArrowLink from '../../../components/ui/ArrowLink';
import IconBox from '../../../components/ui/IconBox';
import ProjectInfo from './ProjectInfo';
import ProjectDescription from './ProjectDescription';
import ScrollButton from '../../../components/ui/ScrollButton';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbBrandGoogleBigQuery, TbSql } from 'react-icons/tb';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiGooglecloud, SiNextdotjs } from 'react-icons/si';

const iconComponents = {
  javascript: RiJavascriptFill,
  react: FaReact,
  tailwind: SiTailwindcss,
  typescript: BiLogoTypescript,
  bigquery: TbBrandGoogleBigQuery,
  sql: TbSql,
  python: FaPython,
  next: SiNextdotjs,
  docker: FaDocker,
  django: SiDjango,
  gcloud: SiGooglecloud
};

const ProjectPage = () => {
  console.log("ProjectPage rendered");
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Page>
      <Section>
        <div className='flex flex-col sm:flex-row'>
          <div className='sm:w-3/4 md:w-2/3'>
            <h1>{project.title}</h1>
            <Subheading>{project.subheading}</Subheading>
          </div>
          <div className='my-7 sm:w-1/4 md:w-1/3 flex sm:justify-end items-end'>
            <ScrollButton href='#about' />
          </div>
        </div>
        <img src={project.featuredImage} className='py-10' />
      </Section>
      <Section id='about'>
        <div className='relative w-full flex flex-col md:flex-row md:gap-16 lg:gap-40'>
          <div className='mb-10 grid grid-cols-2 gap-5 md:flex md:h-fit md:flex-col md:justify-start md:min-w-56 md:sticky md:top-10'>
            <ProjectInfo content='client' project={project}>
              <p className='text-white font-semibold text-xl md:text-2xl'>{project.client}</p>
            </ProjectInfo>
            <ProjectInfo content='services' project={project}>
              <p className='text-white font-semibold text-xl md:text-2xl'>{project.services}</p>
            </ProjectInfo>
            <ProjectInfo content='technologies' project={project}>
              <div className='flex flex-wrap gap-2 mt-1'>
                {project.technologies.map(tech => (
                  <IconBox IconComponent={iconComponents[tech]} />
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
          <div>
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