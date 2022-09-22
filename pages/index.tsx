import styles from '../styles/layout.module.scss'

function Home() {
    return <>
        <div className={styles.hero}>
            <h1>👋</h1>
            <h1>{"Hi! I'm Andriy."}</h1>
            <p>I'm a software engineer who loves making scalable, readable, and performant applications and user experiences.</p>
        </div>

    </>
}

export default Home