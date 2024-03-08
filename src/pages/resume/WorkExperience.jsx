import Container from './components/Container';
import SectionHeader from './components/SectionHeader';
import Experience from './components/Experience';
import { PiSuitcaseSimple } from 'react-icons/pi';

export default function WorkExperience() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiSuitcaseSimple}
                title={'Work Experience'}
                description={`From entrepreneurship to leading technical projects at DEKRA, I've consistently delivered impactful results. My career is a unique blend of marketing and business insight with software development as my tool.`}
            />
            <div className='flex'>
                <div className='w-[2px] bg-slate-700 mt-3 mb-1' />
                <div className='flex flex-col gap-10 w-full'>
                    <Experience
                        position='IT Project Manager'
                        company='DEKRA'
                        type='Full Time'
                        location='Remote - Copenhagen, Denmark'
                        dateFromTo='Jun 2022 - Present'
                        description={`Returning to DEKRA, I led the development of a data warehouse and visualization tools using SQL, Node.js, and GCP, aimed at empowering management with actionable insights.
                                        My work focused on tracing organizational financial flows, identifying revenue-generating departments and products.
                                        By adopting a DevOps approach, I ensured scalable and maintainable solutions, significantly impacting decision-making processes.
                                        This project underscored my ability to blend technical expertise with strategic business analysis, reinforcing my role as a key driver of DEKRA's data-informed transformation.`
                        }
                    />
                    <Experience
                        position='Backend Developer'
                        company='D.TAILS'
                        type='Contract'
                        location='Remote - Copenhagen, Denmark'
                        dateFromTo='Feb 2022 - May 2022'
                        description={`At D.TAILS, I developed custom solutions for Shopify using Express.js.
                                        My role involved collaborating with frontend developers and partaking in the architectural planning with experienced developers.
                                        Although my time there was short due to a compelling opportunity to rejoin DEKRA, it was a valuable experience where I contributed to building scalable back-end systems and enhancing team efforts towards delivering effective software solutions.`
                        }
                    />
                    <Experience
                        position='IT Project Manager'
                        company='DEKRA'
                        type='Contract'
                        location='Remote - Copenhagen, Denmark'
                        dateFromTo='Apr 2021 - Mar 2022'
                        description={`In my initial role at DEKRA, I spearheaded a transformative digitalization project, optimizing departmental efficiency by automating manual processes with an Express.js backend.
                                        By developing a tailored system to manage client (student) information and integrate communication tools, I eliminated data loss and streamlined workflows.
                                        This innovation not only enhanced operational efficiency but also reduced employee stress and error rates, setting a new standard for internal processes.
                                        My approach demonstrated the power of intuitive, tech-driven solutions to solve complex business challenges.`
                        }
                    />
                    <Experience
                        position='Marketing Manager'
                        company='Connexio'
                        type='Full Time'
                        location='Aarhus, Denmark'
                        dateFromTo='Feb 2019 - Aug 2020'
                        description={`Developed Connexio's new recruitment product that used social media marketing as its core to attract candidates.
                                        I managed all campaigns for their clients, encompassing both technical and creative aspects, and developed Connexio's operational processes and success metrics.`
                        }
                    />
                    <Experience
                        position='Digital Advisor'
                        company='Kompetencekanalen'
                        type='Full Time'
                        location='Aarhus, Denmark'
                        dateFromTo='Oct 2018 - Jan 2019'
                        description={`I had an independent role managing digital strategies and projects for various national and international clients.
                                        My tasks ranged from developing digital strategies to project management, including task delegation to the technical team and client consultation.
                                        The position also unexpectedly entailed a significant amount of outreach sales, an aspect that eventually led to my departure after a brief tenure, as it did not align with my professional strengths or interests.`
                        }
                    />
                    <Experience
                        position='Business Owner'
                        company='Jacob Lind Online Marketing'
                        type='Full Time'
                        location='Aarhus, Denmark'
                        dateFromTo='Nov 2015 - Jan 2018'
                        description={`Working independently as a marketing consultant and later as an owner of a company with two employees, I tackled project-based and ongoing campaigns for medium-sized businesses, always aiming to maximize client profitability.
                                        My work spanned a wide range of areas, including front-end development, automated funnel setup, project management, employee hiring, conversion optimization, SEO, data analysis, copywriting, video production.
                                        This experience honed my skills across multiple marketing disciplines, underscoring my ability to deliver comprehensive solutions that directly contribute to client success.`
                        }
                    />
                </div>

                
            </div>
        </Container>
    )
}
