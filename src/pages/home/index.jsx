import Page from '../../components/Page';
import Hero from './Hero';
import PreviousPartners from './PreviousPartners';
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