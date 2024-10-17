'use client'
import { TransitionOut } from "@/common/animatons/Transition"
import Nav from "@/common/components/Nav"
import PageTransition from "@/common/components/PageTransition"
import { useLayoutEffect } from "react"
import Grids from "./Layouts/Grids"
import VideoBackground from "@/common/components/VideoBackground"
import backToHome from "@/common/functions/backToHome"

export default function Pedagogical() {


    useLayoutEffect(() => {
        TransitionOut()
    }, [])
    
    setTimeout(()=>{
        backToHome() 
    }, 20000)  

    return (
        <>
            <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh" />
            <header>
                <Nav page="pedagogical"/>
            </header>
            <main>
                <VideoBackground/>
                <Grids/>
            </main>
        </>
    )
}