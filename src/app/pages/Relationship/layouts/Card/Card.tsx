'use client'
import Button from '@/common/components/Button'
import styles from './Card.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Card() {
    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <h1 className='large'>acordo <br /> financeiro</h1>
                <p className={styles.paragraph}>clique para fazer o melhor acordo <br />
                financeiro específico para você
                </p>

                <img className={styles.money} src="/relationship/money.png" alt="" />

                <div className={styles.bottom}>
                    <div className={styles.line}></div>
                    <div className={styles.button}>
                        <Button className='btnRelationship' text='acessar' click={() => { Transition({to: "/pages/Relationship/Agreement"}) }} />
                    </div>
                </div>

                <svg className={styles.bubbles} width="17.76vw" height="27.135vw" viewBox="0 0 341 521" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="288.93" cy="209.124" r="36.75" transform="rotate(133.364 288.93 209.124)" fill="black" />
                    <circle cx="164.064" cy="369.732" r="36.75" transform="rotate(133.364 164.064 369.732)" fill="black" />
                    <circle cx="274.147" cy="25.9753" r="18.375" transform="rotate(133.364 274.147 25.9753)" fill="black" />
                    <circle cx="25.9756" cy="494.64" r="18.375" transform="rotate(133.364 25.9756 494.64)" fill="black" />
                </svg>

            </div>
        </section>
    )
}