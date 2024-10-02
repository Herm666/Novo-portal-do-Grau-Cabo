import styles from './VideoBackground.module.css'

export default function VideoBackground() {
    return(
        <video autoPlay loop muted className={styles.video} src="/bgHero.mp4"></video>
    )
}