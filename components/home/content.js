import Button from '../ui/button'
import styles from './content.module.css'

export default function content() {
    return (
        <div className='container'>
            <div className='columns'>
                <div className='col col-md-6'>
                    Ideal para amantes del ejercicio y el crecimiento personal.
                </div>
                <div className='col col-md-6'>
                    <ul>
                        <li>Anti-inflamatorio: Combate el sobre peso</li>
                        <li>Empoderador: Nutre a tu cerebro</li>
                        <li>Amigable con todos, en especial con tus seres amados</li>
                    </ul>
                </div>
            </div>
            <div className='columns'>
                <div className='col'>
                    <p>Adquiere Browly y empodera tu cuerpo y mente</p>
                    <Button />
                </div>
            </div>
        </div>
    )
}
