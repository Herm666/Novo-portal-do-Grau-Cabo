'use client';
import styles from './Card.module.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Info from '../Info/Info';

gsap.registerPlugin(ScrollTrigger);

export default function Card() {
    const refWrapper = useRef<HTMLDivElement>(null);

    const pedagogical = [
        {
            name: "Coord. Anne",
            status: "enfermagem",
            phone: "(81) 9 8625-1401"
        },
        {
            name: "Coord. Ranuzia",
            status: "Estágio enfermagem",
            phone: "(81) 9 8539-1485"
        },
        {
            name: "Coord. Camila",
            status: "Radiologia",
            phone: "(81) 9 8441-4873"
        },
        {
            name: "Coord. Daline",
            status: "STB - eletro e adm",
            phone: "(81) 9  8215-1745"
        },
        {
            name: "Coord. Ailza",
            status: "Coordenação geral",
            phone: "(81) 9 8462-1517"
        },
    ]

    const central = [
        {
            name: "Daiana",
            status: "",
            phone: "(81) 9 8828-0234"
        },
        {
            name: "Daniele",
            status: "",
            phone: "(81) 9 9135-4863"
        },
    ]

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
                        <div className={styles.horizontalCard1}>
                            {pedagogical.map((user)=>(
                                <Info name={user.name} phone={user.phone} status={user.status}/>
                            ))}
                        </div>
                        <div className={styles.horizontalCard2}>
                            <Info
                                name='secretaria'
                                status=''
                                phone='(81) 9 8215-1795'
                            />
                        </div>
                        <div className={styles.horizontalCard3}>
                            {central.map((user)=>(
                                <Info name={user.name} status={user.status} phone={user.phone}/>
                            ))}
                        </div>
                        <div className={styles.horizontalCard2}>
                          <Info 
                            name='Jessica souza'
                            status=''
                            phone='(81) 9 8666-1573'
                          />
                        </div>
                      
                </div>
            </div>
        </section>
    );
}
