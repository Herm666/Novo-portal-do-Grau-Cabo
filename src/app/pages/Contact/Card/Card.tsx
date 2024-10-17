'use client';
import styles from './Card.module.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Card() {
    const refWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = refWrapper.current;

        if (wrapper) {
            const amountToScroll = wrapper.scrollWidth + window.innerWidth;

            const animationScroll = gsap.to(wrapper, {
                x: -amountToScroll,
                duration: 1,
                ease: "none"
            });

            const scrollTrigger = ScrollTrigger.create({
                trigger: `.${styles.wrapper}`,
                start: "top 20%",
                end: "+=" + amountToScroll,
                pin: true,
                animation: animationScroll,
                scrub: true,
            });

            return () => {
                scrollTrigger.kill();
            };
        }
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <h1 className='large'>Contatos</h1>
                <div ref={refWrapper} className={styles.wrapper}>
                    <div className={styles.horizontalCard1}></div>
                    <div className={styles.horizontalCard1}></div>
                    <div className={styles.horizontalCard1}></div>
                    <div className={styles.horizontalCard1}></div>
                </div>
            </div>
        </section>
    );
}
