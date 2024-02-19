import { useParams } from 'react-router-dom';
import projectData from './projectData.json';
import Page from '../../../components/layout/Page';
import Section from '../../../components/layout/Section';
import Subheading from '../../../components/ui/Subheading';
import NotFound from '../../NotFound';
import ArrowLink from '../../../components/ui/ArrowLink';
import IconBox from '../../../components/ui/IconBox';
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
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Page>
      <Section>
        <div>
          <h1>{project.title}</h1>
          <Subheading>{project.subheading}</Subheading>
        </div>
        <img src={project.image} className='py-10' />
      </Section>
      <Section>
        <div className='w-full relative flex justify-between'>
          <div className='md:sticky'>
            <div className='pb-5'>
              <p className='text-gray-secondary font-semibold text-lg tracking-wider'>CLIENT</p>
              <p className='text-white font-semibold text-2xl'>Personal Project</p>
            </div>
            <div className='pb-5'>
              <p className='text-gray-secondary font-semibold text-lg tracking-wider'>SERVICES</p>
              <p className='text-white font-semibold text-2xl'>NaN</p>
            </div>
            <div className='pb-5'>
              <p className='text-gray-secondary font-semibold text-lg tracking-wider'>TECHNOLOGIES</p>
              <div className='flex gap-2 mt-1'>
                {project.techIcons.map(iconName => (
                  <IconBox IconComponent={iconComponents[iconName]} />
                ))}
              </div>
            </div>
            <div className='pb-5'>
              <p className='text-gray-secondary font-semibold text-lg tracking-wider'>WEBSITE</p>
              <ArrowLink link={project.link} anchorText='Live preview' blankLinkTarget={true} color='text-blue-primary' size='xl' />
            </div>
          </div>
          <div className=''>
            <h2>About the project</h2>
            <h3>Project goal</h3>
            <h2>Project results</h2>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default ProjectPage;