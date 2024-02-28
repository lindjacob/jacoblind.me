import Section from '../../components/layout/Section';
import profilePhoto from '../../assets/profilePhoto.png'
import useInViewTransition from '../../hooks/useInViewTransition';
import ScrollButton from '../../components/ui/ScrollButton'

const Page = () => {
    const { ref: ref1, transitionClasses: transitionClasses1 } = useInViewTransition();
    const { ref: ref2, transitionClasses: transitionClasses2 } = useInViewTransition({
        delay: 'delay-300'
    });
    const { ref: ref3, transitionClasses: transitionClasses3 } = useInViewTransition({
        delay: 'delay-700',
        offViewClasses: 'opacity-1 translate-y-full'
    });
    const { ref: ref4, transitionClasses: transitionClasses4 } = useInViewTransition({
        delay: 'delay-1000',
        offViewClasses: 'opacity-0',
        inViewClasses: 'opacity-1'
    });

    return (
        <Section className={`h-[70lvh] relative`}>
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='w-full text-center flex flex-col'>
                    <h1 className={transitionClasses1} ref={ref1}>Full Stack Developer</h1>
                    <p className={`subheading text-3xl w-[80%] self-center ${transitionClasses2}`} ref={ref2}>Building resilient, scalable digital solutions with over two decades of passion-driven development</p>
                </div>
            </div>
            <img src={profilePhoto} className={`rounded-xl w-60 absolute -bottom-5 left-[calc(50%-7.5rem)] -z-20 ${transitionClasses3}`} ref={ref3} />
            <div className={`absolute -bottom-10 left-[calc(50%-2.25rem)] ${transitionClasses4}`} ref={ref4}>
                <ScrollButton href='#about-me' />
            </div>
        </Section>
    )
}

export default Page;