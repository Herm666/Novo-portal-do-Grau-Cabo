import styles from './Info.module.css'

interface IProps{
    name: string,
    status: string,
    phone: string
}

export default function Info({name, phone, status}: IProps) {
    return(
        <div className={styles.info}>
            <h4 className={styles.name}>{name}</h4>
            <h5 className={styles.status}>{status}</h5>
            <h4 className={styles.phone}>{phone}</h4>
        </div>
    )
}