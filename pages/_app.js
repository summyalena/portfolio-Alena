import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
  <AnimatePresence>
  <Component {...pageProps} />
  </AnimatePresence>
  )
}

export default MyApp
