import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </AuthProvider>
  )
}
