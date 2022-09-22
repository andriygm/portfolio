import type { AppProps } from 'next/app'

import Layout from '../components/layout'
import '../styles/globals.scss'

function Portfolio({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default Portfolio
