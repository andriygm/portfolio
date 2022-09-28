import Link from 'next/link'

import styles from '../styles/navigation.module.scss'

function Navigation() {
    return (
        <>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a className={styles.emoji}>🚀</a>
                    </Link>
                </div>

                <div className={styles.links}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/work">
                        <a>Work</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navigation