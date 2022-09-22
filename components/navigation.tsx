import Link from 'next/link'

import styles from '../styles/navigation.module.scss'

function Navigation() {
    return <>
        <nav className={styles.navigation}>
            <Link href="/">
                <a className={styles.logo}>🚀</a>
            </Link>

            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/work">
                <a>Work</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    </>
}

export default Navigation