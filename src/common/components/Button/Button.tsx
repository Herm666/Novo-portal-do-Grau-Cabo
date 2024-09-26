
import { hover, hoverOut } from '../../animatons/hover';
import styles from './Button.module.css'



interface IProps {
    click: () => void
   
    className: string
}

export default function Button({ click, className }: IProps) {



    return (
        <button onClick={() => { click() }} className={`${styles.button} ${className}`} onMouseEnter={()=> hover({className: className})} onMouseLeave={()=> hoverOut({className: className})}>
         
            <p>acesssar</p>
            
            <svg className={styles.arrow} width="1.363vw" height="1.363vw" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 3C32.5 1.61929 31.3807 0.500001 30 0.499999L7.5 0.5C6.11929 0.5 5 1.61929 5 3C5 4.38071 6.11929 5.5 7.5 5.5H27.5V25.5C27.5 26.8807 28.6193 28 30 28C31.3807 28 32.5 26.8807 32.5 25.5L32.5 3ZM3.76777 32.7678L31.7678 4.76777L28.2322 1.23223L0.232233 29.2322L3.76777 32.7678Z" fill="white" />
            </svg>

            <svg className={styles.arrow2} width="1.363vw" height="1.363vw" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 3C32.5 1.61929 31.3807 0.500001 30 0.499999L7.5 0.5C6.11929 0.5 5 1.61929 5 3C5 4.38071 6.11929 5.5 7.5 5.5H27.5V25.5C27.5 26.8807 28.6193 28 30 28C31.3807 28 32.5 26.8807 32.5 25.5L32.5 3ZM3.76777 32.7678L31.7678 4.76777L28.2322 1.23223L0.232233 29.2322L3.76777 32.7678Z" fill="white" />
            </svg>

        </button>
    )
}