
const Container = ({ children }) => {
    return (
        <div className='max-w-screen-xl container mx-auto px-5 sm:px-10 md:px-12 lg:px-16'>
            {children}
        </div>
    )
}

export default Container