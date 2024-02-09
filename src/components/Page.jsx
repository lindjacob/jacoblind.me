import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Page = ({ children }) => {
    return (
        <div className='dark'>
            <div className='max-w-screen-xl mx-auto dark:text-white'>
                <header>
                    <Navbar />
                </header>
                <main className=''>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Page;