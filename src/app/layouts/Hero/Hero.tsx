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
            <img src="/logo.png" alt="Logo grau técnico" />

            <div className={styles.button} >
                <Button className='btnHero' click={()=> {Transition({to: "/pages/Home"})} }/>
            </div>
        </section>
    )
}