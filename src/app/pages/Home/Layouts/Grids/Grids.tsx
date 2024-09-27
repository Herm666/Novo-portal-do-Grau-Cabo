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
                        <Button className='btnGrid1' click={() => { Transition({ to: "/" }) }} />
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
                    <p className={styles.paragraphGrid2}>
                        inscrições para recuperações <br />
                        vizualizar suas notas <br />
                        avaliar coordenador
                    </p>
                    <div className={styles.buttonGrid2}>
                        <Button className='btnGrid2' click={() => { return }} />
                    </div>
                    <img src="/woman.png" alt="woman 3d icon" />

                    <svg className={styles.circlesGrid2} width="10.063vw" height="9.792vw" viewBox="0 0 270 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="33.6566" cy="153.873" r="24.5" transform="rotate(-31.259 33.6566 153.873)" fill="black" />
                        <circle cx="33.6566" cy="153.873" r="24.5" transform="rotate(-31.259 33.6566 153.873)" fill="black" />
                        <circle cx="142.313" cy="72.7076" r="24.5" transform="rotate(-31.259 142.313 72.7076)" fill="black" />
                        <circle cx="142.313" cy="72.7076" r="24.5" transform="rotate(-31.259 142.313 72.7076)" fill="black" />
                        <circle cx="253.156" cy="16.8279" r="12.25" transform="rotate(-31.259 253.156 16.8279)" fill="black" />
                        <circle cx="253.156" cy="16.8279" r="12.25" transform="rotate(-31.259 253.156 16.8279)" fill="black" />
                    </svg>

                </div>

            </div>
            <div className={styles.grids}>

                <div className={styles.grid3}>
                    <h1 className='small'>empregabilidade</h1>
                    <p>
                        localize vagas de empregos <br />
                        ou estágios em sua area.
                    </p>

                    <div className={styles.buttonGrid3}>
                        <Button className='buttonGrid3' click={() => { return }} />
                    </div>

                    <img src="/man.png" alt="man icon" />
                </div>

                <div className={styles.grid4}>
                    <h1 className='small'>central</h1>
                    <h4>de relacionamento</h4>
                    <p>
                        negocie da melhor <br />
                        forma
                    </p>
                    
                    <div className={styles.buttonGrid4}>
                        <Button className='buttonGrid4' click={()=> {return}}/>
                    </div>

                
                </div>
            </div>
        </section>
    )
}