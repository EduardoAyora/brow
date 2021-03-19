import { useState, useEffect } from 'react'

import Button from '../ui/button'
import styles from './hero.module.css'

export default function hero() {
    const [seconds, setSeconds] = useState(5)

    useEffect(() => {
        let timer  = setTimeout(() => {
            if (seconds === 0) return
            setSeconds(prev => prev - 1)
        }, 1000)
        
        return () => clearTimeout(timer)
    }, [seconds])

    return (
        <div className='container'>
            <div className='columns'>
                <div className='col'>
                    <div className={styles.timer}>
                        <p className={`${styles.leftTime} ${seconds === 0 && styles.moreTime}`}>{seconds}</p>
                        <p className={styles.leftTimeDescription}>
                            Tiempo restante
                        </p>
                    </div>
                    <div className={styles.callToAction}>
                        <h1 className={styles.title}>Browly</h1>
                        <h2 className={styles.description}>
                            Transforma tu Ser, Hacer y Pensar
                        </h2>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}
