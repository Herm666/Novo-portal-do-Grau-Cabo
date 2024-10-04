import Button from '@/common/components/Button'
import styles from './Grids.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Grids() {
    return (
        <section className={styles.container}>
            <div className={styles.grids}>

                <div className={styles.grid1}>
                    <h1>ead <br /> técnico</h1>
                    <p className={styles.paragraphGrid1}>
                        Pedidos de declarações <br />
                        pedidos de carteira <br />
                        estudantil
                    </p>

                    <img className={styles.badNote} src="/AcademicPortal/student.png" alt="" />

                    <div className={styles.bottomGrid1}>
                        <div className={styles.lineGrid1}></div>
                        <div className={styles.button}>
                            <Button text='acesssar' className='buttonGrid1' click={() => { Transition({ to: "/pages/Pedagogical/Recovery" }) }} />
                        </div>
                    </div>

                </div>

                <div className={styles.grid2}>
                    <h1 className="average">portal <br /> acadêmico</h1>

                    <p className={styles.paragraphGrid2}>Pedidos de declarações <br />
                        pedidos de carteira <br />
                        estudantil
                    </p>

                    <img className={styles.student2} src="/AcademicPortal/student2.png" alt="" />

                    <div className={styles.bottomGrid2}>
                        <div className={styles.lineGrid2}></div>
                        <div className={styles.button}>
                            <Button text='acesssar' className='buttonGrid2' click={() => { Transition({ to: "/pages/Pedagogical/Notes" }) }} />
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}