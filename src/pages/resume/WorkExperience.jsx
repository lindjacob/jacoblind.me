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
                description={'Proven track record in data science and business consulting, delivering impactful insights and results across industries.'}
            />
            <div className='flex'>
                <div className='w-[2px] bg-slate-700 mt-3 mb-1' />
                <div className='flex flex-col gap-10 w-full'>
                    <Experience
                        position='IT Project Manager'
                        company='DEKRA'
                        type='Full-Time'
                        location='Remote - Copenhagen, Denmark'
                        dateFromTo='Jun 2022 - Present'
                        description={`Genansat for at lede udviklingen af et data warehouse samt data-visualiseringer, der skal ligge til grund for DEKRA's ledelses beslutninger. 
                                                    Opgaven har været at følge pengene i organisationen og besvare hvilke afdelinger, produkter og indsatser der skaber positiv omsætning.
                                                    For at løse opgaven har jeg anvendt SQL, Node.js og JavaScript til at udvikle og implementere cloud-baserede funktioner i GCP (Google Cloud Product), optimeret til skalerbarhed og ydeevne.
                                                    Dette gjorde jeg ved at anvende DevOps tilgangen for at sikre at vedligeholdelse af løsningen i fremtiden vil være nem og overskuelig.`
                        }
                    />
                    <Experience
                        position='IT Project Manager'
                        company='DEKRA'
                        type='Full-Time'
                        location='Remote - Copenhagen, Denmark'
                        dateFromTo='Jun 2022 - Present'
                        description={`Genansat for at lede udviklingen af et data warehouse samt data-visualiseringer, der skal ligge til grund for DEKRA's ledelses beslutninger. 
                                                    Opgaven har været at følge pengene i organisationen og besvare hvilke afdelinger, produkter og indsatser der skaber positiv omsætning.
                                                    For at løse opgaven har jeg anvendt SQL, Node.js og JavaScript til at udvikle og implementere cloud-baserede funktioner i GCP (Google Cloud Product), optimeret til skalerbarhed og ydeevne.
                                                    Dette gjorde jeg ved at anvende DevOps tilgangen for at sikre at vedligeholdelse af løsningen i fremtiden vil være nem og overskuelig.`
                        }
                    />
                </div>
            </div>
        </Container>
    )
}
