import Button from '@/common/components/Button'
import styles from './Iframe.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Iframe() {
    return(
        <section className={styles.recovery}>
            <div className={styles.button}>
                <Button className='btnFrame' text='home'  click={()=> { Transition({to: "/"}) }}/>
            </div>
            <iframe className={styles.frame} src="https://docs.google.com/forms/d/e/1FAIpQLSeXxg81xzT8Vq-lyRt56gvqAL7S0HJ5t9NW3WvBlTeTT60u-g/viewform"></iframe>
        </section>
    )
}