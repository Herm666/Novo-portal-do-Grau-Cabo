import styles from '@/common/components/PageTransition/PageTransition.module.css'
import gsap from 'gsap'

interface IProps{
    to: string
}

export function Transition({to}:IProps){
    gsap.to(`.${styles.container}`,{
        height: "100dvh",
        duration: 0.1
    })
    gsap.to(`.${styles.block}`,{
        height: "100dvh",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.08,
        delay: 0.1
    })

    setTimeout(()=>{
        window.open(`${to}`, "_self")
    }, 2000)
}

export function TransitionOut(){
    gsap.to(`.${styles.container}`,{
        height: "0dvh",
        duration: 0.1,
        delay: 1.2
    })
    gsap.to(`.${styles.block}`,{
        height: "0dvh",
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.08,
    })
}