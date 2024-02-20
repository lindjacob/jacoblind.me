
const Container = ({ children, className }) => {
    return (
        <div className='max-w-screen-xl px-5 mx-auto sm:px-10 md:px-12 lg:px-16'>
            {children}
        </div>
    )
}

export default Container