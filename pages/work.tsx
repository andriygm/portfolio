import Head from "next/head"

import styles from "../styles/work.module.scss"
import {
    ML,
    VR,
    LOZ,
    BrewingGame,
    MeahCounseling,
    Portfolio,
} from "../components/work";

export default function Work() {
    return (
        <>
            <Head>
                <title>Work — Andriy Massimilla</title>
            </Head>

            <h1>Work</h1>

            <p>
                Here are some of the projects I have worked on that are
                publically accessible. Please note this list is not
                comprehensive, as it does not include any private repositories.
            </p>

            <section>
                <h1>Research</h1>

                <div className={styles.projects}>
                    <VR />
                    <ML />
                </div>
            </section>

            <section>
                <h1>Games</h1>

                <div className={styles.projects}>
                    <LOZ />
                    <BrewingGame />
                </div>
            </section>

            <section>
                <h1>Websites</h1>

                <div className={styles.projects}>
                    <MeahCounseling />
                    <Portfolio />
                </div>
            </section>
        </>
    );
}

export function RecentWork() {
    return <div className={styles.projects}>
        <MeahCounseling />
        <BrewingGame />
    </div>
}