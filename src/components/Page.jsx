import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Page = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className=''>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Page;