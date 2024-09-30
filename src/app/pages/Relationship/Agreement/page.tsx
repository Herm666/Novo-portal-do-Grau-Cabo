"use client"
import PageTransition from "@/common/components/PageTransition"
import Iframe from "./layouts/Iframe"
import { useLayoutEffect } from "react"
import { TransitionOut } from "@/common/animatons/Transition"

export default function Agreement() {
    
    useLayoutEffect(()=>{
        TransitionOut()
    },[])
    
    return(
        <>
        <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
        <main>
            <Iframe/>
        </main>
        </>
    )
}