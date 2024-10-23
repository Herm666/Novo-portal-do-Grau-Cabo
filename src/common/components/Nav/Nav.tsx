'use client'

import { CloseNav, OpenNav } from '@/common/animatons/OpenNav';
import styles from './Nav.module.css';
import Overlay from './Overlay';
import { useState } from 'react';
import { Transition } from '@/common/animatons/Transition';

interface IProps {
    page: string;
}

export default function Nav({ page }: IProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);   

    const handleToggle = () => {
        setIsOpen((last) => {
            const newState = !last;

            if (newState) {
                OpenNav();
            } else {
                CloseNav();
            }

            return newState;
        });

        console.log(isOpen)
    };

    return (
        <nav className={styles.nav}>
            <button className={styles.button} onClick={handleToggle}>
                <div className={styles.lines}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                menu
            </button>

            <img src="/logo.png" alt="logo Grau Técnico" onClick={() => Transition({ to: "/" })} />

          
            <Overlay page={page}/>
        </nav>
    );
}
