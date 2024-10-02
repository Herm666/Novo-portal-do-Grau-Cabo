'use client'

import PageTransition from "@/common/components/PageTransition"
import { useLayoutEffect } from "react"
import Iframe from "./layouts/Iframe"
import { TransitionOut } from "@/common/animatons/Transition"
import VideoBackground from "@/common/components/VideoBackground"

export default function Notes() {
    useLayoutEffect(()=>{
        TransitionOut()
    },[])
    
    return(
        <>
        <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
        <main>
            <VideoBackground/>
            <Iframe/>
        </main>
        </>
    )
}