import Container from './Container'

const Section = ({ children, className }) => {
    return (
        <section className={`py-20 flex justify-center items-center even:bg-black-secondary ${className}`}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Section