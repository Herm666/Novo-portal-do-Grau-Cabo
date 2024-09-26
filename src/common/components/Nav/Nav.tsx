'use client'

import { CloseNav, OpenNav } from '@/common/animatons/OpenNav'
import styles from './Nav.module.css'
import Overlay from './Overlay'
import { useState } from 'react'

export default function Nav() {

    const [isOpen, setIsOpen] = useState<boolean>(true)

    return(
        <nav className={styles.nav}>
            <button className={styles.button} onClick={()=>{
                setIsOpen((last)=> !last)

                isOpen? OpenNav() : CloseNav()
            }}>
                <div className={styles.lines}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                menu
            </button>

            <img src="/logo.png" alt="" />

            <Overlay/>
        </nav>
    )
}