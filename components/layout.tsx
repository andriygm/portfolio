import type { NextPage } from 'next'
import Head from 'next/head'

import Navigation from './navigation'
import Footer from './footer'
import styles from '../styles/layout.module.scss'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
    return <>
        <Head>
            <title>Andriy Massimilla</title>
            <link rel="icon" href="/favicon.svg" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <Navigation />
        <main className={styles.main}>{children}</main>
        <Footer />
    </>
}

export default Layout