import Page from '../../components/layout/Page';
import Hero from './Hero';
import PreviousPartners from './RecentClients';
import AboutMe from './AboutMe';
import FeaturedProjects from './FeaturedProjects';

const Home = () => {
    return (
        <Page>
            <Hero />
            <PreviousPartners />
            <AboutMe />
            <FeaturedProjects />
        </Page >
    )
}

export default Home;