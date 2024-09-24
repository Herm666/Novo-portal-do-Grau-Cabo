import Button from '@/common/components/Button'
import styles from './Grids.module.css'
import { Transition } from '@/common/animatons/Transition'

export default function Grids() {
    return (
        <section className={styles.container}>
            <div className={styles.grids}>
                <div className={styles.grid}>

                    <h1>secretaria</h1>
                    <h1 className={styles.title}>secretaria</h1>
                    <h1 className={styles.title2}>secretaria</h1>
                    <img className={styles.imageGrid1} src="/icon.png" alt="woman of grau técnico" />
                    <p className={styles.paragraphGrid1}>
                        Pedidos de declarações <br />
                        pedidos de carteira <br />
                        estudantil
                    </p>
                    <div className={styles.button}>
                        <Button className='btnGrid1' width='13.75vw' height='4.635vw' click={() => { Transition({ to: "/" }) }} />
                    </div>

                    <svg
                        className={styles.circles}
                        width="19.023vw"
                        height="7.331vw"
                        viewBox="0 0 366 141"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">

                        <circle cx="94.5" cy="37.5" r="24.5" fill="black" />
                        <circle cx="94.5" cy="37.5" r="24.5" fill="black" />
                        <circle cx="229.5" cy="24.5" r="24.5" fill="black" />
                        <circle cx="229.5" cy="24.5" r="24.5" fill="black" />
                        <circle cx="12.5" cy="128.5" r="12.25" fill="black" />
                        <circle cx="12.5" cy="128.5" r="12.25" fill="black" />
                        <circle cx="353.25" cy="34.25" r="12.25" fill="black" />
                        <circle cx="353.25" cy="34.25" r="12.25" fill="black" />

                    </svg>

                </div>
                <div className={styles.grid2}>
                    <h1 className='small'>pedagógico</h1>
                    <p>
                        inscrições para recuperações <br />
                        vizualizar suas notas <br />
                        avaliar coordenador
                    </p>
                    <div className={styles.buttonGrid2}>

                    <Button className='btnGrid2' width='10.863vw' height='3.662vw' click={() => {return}}/>
                    </div>
                    <img src="/woman.png" alt="" />
                </div>
            </div>
        </section>
    )
}