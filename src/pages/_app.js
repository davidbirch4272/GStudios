import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
     <Sidebar />
      <div style={{ display:'flex', flexDirection: 'column', flex: 1 }}>
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default MyApp
