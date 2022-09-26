import styles from '../styles/button.module.scss'

interface ButtonProps {
    href: string
    type?: "secondary"
}

export function Button({ href, type, children }: React.PropsWithChildren<ButtonProps>) {
    return <a
        className={styles.button + " " + ((type === "secondary") ? styles.secondary : "")}
        href={href}
        target="_blank" rel="noopener noreferrer">
        {children}
    </a>
}