import { SocialIcon } from 'react-social-icons';

import styles from '../styles/footer.module.scss'

function Footer() {
    return <>
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.about}>
                    <p>Made with ❤️ by Andriy Massimilla</p>

                    <p>
                        <a className='bi bi-github text-decoration-none'
                            href='https://github.com/andriygm/portfolio/'
                            target='_blank' rel='noreferrer'> View this site on GitHub</a>
                    </p>
                </div>

                <div className={styles.social}>
                    <SocialIcon url="https://www.linkedin.com/in/andriygm/" bgColor="white" className={styles.icon} target="_blank"></SocialIcon>
                    <SocialIcon url="https://www.github.com/andriygm/" bgColor="white" className={styles.icon} target="_blank"></SocialIcon>
                    <SocialIcon url="https://www.flickr.com/photos/150862593@N05/" bgColor="white" className={styles.icon} target="_blank"></SocialIcon>
                </div>
            </div>
        </footer>
    </>
}

export default Footer