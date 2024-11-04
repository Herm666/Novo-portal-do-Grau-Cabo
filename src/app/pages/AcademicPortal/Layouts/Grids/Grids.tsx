import Button from '@/common/components/Button'
import styles from './Grids.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Grids() {
    return (
        <section className={styles.container}>
            <div className={styles.grids}>

                <div className={styles.grid1}>
                    <h1>ead <br /> técnico</h1>
            
                    <img className={styles.badNote} src="/AcademicPortal/student.png" alt="" />

                    <div className={styles.bottomGrid1}>
                        <div className={styles.lineGrid1}></div>
                        <div className={styles.button}>
                            <Button text='acessar' className='buttonGrid1' click={() => { Transition({ to: "/pages/AcademicPortal/EAD" }) }} />
                        </div>
                    </div>

                </div>

                <div className={styles.grid2}>
                    <h1 className="average">portal <br /> acadêmico</h1>

                    <img className={styles.student2} src="/AcademicPortal/student2.png" alt="" />

                    <div className={styles.bottomGrid2}>
                        <div className={styles.lineGrid2}></div>
                        <div className={styles.button}>
                            <Button text='acessar' className='buttonGrid2' click={() => { Transition({ to: "/pages/AcademicPortal/Portal" }) }} />
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}