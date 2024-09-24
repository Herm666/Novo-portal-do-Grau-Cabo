import styles from './PageTransition.module.css'

interface IProps{
    heightInitial: string
    heightInitialBlocks: string
}

export default function PageTransition({heightInitial, heightInitialBlocks}: IProps) {
    return(
        <div className={styles.container} style={{height: heightInitial}}>
            <div className={styles.block} style={{height: heightInitialBlocks}}></div>
            <div className={styles.block} style={{height: heightInitialBlocks}}></div>
            <div className={styles.block} style={{height: heightInitialBlocks}}></div>
            <div className={styles.block} style={{height: heightInitialBlocks}}></div>
        </div>
    )
}