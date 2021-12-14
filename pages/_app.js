import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps, router }) {

  return (

    <ThemeProvider attribute="class">
      <NextNProgress height={2} color="#FD7014" />
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ duration: 1 }}
        variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 }, }} exitBeforeEnter>


        <Component {...pageProps} />

      </motion.div>
    </ThemeProvider>

  )
}

export default MyApp
