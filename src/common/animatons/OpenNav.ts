import gsap from "gsap";
import styles from '../components/Nav/Nav.module.css'

export function OpenNav() {
    gsap.to(`.${styles.overlay}`, {
        height: "21.771vw",
        duration: 0.1
    })

    gsap.to(`.${styles.block}`, {
        height: "21.771vw",
        duration: 1,
        stagger: 0.08,
        ease: "power2.inOut"
    })

    gsap.to(`.${styles.links} li`,{
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "elastic.inOut(1,9)",
        delay: 0.7,
    })

    gsap.to(`.${styles.lineMenu}`,{
        width:'22.344vw',
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3,
    })

    gsap.to(`.${styles.line}`, {
        background: "#fff",
        duration: 1,
        ease: "power2.inOut"
    })
    gsap.to(`.${styles.button}`, {
        color: "#fff",
        duration: 1,
        ease: "power2.inOut"
    })
}
export function CloseNav() {

    gsap.to(`.${styles.links} li`,{
        y: "200%",
        duration: 1,
        stagger: 0.1,
        ease: "elastic.inOut(1,9)",
      
    })

    gsap.to(`.${styles.lineMenu}`,{
        width:'0vw',
        duration: 1,
        ease: "power2.inOut",
        delay: 0.7
    })

    gsap.to(`.${styles.overlay}`, {
        height: "0vw",
        duration: 0.1,
        delay: 1.1
    })

    gsap.to(`.${styles.block}`, {
        height: "0vw",
        duration: 1,
        stagger: 0.08,
        ease: "power2.inOut",
        delay: 1.1
    })


    gsap.to(`.${styles.line}`, {
        background: "#000",
        duration: 1,
        ease: "power2.inOut",
        delay: 1.1
    })
    gsap.to(`.${styles.button}`, {
        color: "#000",
        duration: 1,
        ease: "power2.inOut",
        delay: 1.1
    })
}