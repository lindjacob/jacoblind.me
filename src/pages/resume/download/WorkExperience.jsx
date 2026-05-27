import Container from './components/Container';
import Header from './components/Header';
import Experience from './components/Experience';
import { PiSuitcaseSimple } from 'react-icons/pi';

export default function WorkExperience({ data }) {
    const [techCollective] = data.workExperience;
    const downloadableExperience = [
        techCollective,
        {
            position: 'Solutions Architect & Developer',
            company: 'DEKRA',
            type: 'Full Time',
            location: 'Remote - Copenhagen, Denmark',
            dateFromTo: 'Jun 2022 - Sep 2024',
            description: 'Re-hired to engineer a comprehensive data warehouse, integrating data from various online channels and internal systems, several of which I had previously built. Designed and implemented the warehouse in Google BigQuery, orchestrated through Node.js and Express.js microservices on Google Cloud Platform, after stakeholder interviews with department directors and managers to identify the most critical KPIs.'
        },
        {
            position: 'IT Consultant',
            company: 'DEKRA',
            type: 'Contract',
            location: 'Remote - Copenhagen, Denmark',
            dateFromTo: 'Apr 2021 - Mar 2022',
            description: 'Delivered custom software for digitalization initiatives, automating operational workflows and reducing manual errors. One project increased operational efficiency by 66%, allowing the department to reassign two of three roles to other work.'
        },
        {
            position: 'Backend Developer',
            company: 'D.TAILS',
            type: 'Contract',
            location: 'Remote - Copenhagen, Denmark',
            dateFromTo: 'Feb 2022 - May 2022',
            description: 'Developed backend solutions for custom Shopify platforms using Express.js and PostgreSQL, contributing to architecture discussions and sprint planning. Used Ngrok to expose secure test environments and Sentry to monitor and troubleshoot services in a microservices setup.'
        },
        {
            position: 'Earlier Experience',
            company: 'Connexio / Jacob Lind Online Marketing',
            type: 'Marketing & Entrepreneurship',
            location: 'Aarhus, Denmark',
            dateFromTo: 'Nov 2015 - Aug 2020',
            description: 'Led marketing, recruitment, SEO, and automation projects while increasingly taking ownership of technical implementation, including CRM integrations, marketing automation, landing pages, and React/WordPress-based conversion optimization.'
        }
    ];

    return (
        <Container>
            <Header
                IconComponent={PiSuitcaseSimple}
                title={'Work Experience'}
            />
            <div className='flex'>
                <div className='w-[2px] bg-[#ededee] mt-3 mb-1 ml-1' />
                <div className='flex flex-col gap-5 w-full'>
                    {downloadableExperience.map((experience, index) => (
                        <Experience key={index} {...experience} />
                    ))}
                </div>

                
            </div>
        </Container>
    )
}
