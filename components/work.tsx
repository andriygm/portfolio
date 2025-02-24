import { FaBookOpen, FaPlay, FaCode, FaWindows, FaApple } from 'react-icons/fa';
import Image from "next/future/image";

import styles from "../styles/work.module.scss";
import { Button } from "../components/button";

import inpaintingThumbnail from "../images/thumbnails/inpainting.png";
import teleopThumbnail from "../images/thumbnails/teleop.png";
import lozThumbnail from "../images/thumbnails/loz/dungeon-crop.png";
import brewisThumbnail from "../images/thumbnails/brewis/title-screen.png";
import meahThumbnail from "../images/thumbnails/meah.png";
import portfolioThumbnail from "../images/thumbnails/portfolio.png";

export function ML() {
    return (
        <>
            <div className={styles.card}>
                <Image src={inpaintingThumbnail} alt="" placeholder="blur" />

                <div className={styles.content}>
                    <h1>Image Inpainting using GANs</h1>

                    <p>
                        Filling in missing portions of images using a class of
                        deep neural network.
                    </p>
                    <p>Co-developed with Adam Austerberry during EECS 442.</p>

                    <Button href="/content/research/inpainting.pdf">
                        <FaBookOpen className={styles.icon} /> Read paper
                    </Button>
                    <Button
                        href="https://colab.research.google.com/drive/1C5qQ7sWonYnmku2Ffn6kZaLd4WuApNPw?usp=sharing"
                        type="secondary"
                    >
                        <FaCode className={styles.icon} /> View source
                    </Button>
                </div>
            </div>
        </>
    );
}

export function VR() {
    return (
        <>
            <div className={styles.card}>
                <Image src={teleopThumbnail} alt="" placeholder="blur" />

                <div className={styles.content}>
                    <h1>VR Teleop Controller</h1>

                    <p>
                        A ROS-based utility to enable the control & manipulation
                        of two-armed 7-DOF robot using virtual reality devices.
                    </p>
                    <p>
                        Co-developed with{" "}
                        <a
                            href="https://www.linkedin.com/in/daniel-chen-a42199167/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Daniel Chen
                        </a>{" "}
                        for the University of Michigan{" "}
                        <a
                            href="http://arm.eecs.umich.edu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            ARM Lab
                        </a>
                        , with continued development from{" "}
                        <a
                            href="https://github.com/bsaund"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Brad Saund
                        </a>
                        .
                    </p>

                    <Button href="https://www.youtube.com/watch?v=EahUsJKVfw8">
                        <FaPlay className={styles.icon} /> Watch demo
                    </Button>
                    <Button
                        href="https://github.com/UM-ARM-Lab/vr_teleop"
                        type="secondary"
                    >
                        <FaCode className={styles.icon} /> View source
                    </Button>
                </div>
            </div>
        </>
    );
}

export function LOZ() {
    return (
        <>
            <div className={styles.card}>
                <Image src={lozThumbnail} alt="" placeholder="blur" />

                <div className={styles.content}>
                    <h1>Legend of Zelda Remake</h1>

                    <p>
                        A recreation of the original Legend of Zelda videogame
                        for the NES.
                    </p>
                    <p>
                        Co-developed with{" "}
                        <a
                            href="http://danielheidorn.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Daniel Heidorn
                        </a>{" "}
                        during EECS 494.
                    </p>

                    <Button href="/content/webgl/loz-remake/">
                        <FaPlay className={styles.icon} /> Play game
                    </Button>
                    <Button href="/content/downloads/loz-remake-win.zip">
                        <FaWindows className={styles.icon} /> Download for
                        Windows
                    </Button>
                    <Button href="/content/downloads/loz-remake-mac.zip">
                        <FaApple className={styles.icon} /> Download for Mac
                    </Button>
                </div>
            </div>
        </>
    );
}

export function BrewingGame() {
    return (
        <>
            <div className={styles.card}>
                <Image src={brewisThumbnail} alt="" placeholder="blur" />

                <div className={styles.content}>
                    <h1>Brewis</h1>

                    <p>
                        <em>
                            Brew and sell ales, upgrade your equipment, and sell
                            more ales!
                        </em>
                    </p>

                    <p>
                        Developed a 3D top-down brewing-themed game in Unity and
                        Blender with JIRA over the course of two weeks.
                    </p>
                    <p>Developed during EECS 494.</p>

                    <Button href="/content/webgl/brewis/">
                        <FaPlay className={styles.icon} /> Play game
                    </Button>
                    <Button href="/content/downloads/brewis-win.zip">
                        <FaWindows className={styles.icon} /> Download for
                        Windows
                    </Button>
                    <Button href="/content/downloads/brewis-mac.zip">
                        <FaApple className={styles.icon} /> Download for Mac
                    </Button>
                </div>
            </div>
        </>
    );
}

export function MeahCounseling() {
    return (
        <>
            <div className={styles.card}>
                <Image src={meahThumbnail} alt="" placeholder="blur" />

                <div className={styles.content}>
                    <h1>Meah Counseling</h1>

                    <p>
                        Website for local licensed therapist using WordPress
                        with custom theme, enabling easy maintenance.
                    </p>
                    <p>
                        Tested accessibility of colors and page navigation and
                        assessed usability across device sizes.
                    </p>

                    <Button href="https://meahcounseling.com/">
                        <FaPlay className={styles.icon} /> Visit site
                    </Button>
                </div>
            </div>
        </>
    );
}

export function Portfolio() {
    return (
        <>
            <div className={styles.card}>
                <Image src={portfolioThumbnail} alt="" placeholder="blur" />

                <div className={styles.content}>
                    <h1>My Portfolio</h1>

                    <p>
                        My professional portfolio showcasing projects I have
                        worked on. I started my portfolio using plain HTML and
                        CSS, but I have since moved to using React and Next.js.
                        This better follows DRY principles and allows me to use
                        React components to create a more dynamic portfolio.
                    </p>

                    <p>
                        This project is continuously integrated, meaning that
                        changes to the main branch are automatically validated
                        and deployed.
                    </p>

                    <Button
                        href="https://github.com/andriygm/portfolio"
                        type="secondary"
                    >
                        <FaCode className={styles.icon} /> View source
                    </Button>
                </div>
            </div>
        </>
    );
}