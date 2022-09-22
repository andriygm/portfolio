import styles from '../styles/footer.module.scss'

function Footer() {
    return <>
        <footer className={styles.footer}>
            <p>Made with ❤️ by Andriy Massimilla</p>

            <a className='bi bi-github text-decoration-none'
                href='https://github.com/andriygm/portfolio/'
                target='_blank' rel='noreferrer'> View this site on GitHub</a>
        </footer>
    </>
}

export default Footer