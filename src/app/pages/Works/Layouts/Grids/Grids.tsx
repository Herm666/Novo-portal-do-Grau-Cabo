import Button from '@/common/components/Button'
import styles from './Grids.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Grids() {
    return (
        <section className={styles.container}>
            <div className={styles.grids}>
                <div className={styles.grid}>

                    <h1>abre</h1>
                    <h4 className={styles.subTitle}>Educação, emprego e estágio</h4>
                    <img className={styles.imageGrid1} src="/works/man.png" alt="woman of grau técnico" />
                    <img className={styles.abre} src="/works/abre.png" alt="" />
                    <p className={styles.paragraphGrid1}>
                        Pedidos de declarações <br />
                        pedidos de carteira <br />
                        estudantil
                    </p>

                    <div className={styles.bottom}>
                        <div className={styles.line}></div>

                        <div className={styles.button}>
                            <Button text='acesssar' className='btnGrid1' click={() => { Transition({ to: "/pages/Works/Abre" }) }} />
                        </div>
                    </div>

                    <svg className={styles.bubblesGrid1} width="20.104vw" height="8.958vw" viewBox="0 0 386 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="97.9629" cy="70.4351" r="24.5" transform="rotate(2.09531 97.9629 70.4351)" fill="black" />
                        <circle cx="238.379" cy="25.3794" r="24.5" transform="rotate(2.09531 238.379 25.3794)" fill="black" />
                        <circle cx="12.6904" cy="158.376" r="12.25" transform="rotate(2.09531 12.6904 158.376)" fill="black" />
                        <circle cx="372.69" cy="20.6897" r="12.25" transform="rotate(2.09531 372.69 20.6897)" fill="black" />
                    </svg>

                </div>

                <div className={styles.grid2}>
                    <h1>ciee</h1>
                    <h4 className={styles.subTitle}>centro de integração empresa-escola</h4>
                    <p className={styles.paragraphGrid2}>
                        inscrições para recuperações <br />
                        vizualizar suas notas <br />
                        avaliar coordenador
                    </p>

                    <div className={styles.bottom}>
                        <div className={styles.line}></div>

                        <div className={styles.button}>
                            <Button text='acesssar' className='btnGrid2' click={() => { Transition({ to: "/pages/Works/Ciee" }) }} />
                        </div>
                    </div>
                    <img className={styles.imageGrid2} src="/works/woman.png" alt="woman 3d icon" />
                    <img className={styles.ciee} src="/works/ciee.png" alt="" />
                </div>
            </div>

            <div className={styles.grids}>

                <div className={styles.grid3}>
                    <h1 >iel</h1>
                    <h4 className={styles.subTitle}>instituto euvaldo lodi</h4>
                    <p className={styles.paragraphGrid3}>
                        localize vagas de empregos <br />
                        ou estágios em sua area.
                    </p>


                    <img src="/works/student.png" alt="man icon" />

                    <div className={styles.bottom}>
                        <div className={styles.line}></div>

                        <div className={styles.button}>
                            <Button text='acesssar' className='btnGrid3' click={() => { Transition({ to: "/pages/Works/Iel" }) }} />
                        </div>
                    </div>

                    <svg className={styles.bubblesGrid3} width="10.104vw" height="8.958vw" viewBox="0 0 386 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="97.9629" cy="70.4351" r="24.5" transform="rotate(2.09531 97.9629 70.4351)" fill="black" />
                        <circle cx="238.379" cy="25.3794" r="24.5" transform="rotate(2.09531 238.379 25.3794)" fill="black" />
                        <circle cx="12.6904" cy="158.376" r="12.25" transform="rotate(2.09531 12.6904 158.376)" fill="black" />
                        <circle cx="372.69" cy="20.6897" r="12.25" transform="rotate(2.09531 372.69 20.6897)" fill="black" />
                    </svg>
                </div>

                <div className={styles.grid4}>
                    <h1 className='small'>instagram</h1>
                    <p className='small'>
                        siga-nos no instagram <br />
                        para ficar por dentro <br />
                        de todas as informações.
                    </p>

                    <img src="/works/instagram.png" alt="" />

                    <div className={styles.buttonGrid4}>
                        <Button text='acesssar' className='buttonGrid4' click={() => { Transition({ to: "/pages/Works/Instagram" }) }} />
                    </div>

                </div>
            </div>
        </section>
    )
}