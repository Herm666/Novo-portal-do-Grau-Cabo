'use client'

import Button from '@/common/components/Button'
import styles from './Hero.module.css'
import { Transition, TransitionOut } from '@/common/animatons/Transition'
import { useEffect } from 'react'

export default function Hero() {

    useEffect(()=>{
        TransitionOut()
    },[])

    return (
        <section className={styles.hero}>
            <img src="/logo2.png" alt="Logo grau técnico" />

            <div className={styles.button} >
                <Button text='acesssar' className='btnHero' click={()=> {Transition({to: "/pages/Home"})} }/>
            </div>
        </section>
    )
}