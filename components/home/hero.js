import Button from '../ui/button'
import styles from './hero.module.css'

export default function hero() {
    return (
        <div className='container'>
            <div className='columns'>
                <div className='col'>
                    <div className={styles.timer}>
                        <p className={styles.leftTime}>0</p>
                        <p className={styles.leftTimeDescription}>Tiempo restante</p>
                    </div>
                    <div className={styles.callToAction}>
                        <h1 className={styles.title}>Browly</h1>
                        <h2 className={styles.description}>Transforma tu Ser, Hacer y Pensar</h2>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}
