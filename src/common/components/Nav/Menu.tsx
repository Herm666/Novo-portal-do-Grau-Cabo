import styles from './Nav.module.css'

export default function Menu() {
    return(
        <menu className={styles.menu}>
            <div className={styles.links}>
                <li>cursos</li>
                <li>rede wi-fi</li>
            </div>
            <div className={styles.lineMenu}></div>
            <div className={styles.links}>
                <li>contatos</li>
                <li>portal acadêmico</li>
            </div>
        </menu>
    )
}