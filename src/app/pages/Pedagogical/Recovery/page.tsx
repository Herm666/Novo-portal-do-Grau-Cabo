'use client'

import PageTransition from "@/common/components/PageTransition"
import { useLayoutEffect } from "react"
import Iframe from "./layouts/Iframe"
import { TransitionOut } from "@/common/animatons/Transition"

export default function Recovery() {
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