import Link from "next/link";
import Image from "next/future/image";

import styles from "../styles/layout.module.scss";
import { RecentWork } from "./work";

import profilePic from "../images/pictures/andriy_iceland.jpg";

function Home() {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.text}>
                    <h1>👋 {"Hi! I'm Andriy."}</h1>
                    <p>
                        I{"'"}m a software engineer who loves making scalable,
                        readable, and performant applications and user
                        experiences.
                    </p>
                </div>

                <Image
                    src={profilePic}
                    alt="A portrait of the author in a mossy field"
                    placeholder="blur"
                    className={styles.image}
                />
            </div>

            <h1>Recent Work</h1>
            <p>
                Here is some of my most recent public work. Feel free to check
                out some of my <Link href="/work">other work</Link>.
            </p>

            <RecentWork />
        </>
    );
}

export default Home;
