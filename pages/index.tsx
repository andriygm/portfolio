import styles from '../styles/layout.module.scss'
import { MeahCounseling } from '../components/work'
import { RecentWork } from './work'

function Home() {
    return (
      <>
        <div className={styles.hero}>
          <div>
            <h1>👋 {"Hi! I'm Andriy."}</h1>
            <p>
              I{"'"}m a software engineer who loves making scalable, readable,
              and performant applications and user experiences.
            </p>
          </div>

          <img src="/images/profile.jpg"></img>
        </div>

        <h1>Recent Work</h1>
        <p>
          Here is some of my most recent public work. Feel free to check out
          some of my <a href="/work">other work</a>.
        </p>

        <RecentWork />
      </>
    );
}

export default Home