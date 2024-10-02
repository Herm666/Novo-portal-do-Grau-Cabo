import Menu from './Menu'
import styles from './Nav.module.css'

interface IProps{
    page: string
}

export default function Overlay({page}: IProps) {
    return(
        <div className={styles.overlay}>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>

            <Menu page={page}/>
        </div>
    )
}