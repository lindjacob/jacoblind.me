import Container from './Container'

const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={`py-10 md:py-20 flex items-center even:bg-black-secondary ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Section