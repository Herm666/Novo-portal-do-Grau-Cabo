import Button from '@/common/components/Button'
import styles from './Grids.module.css'

export default function Grids() {
    return (
        <section className={styles.container}>
            <div className={styles.grids}>
                <div className={styles.grid1}>
                    <h1 className='small'>carteira <br /> estudantil</h1>
                    <p className={styles.paragraphGrid1}>Pedidos de declarações <br />
                        pedidos de carteira <br />
                        estudantil
                    </p>

                    <img className={styles.student_card} src="/secretaria/student_card.png" alt="" />

                    <div className={styles.bottomGrid1}>
                        <div className={styles.lineGrid1}></div>
                        <div className={styles.buttonGrid1}>
                            <Button className='buttonGrid1' click={() => { return }} />
                        </div>
                    </div>

                    <svg className={styles.bubblesGrid1} width="5.677vw" height="10.573vw" viewBox="0 0 109 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="47.853" cy="83.0672" r="17.395" transform="rotate(-33.9717 47.853 83.0672)" fill="black" />
                        <circle cx="17.0042" cy="186.004" r="12.25" transform="rotate(-33.9717 17.0042 186.004)" fill="black" />
                        <circle cx="92.0042" cy="17.0044" r="12.25" transform="rotate(-33.9717 92.0042 17.0044)" fill="black" />
                    </svg>

                </div>
                <div className={styles.grid2}></div>
            </div>
        </section>
    )
}