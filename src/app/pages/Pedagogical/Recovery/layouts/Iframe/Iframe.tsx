import Button from '@/common/components/Button'
import styles from './Iframe.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Iframe() {
    return(
        <section className={styles.declaration}>
            <div className={styles.button}>
                <Button className='btnFrame' text='home'  click={()=> { Transition({to: "/"}) }}/>
            </div>
            <iframe className={styles.frame} src="https://docs.google.com/forms/d/e/1FAIpQLSeWP31mbK_DadqOukGm3XjuZKhqXxT1SuC6ISs-ZxPoMhlFdA/closedform"></iframe>
        </section>
    )
}