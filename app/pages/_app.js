import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // const { lang, setLang } = useLang()
  // console.log(lang)
  // setLang
  return (
    <AnimatePresence exitBeforeEnter>
      {/* key={router.route} */}
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
