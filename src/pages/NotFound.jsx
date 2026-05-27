import Page from '../components/layout/Page';
import Section from '../components/layout/Section';
import { GiFireBomb } from "react-icons/gi";

const NotFound = () => {
    return (
        <Page>
            <Section className={`dark:py-10 dark:md:py-28`}>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center'>Page not found</h1>
                    <GiFireBomb size='10rem' />
                </div>
            </Section>
        </Page>
    )
}

export default NotFound;