import { FaBookOpen, FaPlay, FaCode } from 'react-icons/fa';

import styles from '../styles/work.module.scss'
import { Button } from '../components/button'

export function ML() {
    return <>
        <div className={styles.card}>
            <img src="../images/inpainting/thumb.png" alt="Inpainting results" />
            <div className={styles.content}>
                <h1>Image Inpainting using GANs</h1>

                <p>Filling in missing portions of images using a class of deep neural network.</p>
                <p>Co-developed with Adam Austerberry during EECS 442.</p>

                <Button
                    href="/content/research/inpainting.pdf">
                    <FaBookOpen className={styles.icon} /> Read paper
                </Button>
                <Button
                    href="https://colab.research.google.com/drive/1C5qQ7sWonYnmku2Ffn6kZaLd4WuApNPw?usp=sharing"
                    type="secondary">
                    <FaCode className={styles.icon} /> View source
                </Button>
            </div>
        </div>
    </>
}

export function VR() {
    return <>
        <div className={styles.card}>
            <img src="../images/vr-teleop/flow-diagram.png" alt="Inpainting results" />
            <div className={styles.content}>
                <h1>VR Teleop Controller</h1>

                <p>A ROS-based utility to enable the control & manipulation of two-armed 7-DOF robot using
                    virtual reality devices.</p>
                <p>Co-developed with Daniel Chen for the University of Michigan <a
                    href="http://arm.eecs.umich.edu/" target="_blank">ARM Lab</a>.</p>

                <Button
                    href="https://www.youtube.com/watch?v=EahUsJKVfw8">
                    <FaPlay className={styles.icon} /> Watch demo
                </Button>
                <Button
                    href="https://github.com/UM-ARM-Lab/vr_teleop"
                    type="secondary">
                    <FaCode className={styles.icon} /> View source
                </Button>
            </div>
        </div>
    </>
}

export function LOZ() {
    return <>
        <div className={styles.card}>
            <img src="../images/vr-teleop/flow-diagram.png" alt="Inpainting results" />
            <div className={styles.content}>
                <h1>VR Teleop Controller</h1>

                <p>A ROS-based utility to enable the control & manipulation of two-armed 7-DOF robot using
                    virtual reality devices.</p>
                <p>Co-developed with Daniel Chen for the University of Michigan <a
                    href="http://arm.eecs.umich.edu/" target="_blank">ARM Lab</a>.</p>

                <Button
                    href="https://www.youtube.com/watch?v=EahUsJKVfw8">
                    <FaPlay className={styles.icon} /> Watch demo
                </Button>
                <Button
                    href="https://github.com/UM-ARM-Lab/vr_teleop"
                    type="secondary">
                    <FaCode className={styles.icon} /> View source
                </Button>
            </div>
        </div>
    </>
}

export function MeahCounseling() {
    return <>
        <div className={styles.card}>
            <img src="../images/meahcounseling/preview.png" />
            <div className={styles.content}>
                <h1>MeahCounseling</h1>

                <p>Website for local licensed therapist using custom WordPress theme, enabling easy maintenance.</p>
                <p>Tested accessibility of colors and page navigation and assessed usability across device sizes.</p>

                <Button
                    href="https://meahcounseling.com/">
                    <FaPlay className={styles.icon} /> Visit site
                </Button>
            </div>
        </div>
    </>
}


{/* <h3>Research</h3>

            <h3>Games</h3>
            <div class="row mb-5">
                <div class="col-sm card m-2">
                    <img class="card-img-top" src="../images/loz-remake/banner.jpg">
                        <div class="card-body">
                            <h5 class="card-title">Legend of Zelda Remake</h5>

                            <p class="card-text">A recreation of the original Legend of Zelda videogame for the NES.</p>
                            <p class="card-text">Co-developed with <a href="http://danielheidorn.com/" target="_blank">Daniel Heidorn</a> during EECS 494.</p>

                            <a class="btn btn-primary d-block" href="/content/webgl/loz-remake/" role="button" target="_blank">
                                <i class="bi bi-play"></i>
                                Play game
                            </a>
                            <a class="btn btn-primary my-1 d-block" href="/content/downloads/loz-remake-win.zip" role="button" download>
                                <i class="bi bi-windows" alt="Windows"></i> Download game
                            </a>
                            <a class="btn btn-primary d-block" href="/content/downloads/loz-remake-mac.zip" role="button" download>
                                <i class="bi bi-apple" alt="Mac"></i> Download game
                            </a>
                        </div>
                </div>

                <div class="col-sm card m-2">
                    <img class="card-img-top" src="../images/brewis/banner.png">
                        <div class="card-body">
                            <h5 class="card-title">Brewis</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Tech demo build</h6>
                            <p class="card-text">Brew and sell ales, upgrade your equipment, and sell more ales!</p>
                            <p class="card-text">Developed during EECS 494.</p>

                            <a class="btn btn-primary d-block" href="/content/webgl/brewis/" role="button" target="_blank">
                                <i class="bi bi-play"></i>
                                Play game
                            </a>
                            <a class="btn btn-primary my-1 d-block" href="/content/downloads/brewis-win.zip" role="button" download>
                                <i class="bi bi-windows" alt="Windows"></i> Download game
                            </a>
                            <a class="btn btn-primary d-block" href="/content/downloads/brewis-mac.zip" role="button" download>
                                <i class="bi bi-apple" alt="Mac"></i> Download game
                            </a>
                        </div>
                </div>
            </div> */}