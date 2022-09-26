import Head from "next/head"

import styles from "../styles/work.module.scss"
import { MeahCounseling, ML, VR } from "../components/work"

function Work() {
    return <>
        <Head>
            <title>Work — Andriy Massimilla</title>
        </Head>

        <h1>Work</h1>

        <p>Here are some of the projects I have worked on that are publically accessible. Please note this list is not comprehensive, as it does not include any private repositories.</p>

        <section>
            <h1>Research</h1>

            <div className={styles.projects}>
                <ML />
                <VR />
            </div>
        </section>

        <section>
            <h1>Websites</h1>

            <div className={styles.projects}>
                <MeahCounseling />
            </div>
        </section>
    </>
}

export default Work