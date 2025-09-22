import Button from '@/common/components/Button'
import styles from './Iframe.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Iframe() {
    return(
        <section className={styles.recovery}>
            <div className={styles.button}>
                <Button className='btnFrame' text='home'  click={()=> { Transition({to: "/"}) }}/>
            </div>
            <iframe className={styles.frame} src="https://docs.google.com/forms/d/e/1FAIpQLSc3C2yPsnzDL5jYpbqmg4tay4b-JZG1UvGyarjbDNkKxhgk-Q/viewform"></iframe>
        </section>
    )
}