import styles from './button.module.css'

export default function button() {
    return (
        <a
            className={styles.button}
            target='_blank'
            href='https://wa.me/593984709259?text=Me%20interesa%20el%20producto%20browly'
        >
            Comprar ahora por $3
        </a>
    )
}
