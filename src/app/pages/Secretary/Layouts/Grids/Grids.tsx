import Button from '@/common/components/Button'
import styles from './Grids.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Grids() {
    return (
        <section className={styles.container}>
            <div className={styles.grids}>
                <div className={styles.grid1}>
                    <h1 className='small'>carteira <br /> estudantil</h1>
                    <p className={styles.paragraphGrid1}>Faça sua carteira <br />
                    estudantil
                    </p>

                    <img className={styles.student_card} src="/secretaria/student_card.png" alt="" />

                    <div className={styles.bottomGrid1}>
                        <div className={styles.lineGrid1}></div>
                        <div className={styles.button}>
                            <Button text='acesssar' className='buttonGrid1' click={() => { Transition({to: "/pages/Secretary/StudentCard"}) }} />
                        </div>
                    </div>

                    <svg className={styles.bubblesGrid1} width="5.677vw" height="10.573vw" viewBox="0 0 109 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="47.853" cy="83.0672" r="17.395" transform="rotate(-33.9717 47.853 83.0672)" fill="black" />
                        <circle cx="17.0042" cy="186.004" r="12.25" transform="rotate(-33.9717 17.0042 186.004)" fill="black" />
                        <circle cx="92.0042" cy="17.0044" r="12.25" transform="rotate(-33.9717 92.0042 17.0044)" fill="black" />
                    </svg>

                </div>

                <div className={styles.grid2}>
                    <h1 className="average">declarações</h1>
                    <p className={styles.paragraphGrid2}>faça seu pedido de <br />
                    declaração
                    </p>

                    <img className={styles.declaration} src="/secretaria/declaration.png" alt="" />

                    <div className={styles.bottomGrid2}>
                        <div className={styles.lineGrid2}></div>
                        <div className={styles.button}>
                            <Button text='acesssar' className='buttonGrid2' click={() => { Transition({to: "/pages/Secretary/Declaration"}) }} />
                        </div>
                    </div>

                    <svg className={styles.bubblesGrid2} width="16.875vw" height="11.979vw" viewBox="0 0 324 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="64.105" cy="101.381" r="24.5" transform="rotate(-18.6575 64.105 101.381)" fill="black" />
                        <circle cx="187.851" cy="45.8757" r="24.5" transform="rotate(-18.6575 187.851 45.8757)" fill="black" />
                        <circle cx="15.5251" cy="213.831" r="12.25" transform="rotate(-18.6575 15.5251 213.831)" fill="black" />
                        <circle cx="308.217" cy="15.5252" r="12.25" transform="rotate(-18.6575 308.217 15.5252)" fill="black" />
                    </svg>

                </div>
            </div>
        </section>
    )
}