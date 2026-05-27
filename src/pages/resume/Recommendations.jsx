import Container from "./components/Container";
import SectionHeader from "./components/SectionHeader";
import Recommendation from "./components/Recommendation";
import { PiChatText } from "react-icons/pi";

export default function Recommendations() {
    return (
        <Container>
            <SectionHeader
                IconComponent={PiChatText}
                title={'Recommendations'}
                description={'Endorsements and testimonials highlighting professional aptitude and contributions from colleagues and partners.'}
            />
            <div className='flex flex-col'>
                <Recommendation
                    name='Søren Hansen'
                    position='Ecommerce Manager'
                    date='Dec 2023'
                    text={`I am delighted to endorse Thomas Scott for his exemplary professionalism and remarkable contributions.
                                        Throughout our collaboration, Thomas consistently demonstrated a profound understanding of complex data dynamics and business intricacies.
                                        His innovative strategies and meticulous attention to detail have significantly elevated project outcomes.
                                        Thomas's dedication, coupled with his exceptional communication skills, makes him an invaluable asset to any endeavor.`} />
            </div>
        </Container>
    )
}
