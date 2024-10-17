import Button from '@/common/components/Button'
import styles from './Iframe.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Iframe() {
    return(
        <section className={styles.portal}>
            <div className={styles.button}>
                <Button className='btnFrame' text='home'  click={()=> { Transition({to: "/"}) }}/>
            </div>
            <iframe className={styles.frame} src="https://portais.qualinfo.net.br/grauteccabo/?plataforma=portal"></iframe>
        </section>
    )
}