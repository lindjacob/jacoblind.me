
const Container = ({ children, className }) => {
    return (
        <div className='max-w-screen-xl px-10 lg:px-16'>
            {children}
        </div>
    )
}

export default Container