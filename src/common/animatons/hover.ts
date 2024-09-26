import gsap from "gsap";


interface IProps{
    className: string
}

export function hover({className}:IProps){

    gsap.to(`.${className}`,{
        scale: 1.1,
        duration: .5,
        ease: "power2.inOut"
    })

    gsap.to(`.${className} svg:first-of-type`,{
        top: "1vw",
        right: "1vw",
        duration: .5,
        opacity: 0,
        ease: "power2.inOut"
    })

    gsap.to(`.${className} svg:last-of-type`,{
        bottom: "1.8vw",
        right: "2vw",
        duration: .5,
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1
    })
}

export function hoverOut({className}: IProps){

    gsap.to(`.${className}`,{
        scale: 1,
        duration: .5,
        ease: "power2.inOut"
    })

    gsap.to(`.${className} svg:first-of-type`,{
        top: "1.7vw",
        right: "2vw",
        duration: .5,
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1
    })
    
    gsap.to(`.${className} svg:last-of-type`,{
        bottom: "0vw",
        right: "3.3vw",
        duration: .5,
        opacity: 0,
        ease: "power2.inOut",
    })
}