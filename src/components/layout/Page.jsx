import Navbar from '../navbar/index'
import Footer from '../Footer'

const Page = ({ children }) => {
    return (
        <div className='dark'>
            <div className='dark:text-white'>
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