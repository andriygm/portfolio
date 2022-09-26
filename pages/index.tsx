import styles from '../styles/layout.module.scss'
import { MeahCounseling } from '../components/work'

function Home() {
    return <>
        <div className={styles.hero}>
            <h1>👋</h1>
            <h1>{"Hi! I'm Andriy."}</h1>
            <p>I{"'"}m a software engineer who loves making scalable, readable, and performant applications and user experiences.</p>
        </div>

        <h1>Recent work</h1>
        <p>Here is some of my most recent public work. <a href='/work'>Check out all of my public work.</a></p>

        <MeahCounseling />
    </>
}

export default Home