import { Fragment } from 'react'

import Button from '../ui/button'
import Check from '../icons/check'
import styles from './content.module.css'

export default function content() {
    return (
        <Fragment>
            <div className={styles.negative}>
                <div className={`container`}>
                    <div className={`columns`}>
                        <div
                            className={`col col-md-6 centered ${styles.principal} ${styles.verticalCentered}`}
                        >
                            Ideal para amantes del ejercicio y el crecimiento
                            personal.
                        </div>
                        <div className='col col-md-6'>
                            <ul className={styles.list}>
                                <li>
                                    <Check />
                                    <span>
                                        Anti-inflamatorio: Combate el sobre peso
                                    </span>
                                </li>
                                <li>
                                    <Check />
                                    <span>Empoderador: Nutre a tu cerebro</span>
                                </li>
                                <li>
                                    <Check />
                                    <span>
                                        Amigable con todos, en especial con tus
                                        seres amados
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container ${styles.callToAction}`}>
                <div className='columns'>
                    <div className='col centered'>
                        <p className={`${styles.principal} ${styles.callText}`}>
                            Adquiere Browly y empodera tu cuerpo y mente
                        </p>
                        <Button />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
