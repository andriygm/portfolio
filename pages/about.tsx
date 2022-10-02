import Head from "next/head"
import Image from "next/future/image";

import styles from "../styles/layout.module.scss";
import pripyat from "../images/pictures/pripyat.jpg";

function About() {
    return (
        <>
            <Head>
                <title>About — Andriy Massimilla</title>
            </Head>

            <h1>About</h1>
            <p>
                I{"'"}m a Computer Science graduate from the University of
                Michigan. I{"'"}ve taken classes in game design, computer
                vision, software engineering, philosophy, and others. I{"'"}m
                very fascinated by the intersection of technology and society,
                and I{"'"}m always looking for ways to make the world a better
                place.
            </p>

            <Image
                src={pripyat}
                alt="Abandoned bumper car"
                placeholder="blur"
                className={styles.photo}
            />

            <p>
                In my free time I write code, bike, play games with friends,
                ski, and cook good food. I{"'"}m also a big fan of the outdoors
                and love to hike, camp, and explore new places. Above is a
                picture I took of an abandoned bumper car in Pripyat, Ukraine, a
                city that was abandoned after the Chernobyl disaster.
            </p>
        </>
    );
}

export default About