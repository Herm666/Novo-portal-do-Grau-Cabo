import Button from '@/common/components/Button'
import styles from './Iframe.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Iframe() {
    return(
        <section className={styles.agreement}>
            <div className={styles.button}>
                <Button className='btnFrame' text='home'  click={()=> { Transition({to: "/"}) }}/>
            </div>
            <iframe className={styles.frame} src="https://docs.google.com/forms/d/e/1FAIpQLSdFyjZlKD-7PpjfHNwLHTKopX_4HQNrMo3Ij9KRzeqZ8Z5CoQ/viewform"></iframe>
        </section>
    )
}