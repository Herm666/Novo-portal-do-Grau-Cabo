'use client'

import { Transition } from '@/common/animatons/Transition'
import styles from './Nav.module.css'

interface IProps{
    page: string
}

export default function Menu({page}: IProps) {
    return(
        <menu className={styles.menu}>

            <div className={styles.links}>
                <li style={
                    {
                        opacity: page == "cursos" ? 0.5 : 1,
                        pointerEvents: page == "cursos" ? "none" : "all",
                    }
                }>cursos</li>
                <li style={
                    {
                        opacity: page == "wifi" ? 0.5 : 1,
                        pointerEvents: page == "wifi" ? "none" : "all",
                    }
                } onClick={()=> { Transition({to: '/pages/Wifi'}) }}>rede wi-fi</li>
            </div>

            <div className={styles.lineMenu}></div>

            <div className={styles.links}>
                <li style={
                    {
                        opacity: page == "contatos" ? 0.5 : 1,
                        pointerEvents: page == "contatos" ? "none" : "all",
                    }
                }>contatos</li>
                <li style={
                    {
                        opacity: page == "portal" ? 0.5 : 1,
                        pointerEvents: page == "portal" ? "none" : "all",
                    }
                }  onClick={()=> { Transition({to: '/pages/AcademicPortal'}) }}>portal acadêmico</li>
            </div>
            
        </menu>
    )
}